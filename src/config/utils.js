/**
 * Created by ycb on 2017/7/18.
 */
import {aliUrl, bucket} from '@/config/env'
import store from '@/store'

/**
 * 存储localStorage
 */
export const setStorage = (name, content) => {
  if (!name) return;
  if (content) {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 存储sessionStorage
 */
export const setSessionStorage = (name, content) => {
  if (!name) return;
  if (content) {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStorage = (name) => {
  if (!name) return;
  return JSON.parse(window.localStorage.getItem(name));
};

/**
 * 获取sessionStorage
 */
export const getSessionStorage = (name) => {
  if (!name) return;
  return JSON.parse(window.sessionStorage.getItem(name));
};

/**
 * 删除localStorage
 */
export const removeStorage = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 删除sessionStorage
 */
export const removeSessionStorage = (name) => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * 获取cookie
 */
export const getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return (arr[2]);
  } else {
    return null;
  }
};

/**
 * 设置cookie
 */
export const setCookie = (name, value, expiredays) => {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString());
};

/**
 * 删除cookie
 */
export const removeCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval !== null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

/**
 * 解析url地址参数
 * url （必须是字符串）
 * name （必须是字符串）
 */
export const getUrlParams = (url, name) => {
  if (!url || !name) {
    return
  }
  let reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
  let r = url.substr(1).match(reg);
  if (r !== null) {
    return unescape(r[2]);
  }
  return null;
};

/**
 * 生成当前时间的年月日
 */
export const timeToDate = () => {
  let time = new Date();
  let Y = time.getFullYear();
  let M = time.getMonth() + 1;
  let D = time.getDate();
  if (M < 10) {
    M = '0' + M
  }
  if (D < 10) {
    D = '0' + D
  }
  return `${Y.toString()}${M.toString()}${D.toString()}`
};

/**
 * 生成当前时间 + 随机20位字符串（字母+ 数字）
 */
export const randomString = () => {
  return `${timeToDate()}/${Math.random().toString(36).substr(2)}${parseInt(new Date().getTime() / parseInt(Math.random() * 1000 - 100 + 100))}`
};

/**
 * 验证是否是正实数（仅支持验证带2位小数正实数）
 */
export const isNumber = (number) => {
  const IS_NUMBER = /^[0-9]+(.[0-9]{1,2})?$/;
  return IS_NUMBER.test(number)
};

/**
 * 验证是否是非0正整数
 */
export const isInteger = (number) => {
  const IS_INTEGER = /^\+?[1-9][0-9]*$/;
  return IS_INTEGER.test(number)
};

/**
 * 验证是否是淘宝或者天猫链接地址
 */
export const isAliUrl = (url) => {
  const URL_REG = /((item|detail|s.click).(tmall|taobao).*?)/;
  return URL_REG.test(url)
};

/**
 * 上传图片到阿里云（分片上传）
 */
export const aliUploadImg = (key, file) => {
  return new Promise((resolve, reject) => {
    OSS.urllib.request(aliUrl, {method: 'GET'}, (err, response) => {
      if (err) {
        reject(err)
      }
      const result = JSON.parse(response);
      const client = new OSS.Wrapper({
        accessKeyId: result.AccessKeyId,
        accessKeySecret: result.AccessKeySecret,
        stsToken: result.SecurityToken,
        bucket: bucket,
        endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
        secure: true
      });
      client.multipartUpload(key, file).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  })
};

/**
 * 深度copy（数组，对象）
 */
export const extendDeep = (obj, child) => {
  let i, proxy;
  proxy = JSON.stringify(obj);
  proxy = JSON.parse(proxy);
  child = child || {};
  for (i in proxy) {
    if (proxy.hasOwnProperty(i)) {
      child[i] = proxy[i];
    }
  }
  proxy = null;
  return child;
};

/**
 * 实时获取服务端时间
 */
export const getSeverTime = () => {
  return store.state.severTime + new Date().getTime() - store.state.clientTime
};

/**
 * 生成随机6位小写字母组成的字符串
 */
export const randomLetter = () => {
  let result = [];
  for (let i = 0; i < 6; i++) {
    let ranNum = Math.ceil(Math.random() * 25);
    result.push(String.fromCharCode(97 + ranNum));
  }
  return result.toString().replace(/,/g, '');
};

/**
 * 对数字进行简单加密（主要用来加密任务id,活动id）
 */
export const encryption = (num) => {
  if (!num) {
    return
  }
  let newNum = num.toString().split('');
  for (let i = 0, len = newNum.length; i < len; i++) {
    newNum[i] += randomLetter();
  }
  return newNum.toString().replace(/,/g, '');
};

/**
 * 对进行加密后的数字进行解密
 */
export const decode = (string) => {
  if (!string) {
    return
  }
  let newString = string.match(/\d+/g);
  return parseInt(newString.join(',').replace(/,/g, ''));
};

/**
 * 生成卡首屏二维码地址
 */
export const blackSearchUrl = (key, id) => {
  if (!key || !id) {
    return
  }
  return `taobao://s.taobao.com/search?q=${key}&nid=${id}&ut_sk=1.utdid_${parseInt(Math.random() * 99999999 - 10000000 + 10000000)}_${parseInt(Math.random() * 9999999999999 - 1000000000000 + 1000000000000)}.TaoPassword-Outside.isv`
};

/**
 * 任务流程状态映射
 */
export const TaskErrorStatusList = (type) => {
  const mapList = {
    // 'pass_and_unclaimed': '已通过待下单',
    'pass_and_unclaimed': '下单剩余时间',
    'order_num_waiting_audit': '订单信息待审核',
    'order_num_error': '订单号有误',
    'trial_report_waiting_submit': '已下单待交买家秀',
    'trial_report_waiting_confirm': '买家秀待确认',
    'trial_report_unqualified': '买家秀不合格',
    'trial_end': '任务终止',
    'trial_finished': '活动完成',
    'timeout_auto_close': '任务超时终止',
    'buyer_manual_close': '拿手主动终止',
    'admin_manual_close': '管理员终止',
    'waiting_audit': '待审核',
    'audit_reject': '未通过',
    'zong_he': '综合',
    'xiao_liang': '销量',
    'ren_qi': '人气',
    'enchashment': '提现',
    'pay_for_task_deposit_seller': '支付活动担保金',
    'task_trad_record_seller': '商家活动交易记录',
    'task_return_seller': '活动结算返款',
    'showker_task_supplementary_seller': '补充任务担保金',
    'task_deposit_pay_shower': '任务担保金退款',
    'task_deposit_return_shower': '拿手担保金返款',
    'showker_task_timeout_supplementary_pay_seller': '超时自动补充保证',
    'task_delete_return_seller': '关闭活动返款-活动担保金',
    'enchashment_audit_ing': '提现审核中',
    'enchashment_audit_success': '提现审核通过',
    'enchashment_audit_defeat': '提现审核未通过',
    'enchashment_record': '提现交易记录',
    'recharge_record': '充值交易记录',
    'recharge': '充值-其它',
    'pay_for_task_deposit_supply_seller': '补交活动担保金',
    'pay_for_task_promotion_expenses': '支付活动打赏费',
    'pay_for_task_promotion_expenses_supply_seller': '补交活动打赏费',
    'task_delete_return_promotion_expenses_seller': '关闭活动返款-活动打赏费',
    'task_return_deposit_seller': '活动结算担保金返款',
    'task_return_promotion_expenses_seller': '活动结算打赏费返款',
    'reward_fee':'活动打赏费',
    'pinkage': '包邮',
    'mobile_exclusive': '手机专享',
    'tao_coin_deduction': '淘金币抵扣',
    'sales_return_7_plus': '7+天退货',
    'global_shopping': '全球购',
    'overseas_goods': '海外商品',
    'consumer_protect': '消费者保障',
    'pay_after_receive': '货到付款',
    'hua_pay_installment': '花呗分期',
    'wangwang_online': '旺旺在线',
    0: '活动',
    1: '充值',
    2: '提现',
    3: '会员订购',
    4: '邀请奖励-拿手',
    5: '活动提成-拿手',
    6: '推荐有礼奖励',
    // 7: '活动提成-商家',
    9: '打赏费',
    'waiting_resubmit': '待重新提交',
    'audit_pass': '审核通过',
    'deleted': '未通过',
    'recharge_alipay': '充值-支付宝',
    'recharge_wxpay': '充值-微信',
    'invite_seller_success': '成功邀请商家',
    'invite_showker_success': '成功邀请拿手',
    'seller_task_commission': '商家活动提成',
    'showker_task_commission': '拿手活动提成',
    'showker_reward_record': '推荐有礼奖励',
    'xiuba_record': '平台交易',
    'invite_reward_record': '奖励记录',
    'encashment': '提现',
    'OPEN_RED_ENVELOPE_WITHDRAW': '红包提取',
    'open_red_envelope_withdraw': '红包提取',
    7: '红包提取',
    'reward_record_3_withdraw': '推广奖励提取',
    8: '推广奖励提取',
    'waiting_add_to_cart': '放入购物车',
    'add_to_cart_done': '请在倒计时结束后去下单',
    'task_vas_return_shower': '活动返利',
  };
  return mapList[type];
};

/**
 * 投诉类型和投诉处理状态映射
 */
export const AppealCategorization = (type) => {
  const mapList = {
    'task_flow_related': '活动流程相关',
    'good_logistics_related': '商品物流相关',
    'payment_amount_related': '款项金额相关',
    'platform_suggest_related': '平台建议相关',
    'other': '其它',
    'waiting_handle': '待处理',
    'in_hand': '处理中',
    'handled': '已处理',
  };
  return mapList[type];
};
