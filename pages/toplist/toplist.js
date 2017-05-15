//index.js
//获取应用实例
var app = getApp();
var api = require('../../utils/api');
Page({
  data: {
    topList:[]
  },
  onLoad: function () {
    var that = this;
    api.getToplist(function (data) {
      app.log(data);
      that.setData({
        topList:data
      });
    });
  },
  goTopListDetail:function(e){
    let topItem = e.currentTarget.dataset.id;
    console.log(topItem);
  }
})
