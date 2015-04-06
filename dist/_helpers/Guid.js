System.register([], function (_export) {
  var _createClass, _classCallCheck, Guid;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Guid = _export("Guid", (function () {
        function Guid() {
          _classCallCheck(this, Guid);
        }

        _createClass(Guid, null, {
          "new": {
            value: function _new() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == "x" ? r : r & 3 | 8;
                return v.toString(16);
              });
            }
          }
        });

        return Guid;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWxwZXJzL0d1aWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxJQUFJOzs7Ozs7Ozs7OztBQUFKLFVBQUk7aUJBQUosSUFBSTtnQ0FBSixJQUFJOzs7cUJBQUosSUFBSTs7bUJBQ0wsZ0JBQUc7QUFDWCxxQkFBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3pFLG9CQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBQyxDQUFHLEdBQUMsQ0FBRyxBQUFDLENBQUM7QUFDM0QsdUJBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztlQUN2QixDQUFDLENBQUM7YUFDSjs7OztlQU5VLElBQUkiLCJmaWxlIjoiX2hlbHBlcnMvR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9