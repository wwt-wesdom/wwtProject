import axiosConfig from '@/config/axiosConfig'
import {aliTokenUrl, bucket} from '@/config/env'

export default {

  /**
   * 阿里云分片上传file
   */
  aliUploadImg(key, file){
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axiosConfig.get(aliTokenUrl);
        const client = new OSS.Wrapper({
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          stsToken: result.SecurityToken,
          bucket: bucket,
          endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
          secure: true
        });
        const aliClineRes = await client.multipartUpload(key, file);
        resolve(aliClineRes);
      } catch (e){
        reject(e);
      }
    })
  },
  /**
   * 阿里云上传Buffer文件
   */
  aliUploadImgBuffer(key, file){
    file = new OSS.Buffer(file);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axiosConfig.get(aliTokenUrl);
        const client = new OSS.Wrapper({
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          stsToken: result.SecurityToken,
          bucket: bucket,
          endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
          secure: true,
          timeout: '120s'
        });
        const aliClineRes = await client.put(key, file);
        resolve(aliClineRes);
      } catch (e){
        reject(e);
      }
    })
  }
}
