// pages/home/home.js
import request from '../../service/network.js'
Page({
  onLoad: function (options) {
    // 发送网络请求-1-原生方式
  //  this.get_request_orign();
   // 发送网络请求-2-promise封装方式
  request({
    url:"https://httpbin.org/post",
  }).then(res=>console.log(res)).catch(err=>console.log(err))

  },
  get_request_orign(){
    wx.request({
      url: 'https://httpbin.org/get',
      method:'post',
      data:{
        type:'sell',
        page:1
      },
      success:(res)=>{
        console.log("回调成功");
        console.log(res);
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

})