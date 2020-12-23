// pages/listDetail/listDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: "",
    pageList: {
      "vue": [
        {
          listTitle: 'vuex的5个属性方法',
        },
        {
          listTitle: 'vue之动态切换components组件',
        },
        {
          listTitle: 'vue Router导航守卫',
        }
      ],
      "React": [
        {
          listTitle: 'React的生命周期',
        },
        {
          listTitle: 'React的优点',
        },
        {
          listTitle: 'Redux的用法',
        }
      ],
      "每日一题": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "Html": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "Css": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "JavaScript": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "Node": [
        {
          listTitle: 'Node的用法',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "工程化": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "网络安全": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "算法": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "编程题": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ],
      "其他": [
        {
          listTitle: '1111',
        },
        {
          listTitle: '222',
        },
        {
          listTitle: '333',
        }
      ]

      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(111)
    console.log(options, 'options')
    this.setData({
      pageTitle: options.pageType
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
  onShow: function (options) {
    console.log(222, options)
    // this.setData({
    //   pageTitle: options.pageType
    // })
  },
  addTopics: function () {
    wx.navigateTo({
      url: '/pages/addTopics/addTopics',
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