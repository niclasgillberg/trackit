System.register(['moment'], function (_export) {
  var moment, _classCallCheck, _createClass, DateValueConverter, DurationValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      DateValueConverter = (function () {
        function DateValueConverter() {
          _classCallCheck(this, DateValueConverter);
        }

        _createClass(DateValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            if (!value) {
              return null;
            }return moment(value).format(format);
          }
        }]);

        return DateValueConverter;
      })();

      _export('DateValueConverter', DateValueConverter);

      DurationValueConverter = (function () {
        function DurationValueConverter() {
          _classCallCheck(this, DurationValueConverter);
        }

        _createClass(DurationValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            if (!value) {
              return null;
            }return moment().startOf('day').add(value, 'seconds').format(format);
          }
        }]);

        return DurationValueConverter;
      })();

      _export('DurationValueConverter', DurationValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlX2NvbnZlcnRlcnMvRGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzZDQUVhLGtCQUFrQixFQVFsQixzQkFBc0I7Ozs7Ozs7Ozs7Ozs7QUFSdEIsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7O2lCQUN2QixnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsS0FBSztBQUNSLHFCQUFPLElBQUksQ0FBQzthQUFBLEFBQ2QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3JDOzs7ZUFMVSxrQkFBa0I7OztvQ0FBbEIsa0JBQWtCOztBQVFsQiw0QkFBc0I7aUJBQXRCLHNCQUFzQjtnQ0FBdEIsc0JBQXNCOzs7cUJBQXRCLHNCQUFzQjs7aUJBQzNCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUcsQ0FBQyxLQUFLO0FBQ1AscUJBQU8sSUFBSSxDQUFDO2FBQUEsQUFDZCxPQUFPLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUNyRTs7O2VBTFUsc0JBQXNCOzs7d0NBQXRCLHNCQUFzQiIsImZpbGUiOiJ2YWx1ZV9jb252ZXJ0ZXJzL0RhdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==