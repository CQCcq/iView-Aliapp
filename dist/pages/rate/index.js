const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/rate/index"
  }
});

_Page({
  data: {
    starIndex1: 0,
    starIndex2: 0,
    starIndex3: 0,
    starIndex4: 4,
    starIndex5: 5
  },

  onChange1(e) {
    const index = e.detail.index;
    this.setData({
      starIndex1: index
    });
  },

  onChange2(e) {
    const index = e.detail.index;
    this.setData({
      starIndex2: index
    });
  },

  onChange3(e) {
    const index = e.detail.index;
    this.setData({
      starIndex3: index
    });
  },

  onChange5(e) {
    const index = e.detail.index;
    this.setData({
      starIndex5: index
    });
  }

});