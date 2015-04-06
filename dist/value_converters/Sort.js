System.register(["moment"], function (_export) {
  var moment, _createClass, _classCallCheck, SortValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SortValueConverter = _export("SortValueConverter", (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _createClass(SortValueConverter, {
          toView: {
            value: function toView(array, propertyName) {
              var comparison = arguments[2] === undefined ? "ordinalIgnoreCase" : arguments[2];
              var direction = arguments[3] === undefined ? "ascending" : arguments[3];

              var directionFactor = direction === "ascending" ? 1 : -1,
                  comparer = this[comparison + "Comparison"];
              if (propertyName === undefined) {
                return array.sort(function (a, b) {
                  return comparer(a, b) * directionFactor;
                });
              }return array.sort(function (a, b) {
                return comparer(a[propertyName], b[propertyName]) * directionFactor;
              });
            }
          },
          ordinalIgnoreCaseComparison: {
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
          },
          ordinalComparison: {
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
          },
          dateComparison: {
            value: function dateComparison(a, b) {
              if ((a === null || a === undefined) && (b === null || b === undefined)) {
                return 0;
              }if (a === null || a === undefined) {
                return -1;
              }if (b === null || b === undefined) {
                return 1;
              }return moment(b).diff(moment(a));
            }
          },
          numberComparison: {
            value: function numberComparison(a, b) {
              if ((a === null || a === undefined) && (b === null || b === undefined)) {
                return 0;
              }if (a === null || a === undefined) {
                return -1;
              }if (b === null || b === undefined) {
                return 1;
              }return a - b;
            }
          }
        });

        return SortValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlX2NvbnZlcnRlcnMvU29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxpQ0FFQSxrQkFBa0I7Ozs7QUFGeEIsWUFBTTs7Ozs7Ozs7O0FBRUEsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7QUFDN0IsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLFlBQVksRUFBNkQ7a0JBQTNELFVBQVUsZ0NBQUcsbUJBQW1CO2tCQUFFLFNBQVMsZ0NBQUcsV0FBVzs7QUFDbkYsa0JBQUksZUFBZSxHQUFHLFNBQVMsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDcEQsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDL0Msa0JBQUksWUFBWSxLQUFLLFNBQVM7QUFDNUIsdUJBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO3lCQUFLLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZUFBZTtpQkFBQSxDQUFDLENBQUM7ZUFBQSxBQUNoRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt1QkFBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLGVBQWU7ZUFBQSxDQUFDLENBQUM7YUFDM0Y7O0FBRUQscUNBQTJCO21CQUFBLHFDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsa0JBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUEsS0FBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUEsQUFBQztBQUNwRSx1QkFBTyxDQUFDLENBQUM7ZUFBQSxBQUNYLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssU0FB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