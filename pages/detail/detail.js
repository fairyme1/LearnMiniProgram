// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 获取当前所有页面
    const pages = getCurrentPages();
    console.log(pages);
    // 得到前一个对象
    const home = pages[pages.length - 2]
    home.setData({
      title:'呵呵呵。'
    })
  },
  handlebackhome(){
    wx.navigateBack({
    delta:1
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

})