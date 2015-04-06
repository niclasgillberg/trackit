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
              if (!this.newTask.title) {
                return;
              }if (this.currentTask) {
                this.currentTask.stop();
                this.addFinishedTask(this.currentTask);
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
              this.addFinishedTask(this.currentTask);
              this.currentTask = void 0;
            }
          },
          addFinishedTask: {
            value: function addFinishedTask(task) {
              this.finishedTasks.push(task);
              this.finishedTasks = this.finishedTasks.slice();
            }
          }
        });

        return Tracker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLElBQUksaUNBRUMsT0FBTzs7OztBQUZaLFVBQUksZUFBSixJQUFJOzs7Ozs7Ozs7QUFFQyxhQUFPO0FBRVAsaUJBRkEsT0FBTyxHQUVMO2dDQUZGLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQixjQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFCLGNBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCOztxQkFOVSxPQUFPO0FBUWxCLG1CQUFTO21CQUFBLHFCQUFHO0FBQ1Ysa0JBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7QUFDcEIsdUJBQU87ZUFBQSxBQUVULElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztBQUNsQixvQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixvQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7ZUFDeEM7QUFDRCxrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2hDLGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDMUI7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLGtCQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2hDLGtCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGtCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDVCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDM0I7O0FBRUQseUJBQWU7bUJBQUEseUJBQUMsSUFBSSxFQUFDO0FBQ25CLGtCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixrQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pEOzs7O2VBcENVLE9BQU8iLCJmaWxlIjoidHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9