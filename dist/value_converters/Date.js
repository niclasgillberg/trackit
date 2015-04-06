System.register(["moment"], function (_export) {
  var moment, _createClass, _classCallCheck, DateValueConverter;

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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlX2NvbnZlcnRlcnMvRGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxpQ0FFQSxrQkFBa0I7Ozs7QUFGeEIsWUFBTTs7Ozs7Ozs7O0FBRUEsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7QUFDN0IsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixrQkFBSSxDQUFDLEtBQUs7QUFDUix1QkFBTyxJQUFJLENBQUM7ZUFBQSxBQUNkLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQzs7OztlQUxVLGtCQUFrQiIsImZpbGUiOiJ2YWx1ZV9jb252ZXJ0ZXJzL0RhdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==