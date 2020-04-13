//app.js
const TOKEN = 'token'
App({
  globalData:{
    token:''
  },

  onLaunch:function(){
    // 1 先从本地缓冲区取出token
    const token = wx.getStorageSync(TOKEN)
    // 2判断token是否有值
    if(token && token.length !== 0){
      this.check_token(token)
    }else{
      this.login()
    }
      },
      // 验证token
      check_token(token){
        console.log('验证了token')
        wx.request({
          url: 'url/auth',
          method:'post',
          header:{
            token
          },
          success:(res)=>{
            console.log(res);
            if(!res.data.errCode){
              console.log('token有效')
              this.globalData.token = token;
            }else{
              this.login()
            }

          },
          fail:(err)=>{
            console.log(err)
          }
        })
      },

    // 登录操作
    login(){
      console.log('执行了登录操作')
      wx.login({
        // code只有5分钟的有效期
        success: (res)=>{
          // 1 获取code
          const code = res.code;
          // 2 将code发送给我们服务器
          wx.request({
            url: 'url/login',
            data:{
              code:code
            },
            success:(res)=>{
              console.log(res);
              // 1 取出token
              const token = res.data.token;
              // 2 将token保存到globaldata中
              this.globalData.token = token;
              // 3 保存到本地存储
              wx.setStorageSync(TOKEN, token)
            }
          })
  
        }
      })
    }
})