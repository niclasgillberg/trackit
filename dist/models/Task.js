System.register(["../_helpers/Guid"], function (_export) {
  var Guid, _createClass, _classCallCheck, Task;

  return {
    setters: [function (_helpersGuid) {
      Guid = _helpersGuid.Guid;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Task = _export("Task", (function () {
        function Task(title, category, id) {
          _classCallCheck(this, Task);

          this.id = id || Guid["new"]();
          this.title = title || "";
          this.category = category || "";
          this.startTime = void 0;
        }

        _createClass(Task, {
          start: {
            value: function start() {
              this.startTime = new Date();
            }
          },
          stop: {
            value: function stop() {
              this.stopTime = new Date();
            }
          },
          duration: {
            get: function () {
              var stopTime = this.stopTime || new Date();
              return Math.round((stopTime - this.startTime) / 1000);
            }
          },
          isFinished: {
            get: function () {
              return !!this.stopTime;
            }
          }
        }, {
          parse: {
            value: function parse(obj) {
              var task = new Task(obj.title, obj.category, obj.id);
              if (obj.startTime) task.startTime = new Date(obj.startTime);
              if (obj.stopTime) task.stopTime = new Date(obj.stopTime);
              return task;
            }
          }
        });

        return Task;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9UYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxJQUFJLGlDQUVDLElBQUk7Ozs7QUFGVCxVQUFJLGdCQUFKLElBQUk7Ozs7Ozs7OztBQUVDLFVBQUk7QUFDSixpQkFEQSxJQUFJLENBQ0gsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUM7Z0NBRHJCLElBQUk7O0FBRWIsY0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxPQUFJLEVBQUUsQ0FBQztBQUMzQixjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7QUFDekIsY0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLGNBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDekI7O3FCQU5VLElBQUk7QUFRZixlQUFLO21CQUFBLGlCQUFFO0FBQ0wsa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUM3Qjs7QUFFRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0osa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUM1Qjs7QUFFRyxrQkFBUTtpQkFBQSxZQUFHO0FBQ2Isa0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMzQyxxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUEsR0FBSSxJQUFJLENBQUMsQ0FBQzthQUN2RDs7QUFFRyxvQkFBVTtpQkFBQSxZQUFHO0FBQ2YscUJBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7OztBQUVNLGVBQUs7bUJBQUEsZUFBQyxHQUFHLEVBQUU7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckQsa0JBQUcsR0FBRyxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQyxrQkFBRyxHQUFHLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQzthQUNiOzs7O2VBaENVLElBQUkiLCJmaWxlIjoibW9kZWxzL1Rhc2suanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==