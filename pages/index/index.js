Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区'],
    id: 101220301,
    now: {
      tmp: 0,
      cond_txt:'未知',
      cond_code:'999',
      hum: 0,
      pres: 0,
      vis: 0,
      wind_dir: 0,
      wind_spd: 0,
      wind_sc: 0
    }
  },

  regionChange: function(e) {
    this.setData({region: e.detail.value})
    this.getId(this.data.region[1])
  },

  getId: function(city) {
    city = city.slice(0, -1)
    let that = this

    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data: {
        location: city,
        key: "b9349bf3c2a14b51b7bb17febe5b27d2"
      },
      success: function(res) {
        that.setData({id: res.data.location[0].id})
        that.getWeather()
      }
    })
  },

  getWeather: function() {
    console.log(this.data.id)

    let that = this
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data: {
        location: that.data.id,
        key: "b9349bf3c2a14b51b7bb17febe5b27d2"
      },
      success: function(res) {
        console.log(res.data)
        that.setData({now: res.data.now})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getId(this.data.region[1])
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