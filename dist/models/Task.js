System.register([], function (_export) {
  var _createClass, _classCallCheck, Task;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Task = _export("Task", (function () {
        function Task(title, category) {
          _classCallCheck(this, Task);

          this.title = title || "";
          this.category = category || "";
          this.startDate = void 0;
        }

        _createClass(Task, {
          start: {
            value: function start() {
              this.startDate = Date.now();
            }
          },
          stop: {
            value: function stop() {}
          }
        });

        return Task;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9UYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsSUFBSTs7Ozs7Ozs7Ozs7QUFBSixVQUFJO0FBQ0osaUJBREEsSUFBSSxDQUNILEtBQUssRUFBRSxRQUFRLEVBQUM7Z0NBRGpCLElBQUk7O0FBRWIsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pCOztxQkFMVSxJQUFJO0FBT2YsZUFBSzttQkFBQSxpQkFBRTtBQUNMLGtCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3Qjs7QUFFRCxjQUFJO21CQUFBLGdCQUFFLEVBRUw7Ozs7ZUFiVSxJQUFJIiwiZmlsZSI6Im1vZGVscy9UYXNrLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=