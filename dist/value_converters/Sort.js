System.register(['moment'], function (_export) {
  var moment, _classCallCheck, _createClass, SortValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      SortValueConverter = (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _createClass(SortValueConverter, [{
          key: 'toView',
          value: function toView(array, propertyName) {
            var comparison = arguments[2] === undefined ? 'ordinalIgnoreCase' : arguments[2];
            var direction = arguments[3] === undefined ? 'ascending' : arguments[3];

            var directionFactor = direction === 'ascending' ? 1 : -1,
                comparer = this[comparison + 'Comparison'];
            if (propertyName === undefined) {
              return array.sort(function (a, b) {
                return comparer(a, b) * directionFactor;
              });
            }return array.sort(function (a, b) {
              return comparer(a[propertyName], b[propertyName]) * directionFactor;
            });
          }
        }, {
          key: 'ordinalIgnoreCaseComparison',
          value: function ordinalIgnoreCaseComparison(a, b) {
            if ((a === null || a === undefined) && (b === null || b === undefined)) {
              return 0;
            }if (a === null || a === undefined) {
              return -1;
            }if (b === null || b === undefined) {
              return 1;
            }a = a.toString().toLowerCase();
            b = b.toString().toLowerCase();
            if (a < b) {
              return -1;
            }if (a > b) {
              return 1;
            }return 0;
          }
        }, {
          key: 'ordinalComparison',
          value: function ordinalComparison(a, b) {
            if ((a === null || a === undefined) && (b === null || b === undefined)) {
              return 0;
            }if (a === null || a === undefined) {
              return -1;
            }if (b === null || b === undefined) {
              return 1;
            }a = a.toString();
            b = b.toString();
            if (a < b) {
              return -1;
            }if (a > b) {
              return 1;
            }return 0;
          }
        }, {
          key: 'dateComparison',
          value: function dateComparison(a, b) {
            if ((a === null || a === undefined) && (b === null || b === undefined)) {
              return 0;
            }if (a === null || a === undefined) {
              return -1;
            }if (b === null || b === undefined) {
              return 1;
            }return moment(b).diff(moment(a));
          }
        }, {
          key: 'numberComparison',
          value: function numberComparison(a, b) {
            if ((a === null || a === undefined) && (b === null || b === undefined)) {
              return 0;
            }if (a === null || a === undefined) {
              return -1;
            }if (b === null || b === undefined) {
              return 1;
            }return a - b;
          }
        }]);

        return SortValueConverter;
      })();

      _export('SortValueConverter', SortValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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