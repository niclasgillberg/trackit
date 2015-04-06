System.register([], function (_export) {
  var _createClass, _classCallCheck, GuidGenerator;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      GuidGenerator = _export("GuidGenerator", (function () {
        function GuidGenerator() {
          _classCallCheck(this, GuidGenerator);
        }

        _createClass(GuidGenerator, null, {
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

        return GuidGenerator;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWxwZXJzL0d1aWRHZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxhQUFhOzs7Ozs7Ozs7OztBQUFiLG1CQUFhO2lCQUFiLGFBQWE7Z0NBQWIsYUFBYTs7O3FCQUFiLGFBQWE7O21CQUNkLGdCQUFHO0FBQ1gscUJBQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBRTtBQUN6RSxvQkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDO29CQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUMsQ0FBRyxHQUFDLENBQUcsQUFBQyxDQUFDO0FBQzNELHVCQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7ZUFDdkIsQ0FBQyxDQUFDO2FBQ0o7Ozs7ZUFOVSxhQUFhIiwiZmlsZSI6Il9oZWxwZXJzL0d1aWRHZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==