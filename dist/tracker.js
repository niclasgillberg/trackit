System.register(["./models/Task"], function (_export) {
  var Task, _createClass, _classCallCheck, Tracker;

  return {
    setters: [function (_modelsTask) {
      Task = _modelsTask.Task;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Tracker = _export("Tracker", (function () {
        function Tracker() {
          _classCallCheck(this, Tracker);

          this.newTask = new Task();
          this.currentTask = void 0;
          this.finishedTasks = [];
        }

        _createClass(Tracker, {
          startTask: {
            value: function startTask() {
              if (this.currentTask) {
                this.currentTask.stop();
                this.finishedTasks.push(this.currentTask);
              }
              this.currentTask = this.newTask;
              this.newTask = new Task();
              this.currentTask.start();
            }
          },
          restartTask: {
            value: function restartTask(task) {
              this.newTask.title = task.title;
              this.newTask.category = task.category;
              this.startTask();
            }
          },
          stopTask: {
            value: function stopTask() {
              this.currentTask.stop();
              this.finishedTasks.push(this.currentTask);
              this.currentTask = void 0;
            }
          }
        });

        return Tracker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLElBQUksaUNBRUMsT0FBTzs7OztBQUZaLFVBQUksZUFBSixJQUFJOzs7Ozs7Ozs7QUFFQyxhQUFPO0FBRVAsaUJBRkEsT0FBTyxHQUVMO2dDQUZGLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQixjQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFCLGNBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCOztxQkFOVSxPQUFPO0FBUWxCLG1CQUFTO21CQUFBLHFCQUFHO0FBQ1Ysa0JBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztBQUNsQixvQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixvQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2VBQzNDO0FBQ0Qsa0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNoQyxrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzFCLGtCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzFCOztBQUVELHFCQUFXO21CQUFBLHFCQUFDLElBQUksRUFBRTtBQUNoQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNoQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0QyxrQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCOztBQUVELGtCQUFRO21CQUFBLG9CQUFHO0FBQ1Qsa0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUMzQjs7OztlQTVCVSxPQUFPIiwiZmlsZSI6InRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==