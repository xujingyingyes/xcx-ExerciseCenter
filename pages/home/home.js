// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
     {
        title: '前端框架',
        isMargin: "",
        sectionText: [
          {
            title: 'Vue',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2017/01/vue.png",
            id: 1
          },
          {
            title: 'React',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2016/02/react.png",
            id: 2
          },
          {
            title: 'Angular',
            imgUrl: "https://angular.cn/assets/images/logos/angular/angular.svg",
            id: 3
          }
        ]
      },
      {
        title: '习题中心',
        isMargin: true,
        sectionText: [
          {
            title: '每日一题',
            imgUrl: "https://1.s91i.faiusr.com/4/AFsIABAEGAAgpOKA8AUo6I3goQQwyAE4yAE!500x500.png.webp?_tm=3&v=1603852743",
            id: 1
          },
          {
            title: 'Html',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2016/02/react.png",
            id: 2
          },
          {
            title: 'Css',
            imgUrl: "https://angular.cn/assets/images/logos/angular/angular.svg",
            id: 3
          },
          {
            title: 'JavaScript',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2017/01/vue.png",
            id: 4
          },
          {
            title: 'Vue',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2016/02/react.png",
            id: 5
          },
          {
            title: 'React',
            imgUrl: "https://angular.cn/assets/images/logos/angular/angular.svg",
            id: 6
          },
          {
            title: 'Node',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2017/01/vue.png",
            id: 7
          },
          {
            title: '工程化',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2016/02/react.png",
            id: 8
          },
          {
            title: '网络安全',
            imgUrl: "https://angular.cn/assets/images/logos/angular/angular.svg",
            id: 9
          },{
            title: '算法',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2017/01/vue.png",
            id: 10
          },
          {
            title: '编程题',
            imgUrl: "https://www.runoob.com/wp-content/uploads/2016/02/react.png",
            id: 11
          },
          {
            title: '其他',
            imgUrl: "https://angular.cn/assets/images/logos/angular/angular.svg",
            id: 12
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 跳转到详情页面
  goDetail: function (options) {
    let typeId = options.currentTarget.dataset.type.title;
    wx.switchTab({ // 只能打开非tabBar页面
      url: `/pages/listDetail/listDetail?pageType=${typeId}`
    })
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