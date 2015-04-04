"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PageObject_Welcome = exports.PageObject_Welcome = (function () {
  function PageObject_Welcome() {
    _classCallCheck(this, PageObject_Welcome);
  }

  _createClass(PageObject_Welcome, {
    getGreeting: {
      value: function getGreeting() {
        return element(by.tagName("h2")).getText();
      }
    },
    setFirstname: {
      value: function setFirstname(value) {
        return element(by.valueBind("firstName")).clear().sendKeys(value);
      }
    },
    setLastname: {
      value: function setLastname(value) {
        return element(by.valueBind("lastName")).clear().sendKeys(value);
      }
    },
    getFullname: {
      value: function getFullname() {
        return element(by.css(".help-block")).getText();
      }
    },
    pressSubmitButton: {
      value: function pressSubmitButton() {
        return element(by.css("button[type=\"submit\"]")).click();
      }
    },
    openAlertDialog: {
      value: function openAlertDialog() {
        var _this = this;

        return browser.wait(function () {
          _this.pressSubmitButton();

          return browser.switchTo().alert().then(
          // use alert.accept instead of alert.dismiss which results in a browser crash
          function (alert) {
            alert.accept();return true;
          }, function () {
            return false;
          });
        });
      }
    }
  });

  return PageObject_Welcome;
})();