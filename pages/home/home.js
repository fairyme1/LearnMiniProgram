// pages/home/home.js
const app = getApp()
console.log(app.globalData);
console.log(app.globalData.name);
console.log(app.globalData.age);

Page({

  handleGetOutUserInfo(event){
    console.log(event);
  },
  handviewclick(){
    console.log("view消息被点击了")
  },
// 监听页面滚动
  onPageScroll(obj){
    console.log(obj);
  },
  onReachBottom(){
    console.log("到达底部了");
  },
  onPullDownRefresh(){
    console.log("刷新了");
  },

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello-word",
    list:[]
  },
  onLoad(){
    console.log("load");
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: res=>{
        // console.log("11"+res);
        // const data = res.data;
        const data = [{'title':'窗花'},{title:'翠花'},{title:'如花'},{title:'春花'}];
        this.setData({
          list:data
        })
    }

    })
  },
  // onshow 页面显示出来
  onShow(){
    console.log("show");
  },
  // 页面初次渲染完成时
 onReady(){
   console.log("ready")
 },
 onHide(){
 },
 onunload(){}



})