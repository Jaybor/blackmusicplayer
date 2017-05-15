//index.js
//获取应用实例
var app = getApp();
var api = require('../../utils/api');
Page({
  data: {
    sliderlist:[],
    radioList:[],
    songList:[],
    radioSize:''
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          radioSize:'360rpx'
        });
      },
    })
    api.getRecommend(function(data){
      app.log(data);
      that.setData({
        sliderlist: data.data.slider,
        radioList: data.data.radioList,
        songList:data.data.songList
      });
    });
    api.getHotSearch(function (data) {
      app.log(data);
    });
    api.getSearchMusic("lady gaga",1,function (data) {
      app.log(data);
    });
    api.getToplist(function (data) {
      app.log(data);
    });
  },
  
})
