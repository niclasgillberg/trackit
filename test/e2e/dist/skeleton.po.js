"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PageObject_Skeleton = exports.PageObject_Skeleton = (function () {
  function PageObject_Skeleton() {
    _classCallCheck(this, PageObject_Skeleton);
  }

  _createClass(PageObject_Skeleton, {
    getCurrentPageTitle: {
      value: function getCurrentPageTitle() {
        return browser.getTitle();
      }
    },
    navigateTo: {
      value: function navigateTo(href) {
        element(by.css("a[href=\"" + href + "\"]")).click();
        return browser.waitForHttpDone();
      }
    }
  });

  return PageObject_Skeleton;
})();