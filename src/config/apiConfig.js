/**
 * Created by ycb on 2017/4/26.
 */
import axiosConfig from '../config/axiosConfig'
import {fetch} from "./axiosConfig";

export default {
  /**
   * 用户普通登录
   */
  firstApi(){
    return axiosConfig.post("/api/wwt.json")
  },

  login(params) {
    return axiosConfig.post("/api/login.json", params)
  },

  /**
   * 用户退出登录
   */
  loggedOut() {
    return axiosConfig.post("/api/logged-out.json")
  },

  /**
   * 检测用户信息是否过期
   */
  userCheckout() {
    return axiosConfig.post("/api/user-checkout.json")
  },

  /**
   * 首页大白播报接口
   */
  getHomeTaskTopLeftList() {
    return axiosConfig.post("/api/task/showker-newest.json")
  },

  /**
   * 获取新增商品，送出商品
   */
  getNewOutCommodityFunc(){
    return axiosConfig.post("/api/get-new-out-commodity.json")
  },

  /**
   * 获取短信验证码
   */
  getCode(params) {
    return axiosConfig.post("/api/send-verify-code.json", params)
  },

  /**
   * 获取银行卡信息
   */
  getBankCardInformation() {
    return axiosConfig.post("/api/get-bank-card-information.json")
  },

  /**
   * 验证重置密码短信
   */
  validatePaySmscode(params) {
    return axiosConfig.post("/api/user/account/check-phone-message-before-reset-pwd.json", params)
  },

  /**
   * 未登录前重置密码
   */
  resetAppPwd(params) {
    return axiosConfig.post("/api/user/account/resetAppPwd.json", params)
  },

  /**
   * 未登录前验证重置密码短信
   */
  checkApp(params) {
    return axiosConfig.post("/api/user/account/checkApp.json", params)
  },

  /**
   * 通过手机短信验证码重置支付密码
   */
  modifyPayPwd(params) {
    return axiosConfig.post("/api/user/account/reset-pay-pwd-by-smscode.json", params)
  },

  /**
   * 用户快速登录
   */
  checkFastSignIn(params) {
    return axiosConfig.post("/api/check-fast-sign-in.json", params)
  },

  /**
   * 用户注册
   */
  register(params) {
    return axiosConfig.post("/api/sign-up.json", params)
  },

  /**
   *获取用户交易列表
   */
  getTradList(params) {
    return axiosConfig.post("/api/get-trad-list.json", params)
  },

  /**
   * 添加银行卡
   */
  addBankCardInfo(params) {
    return axiosConfig.post("/api/add-bank-card.json", params)
  },

  /**
   * 申请提现
   */
  applyGetoutMoney(params) {
    return axiosConfig.post("/api/with-draw-apply.json", params)
  },

  /**
   * 显示提现列表
   */
  getWithDrawList(params) {
    return axiosConfig.post("/api/get-with-draw-list.json", params)
  },

  /**
   * 获取交易明细列表
   */
  getTradListDetails(params) {
    return axiosConfig.post("/api/get-trad-detail-list.json", params)
  },

  /**
   * 通过手机短信验证码重置登录密码
   */
  modifyTrendsPwd(params) {
    return axiosConfig.post('/api/user/account/reset-login-pwd-by-smscode.json', params)
  },
  /**
   * 获取用户、账户、旺旺账号
   */
  getUserAccount(params) {
    return axiosConfig.post("/api/get-user-account.json", params)
  },

  /**
   * 首页导航列表
   */
  getNavList() {
    return axiosConfig.post("/api/task/item/catalog/main.json")
  },

  /**
   * 获取首页轮播图信息
   */
  getAvailableBoardByAdTypeList(params) {
    return axiosConfig.post('/api/user/get-available-board-by-adType.json', params)
  },

  /**
   * 分类页面下的小类
   */
  getTaskCategoryList(params) {
    return axiosConfig.post('/api/task/item/catalog/child.json', params)
  },

  /**
   * 分类页面任务详情请求
   */
  getSearchTask(params) {
    return axiosConfig.post("/api/search/task/s.json", params)
  },

  /**
   * 详情页页面
   */
  getTaskDetails(params) {
    return axiosConfig.post('/api/task/detail.json', params)
  },

  /**
   * 获取商品类型
   */
  itemCatalog() {
    return axiosConfig.post("/api/item-catalog.json")
  },

  /**
   * 获取用户余额
   */
  getAccountBalance() {
    return axiosConfig.post("/api/get-account-balance.json")
  },

  /**
   * 拿手个人主页活动提醒
   */
  showkerPersonalTrialCount(params) {
    return axiosConfig.post("/api/task/showker-personal-trial-count.json", params)
  },

  /**
   * 实名认证初始化
   */
  verifiedInit() {
    return axiosConfig.post("/api/identity-index.json")
  },

  /**
   * 实名认证提交
   */
  verifiedSubmit(params) {
    return axiosConfig.post("/api/user/identity/saveidentity.json", params)
  },

  /**
   * 绑定旺旺号
   */
  wwBind(params) {
    return axiosConfig.post("/api/alitm-bunding.json", params)
  },

  /**
   * 获取旺旺信息列表
   */
  wwBindList() {
    return axiosConfig.post("/api/get-alitm-info-list.json")
  },

  /**
   * 解绑旺旺号
   */
  wwUnbind(params) {
    return axiosConfig.post("/api/alitm-unBunding.json", params)
  },

  /**
   * 修改旺旺号
   */
  wwModify(params) {
    return axiosConfig.post("/api/alitm/resubmit.json", params)
  },

  /**
   * 停用旺旺号
   */
  disuseWw(params) {
    return axiosConfig.post('/api/user/alitm/disable_alitm.json', params)
  },

  /**
   * 解停用旺旺号
   */
  unDisuseWw(params) {
    return axiosConfig.post('/api/user/alitm/un_disable_alitm.json', params)
  },

  /**
   * 解冻用旺旺号
   */
  thawWw(params) {
    return axiosConfig.post('/api/user/alitm/active/bdd.json', params)
  },

  /**
   * 拿手申请列表
   * 待审核和未通过的
   */
  showkerApplyList(params) {
    return axiosConfig.post("/api/showker-apply-list.json", params)
  },

  /**
   * 拿手申请列表
   * 审核通过的
   */
  showkerSuccessList(params) {
    return axiosConfig.post("/api/showker-success-list.json", params)
  },

  /**
   * 拿手终止活动（针对申请成功的任务）
   */
  showkerTrialEed(params) {
    return axiosConfig.post("/api/showker-trial-end.json", params)
  },

  /**
   * 拿手终止活动（针对申请还没有审核结果的任务）
   */
  showkerApplyEed(params) {
    return axiosConfig.post("/api/showker-apply-end.json", params)
  },

  /**
   * 拿手删除未审核通过的记录
   */
  applyDelete(params) {
    return axiosConfig.post("/api/showker-apply-delete.json", params)
  },

  /**
   * 拿手去下单
   */
  showkerToProcessOrder(params) {
    return axiosConfig.post("/api/showker-to-process-order.json", params)
  },

  /**
   * 拿手保存订单号
   */
  showkerOrderSave(params) {
    return axiosConfig.post("/api/showker-order-save.json", params)
  },

  /**
   * 拿手保存买家秀
   */
  showkerSaveReport(params) {
    return axiosConfig.post("/api/showker-save-report.json", params)
  },

  /**
   *详情页拿手报告列表
   */
  getDetailsShowkerList(params) {
    return axiosConfig.post("/api/task/trial/report.json", params)
  },

  /**
   *详情页已审核拿手列表
   */
  getDetailsSuccessShowkerList(params) {
    return axiosConfig.post("/api/task/success.json", params)
  },

  /**
   * 拿手修改买家秀
   */
  showkerModifyReport(params) {
    return axiosConfig.post("/api/showker-modify-report.json", params)
  },

  /**
   * 拿手的买家秀（针对获取买家秀列表，分页查询）
   */
  getTrialReports(params) {
    return axiosConfig.post("/api/task/showker/trial/reports.json", params)
  },

  /**
   * 拿手的活动详情（针对获取拿手活动详情）
   */
  getTrialDetail(params) {
    return axiosConfig.post("/api/task/showker/trial/detail.json", params)
  },

  /**
   * 根据拿手任务ID获取拿手任务，用户ID兼容拿手角色和商家角色
   * 当uid为拿手的uid时，获取属于该拿手的任务
   * 当uid为商家的uid时，获取属于该商家活动的任务
   */
  showkerTaskInfo(params) {
    return axiosConfig.post("/api/showker-task-info.json", params)
  },

  /**
   * 根据拿手任务ID获取试用报告
   */
  showkerTaskReport(params) {
    return axiosConfig.post("/api/showker-task-report.json", params)
  },

  /**
   * 根据试用报告ID获取试用报告
   */
  getTrialReport(params) {
    return axiosConfig.post("/api/trial-report.json", params)
  },

  /**
   * 拿手能否申请活动
   */
  getShowkerCanTrial(params) {
    return axiosConfig.post("/api/task/showker/qualification/check.json", params)
  },

  /**
   * 拿手申请活动任务
   */
  ShowkerApplySelWwId(params) {
    return axiosConfig.post("/api/task/showker/apply.json", params)
  },

  /**
   * 修改用户头像
   */
  modifyPortraitPic(params) {
    return axiosConfig.post("/api/user/edit-portrait-pic.json", params)
  },

  /**
   * 获取热门商品（用于微信分享）
   */
  getHostGoods(params) {
    return axiosConfig.get("/api/hot-goods.json", params)
  },

  /**
   * 首页推荐商品（后台配置推荐）
   */
  getShouYeTask(params) {
    return axiosConfig.post('/api/task/getAllocationByModuleCode.json', params)
  },

  /**
   * 获取推荐链接
   */
  getRecommendCode() {
    return axiosConfig.post("/api/recommend-code.json")
  },

  /**
   * 获取推荐列表
   */
  getRecommendPage(params) {
    return axiosConfig.post("/api/user/reward/getRecommendPage.json", params)
  },

  /**
   * 拿手获取换新的关键词方案
   */
  getSchemeReassign(params) {
    return axiosConfig.post('/api/task/showker/scheme/reassign.json', params)
  },

  /**
   * 点赞接口
   */
  clickPraise(params) {
    return axiosConfig.post("/api/task/showker/like/report.json", params)
  },

  /**
   * 判断是否已经点赞接口
   */
  whetherClickPraise(params) {
    return axiosConfig.post("/api/task/showker/liked/report.json", params)
  },

  /**
   * 第三方平台登录
   */
  thirdPartyLogin(params) {
    return axiosConfig.post("/api/user/sign-in-sync.json", params)
  },

  /**
   * 设置从补订单平台跳转到白拿拿来的用户是否是第一次登录
   */
  setIsFirstLoginToBbd() {
    return axiosConfig.post("/api/set-first-login-to-bbd.json")
  },

  /**
   * 检测从补订单登录白拿拿的用户是否是第一次登录白拿拿
   */
  detectionIsFirstLoginToBbd() {
    return axiosConfig.post("/api/detection-first-login-to-bbd.json")
  },

  /**
   * 获取拿手可申请活动的次数
   */
  getShowkerApplyCount() {
    return axiosConfig.post("/api/task/showker-apply-count.json")
  },

  /**
   * 获取微信JS-SDK签名信息
   */
  wechatSdkSign(params) {
    return axiosConfig.post("/api/get-wechat-sdk-signature.json", params)
  },

  /**
   * 微信分享成功后回调
   */
  wechatSharedCallback(params) {
    return axiosConfig.post("/api/task-had-shared.json", params)
  },

  /**
   * 获取系统配置信息
   */
  getSysConfigInfo() {
    return axiosConfig.post("/api/user/config/sys.json")
  },

  /**
   * 获取用户是否已关注微信
   */
  getUserWechatInfo() {
    return axiosConfig.post("/api/user-wechat-info.json")
  },

  /**
   * 获取公告信息
   */
  getUserGetAnnouncement(params) {
    return axiosConfig.post("/api/user-getAnnouncement.json", params)
  },

  /**
   * 获取二维码信息
   */
  getQrcodeQudaoInfo(params) {
    return axiosConfig.post("/api/user/getQRcode.json", params)
  },

  /**
   * 用户提交投诉接口
   */
  userComplaintCreate(params) {
    return axiosConfig.post("/api/user-complaint-create.json", params)
  },

  /**
   * 获取用户投诉列表
   */
  getUserAppealList(params) {
    return axiosConfig.post("/api/user-complaint-getComplaintsByUid.json", params)
  },

  /**
   * 获取用户微信昵称
   */
  getUserWechatNickname() {
    return axiosConfig.post("/api/user-wechat-nickName.json")
  },

  /**
   * 我今天推荐好友数、今天推荐排名
   */
  getMyRecommendInfo() {
    return axiosConfig.post("/api/user/srrc/getMyRecommend.json")
  },

  /**
   * 获取共推荐好友数、共获得奖励，我推荐的好友
   */
  getMyRecommendDetail(params) {
    return axiosConfig.post("/api/user/srrc/getMyRecommendDetail.json",params)
  },

  /**
   * 获取今天和昨天的推荐排行榜
   */
  getRecommendRankingList(params) {
    return axiosConfig.post("/api/user/srrc/getRecommendRankingList.json",params)
  },

  /**
   * 获取推荐排行榜
   */
  xcxAlitmBind(params) {
    return axiosConfig.post("/api/xcx-alitm-binding.json", params)
  },

  /**
   * 获取top买家秀信息
   */
  topBuyerShowInfo() {
    return axiosConfig.post("/api/task/showker/getReportRank25.json")
  },

  /**
   * 拿手绑定旺旺号（此接口仅使用于小程序应用）
   */
  xcxAlitmBind(params) {
    return axiosConfig.post("/api/xcx-alitm-binding.json", params)
  },

  /**
   * 拿手绑定旺旺号
   */
  userAlitmBindFast(params) {
    return axiosConfig.post("/api/user-alitm-bind-fast.json", params)
  },

  /**
   * 必中详情页龙虎榜接口
   */
  getHitTaskDetailsList(params){
    return axiosConfig.post("/api/task/boost/top.json",params)
  },
  /**
   * 必中详情页我的排名和人气值
   */
  getMyHitTaskDetailsRanking(params){
    return axiosConfig.post("/api/task/boost/my.json",params)
  },

  /**
   * 微信已授权推荐增加推荐次数
   */
  addToShowkerRecommendMatches(params) {
    return axiosConfig.post("/api/user/addToShowkerRecommendMatches.json",params)
  },

  /**
   * 必中详情页分享人气值增加接口
   */
  addHitRecommendCount(params) {
    return axiosConfig.post("/api/task/boost/offer.json",params)
  },


  /**
   * 获取top买家秀信息
   */
  topBuyerShowInfo() {
    return axiosConfig.post("/api/task/showker/getReportRank25.json")
  },


  /**
   * 获取top买家秀信息
   */
  topBuyerShowInfo() {
    return axiosConfig.post("/api/task/showker/getReportRank25.json")
  },

  /**
   * 获取买家秀列表
   */
  getBuyerShowList() {
    return axiosConfig.post("/api/task/showker/index/report.json")
  },

  /**
   * 获取所有买家秀
   */
  getALLTrialReport(params) {
    return axiosConfig.post('/api/task/showker/getALLTrialReport.json',params)
  },
  /**
   * 分享点击统计接口
   */
  addShareClickCount(params) {
    return axiosConfig.post("/api/user/uv/wechat/share.json", params)
  },

  /**
   * 获取用户是否能新人必中
   * */
  getShowkerCanNewHitTaskRes(){
    return axiosConfig.post("/api/task/showker/freshman/check.json",)
  },
  /**
   * 获取图片接口
   *
   */
  getPicByCode(params) {
    return axiosConfig.post("/api/user/getPicByCode.json", params)
  },
  /**
   * 获取是否弹每日红包接口
   * */
  getRedEnvelopePopupRes(params) {
    return axiosConfig.post("/api/task/showker/order/check/count.json",params)
  },
  /**
   * 获取用户购物气氛列表
   */
  getShowkerAtmosphereList(params){
    return axiosConfig.post('/api/task/moment.json',params);
  },

  /**
   * 获取买家秀总数
   * */
  getShowkerShowCount(){
    return axiosConfig.post('/api/task/report/count.json');
  },

  /**
   *获取秀客是否显示拆红包
   * */
  getIfShowKaiHongBao(){
    return axiosConfig.post('/api/user/red/ifShowKaiHongBao.json');
  },

  /**
   *显示用户的红包列表
   * */
  getRedEnvelopePage(params){
    return axiosConfig.post('/api/user/red/getRedEnvelopePage.json',params);
  },

  /**
   *拆红包动作
   * */
  openRedEnvelope(params){
    return axiosConfig.post('/api/user/red/openRedEnvelope.json',params);
  },

  /**
   *提取红包动作
   * */
  withdrawRedEnvelope(params){
    return axiosConfig.post('/api/user/red/withdrawRedEnvelope.json',params);
  },

  /**
   *判断秀客是否是第一次提现
   * */
  someAccountOrMoneyJudgement(){
    return axiosConfig.post('/api/user/account/someAccountOrMoneyJudgement.json');
  },

  /**
   * 设置第一次验证提现口令
   */
  setFirstWithdrawalCommand(){
    return axiosConfig.post('/api/set-first-fill-withdrawal-command.json')
  },

  /**
   * 获取是否是第一次验证提现口令
   */
  getFirstWithdrawalCommand(){
    return axiosConfig.post('/api/detection-first-fill-withdrawal-command.json')
  },

  /**
   * 拿手完善旺旺号信息（用于插件抓取旺旺信息缺失）
   */
  alitmPerfect(params){
    return axiosConfig.post('/api/alitm-perfect.json',params)
  },

  /**
   * 拿手修改手机号码前校验手机号
   */
  checkPhoneBefore(params){
    return axiosConfig.post('/api/user/account/checkPhoneAndSms.json', params)
  },

  /**
   * 拿手修改手机号码
   */
  resetPhone(params){
    return axiosConfig.post('/api/user/account/resetPhone.json', params)
  },

  /**
   * 获取邀请主页几个数据(收徒弟页面)
   */
  invitationRewardMainPage(){
    return axiosConfig.post('/api/user/reward/invitationRewardMainPage.json')
  },

  /**
   * 奖励金额提取(收徒弟页面)
   */
  withdrawInvitationReward(params){
    return axiosConfig.post('/api/user/reward/withdrawInvitationReward.json',params)
  },

  /**
   * 获取邀请列表(我的徒弟页面)
   */
  invitationRewardListPage(params){
    return axiosConfig.post('/api/user/reward/invitationRewardListPage.json',params)
  },


  /**
   * 设置收徒弟页面第一次分享
   */
  setAcceptDiscipleFirstShare(){
    return axiosConfig.post('/api/set-accept-disciple-first-share.json')
  },

  /**
   * 获取收徒弟页面是否是第一次分享
   */
  getAcceptDiscipleIsFirstShare(){
    return axiosConfig.post('/api/get-accept-disciple-is-first-share.json')
  },

  /**
   * 设置收徒弟页面不再弹二维码
   */
  setAcceptDiscipleIsShowErweima(){
    return axiosConfig.post('/api/set-accept-disciple-erweima.json')
  },

  /**
   * 获取收徒弟页面是否弹二维码
   */
  getAcceptDiscipleIsShowErweima(){
    return axiosConfig.post('/api/get-accept-disciple-erweima.json')
  },

  /**
   * 获取昨天邀请的数据(收徒弟页面)
   */
  getYesterdayStatistics(){
    return axiosConfig.post('/api/user/reward/getYesterdayStatistics.json')
  },

  /**
   * 获取首页是否显示必中宝盒弹窗
   */
  getHitTreasureBoxModal() {
    return axiosConfig.post('/api/get-hit-treasure-box-modal.json')
  },

  /**
   * 设置不再显示必中宝盒弹窗
   */
  setHitTreasureBoxModal(params) {
    return axiosConfig.post('/api/set-hit-treasure-box-modal.json',params)
  },

  /**
   *  是否显示必中宝盒入口
   */
  showTreasureBoxEntry() {
    return axiosConfig.post('/api/show-treasure-box-entry.json')
  },

  /**
   * 必中宝盒申请活动接口（申请直接通过无需审核）
   */
  hitTreasureBoxApplyTask(params) {
    return axiosConfig.post('/api/task/showker/box/apply.json',params)
  },

  /**
   * 设置必中详情页不再弹5倍人气弹窗
   */
  setFiveMultiplePopularity(params){
    return axiosConfig.post('/api/set-five-multiple-popularity.json',params)
  },

  /**
   * 获取必中详情页是否弹5倍人气弹窗
   */
  getFiveMultiplePopularity(){
    return axiosConfig.post('/api/get-five-multiple-popularity.json')
  },

  /**
   * 提交增值服务答案
   */
  showkerVasAnswerSubmit(params){
    return axiosConfig.post('/api/task-showker-vas-answer-submit.json',params)
  },

  /**
   * 提交答题截图
   */
  showkerIssueAnswerSubmit(params){
    return axiosConfig.post('/api/task-showker-issue-answer-submit.json',params)
  },

  /**
   * 预约单设置完成上传图片，已将商品加入购物车
   */
  taskShowkerReserveSceenshotOk(params){
    return axiosConfig.post('/api/task-showker-reserve-screenshot-ok.json',params)
  },

  /**
   * 记录考试成功
   */
  testPass(){
    return axiosConfig.post('/api/test-pass.json');
  },

  /**
   * 提交QQ号
   */
  editQqNumber(params){
    return axiosConfig.post('/api/user-editQqNumber.json',params)
  },

  /**
   * 设置用户信息已完善
   */
  setAlreayPerfectWwInfo() {
    return axiosConfig.get('/api/set-ww-info-perfect.json')
  },

  /**
   * 获取旺旺信息是否已完善
   */
  checkWwInfoAlreadyPerfect() {
    return axiosConfig.get('/api/get-ww-info-perfect.json')
  }
}
