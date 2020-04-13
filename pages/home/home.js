// pages/home/home.js
Page({

  data: {

  },

  handleShowToast(){
    wx.showToast({
      title: 'showToast',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('显示 弹窗成功')
      },
      fail:function(){
        console.log("显示失败")
      },
      complete:function(){
        console.log('完成弹窗函数调用')
      }


    })
  },
  handleShowModal(){
    wx.showModal({
      cancelText:'退出',
      cancelColor: 'red',
      title:'我是标题',
      content:'我是内容',
      success:function(res){
        console.log(res);
        if(res.confirm){
          console.log('用户点击了确定')
        }
        if(res.cancel){
          console.log('用户点击了取消')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中。。。。',
      mask:true,
    })
   setTimeout(()=>wx.hideLoading(),1000)
},
handleShowAction(){
  wx.showActionSheet({
    itemList: ['拍照','相册','吃瓜'],
    itemColor:'red',
    success:function(res){
        console.log(res);
    }
  })
},
onShareAppMessage:function(options){
return {
  title:'要开心啊',
  path:'/pages/text/text',
  imageUrl:'/images/0.jpg'
}
}
})