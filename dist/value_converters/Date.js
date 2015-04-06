System.register(["moment"], function (_export) {
  var moment, _createClass, _classCallCheck, DateValueConverter, DurationValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DateValueConverter = _export("DateValueConverter", (function () {
        function DateValueConverter() {
          _classCallCheck(this, DateValueConverter);
        }

        _createClass(DateValueConverter, {
          toView: {
            value: function toView(value, format) {
              if (!value) {
                return null;
              }return moment(value).format(format);
            }
          }
        });

        return DateValueConverter;
      })());
      DurationValueConverter = _export("DurationValueConverter", (function () {
        function DurationValueConverter() {
          _classCallCheck(this, DurationValueConverter);
        }

        _createClass(DurationValueConverter, {
          toView: {
            value: function toView(value, format) {
              if (!value) {
                return null;
              }return moment().startOf("day").add(value, "seconds").format(format);
            }
          }
        });

        return DurationValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlX2NvbnZlcnRlcnMvRGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxpQ0FFQSxrQkFBa0IsRUFRbEIsc0JBQXNCOzs7O0FBVjVCLFlBQU07Ozs7Ozs7OztBQUVBLHdCQUFrQjtpQkFBbEIsa0JBQWtCO2dDQUFsQixrQkFBa0I7OztxQkFBbEIsa0JBQWtCO0FBQzdCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsa0JBQUksQ0FBQyxLQUFLO0FBQ1IsdUJBQU8sSUFBSSxDQUFDO2VBQUEsQUFDZCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7Ozs7ZUFMVSxrQkFBa0I7O0FBUWxCLDRCQUFzQjtpQkFBdEIsc0JBQXNCO2dDQUF0QixzQkFBc0I7OztxQkFBdEIsc0JBQXNCO0FBQ2pDLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsa0JBQUcsQ0FBQyxLQUFLO0FBQ1AsdUJBQU8sSUFBSSxDQUFDO2VBQUEsQUFDZCxPQUFPLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyRTs7OztlQUxVLHNCQUFzQiIsImZpbGUiOiJ2YWx1ZV9jb252ZXJ0ZXJzL0RhdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==