// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operationList: {
      title: '我的功能',
      operationArr: [
        {
          title: '历史记录',
          imgUrl: '',
          iconClass: '',
          id: 1,
          pageUrl: '/pages/topicsDetail/topicsDetail'
        },
        {
          title: '我的收藏',
          imgUrl: '',
          iconClass: '',
          id: 2,
          pageUrl: '/pages/topicsDetail/topicsDetail'
        },
        {
          title: '我的提问',
          imgUrl: '',
          iconClass: '',
          id: 3,
          pageUrl: '/pages/topicsDetail/topicsDetail'
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goPage: function(options) {
    let pageUrl = options.currentTarget.dataset.page;
    wx.navigateTo({
      url: pageUrl,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})