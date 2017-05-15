//index.js
//获取应用实例
var app = getApp();
var api = require('../../utils/api');
Page({
  data: {
    sliderlist:[],
    radioList:[],
    songList:[]
  },
  onLoad: function () {
    var that = this;
    api.getRecommend(function(data){
      app.log(data);
      that.setData({
        sliderlist: data.data.slider,
        radioList: data.data.radioList,
        songList:data.data.songList
      });
    });
  }
})
