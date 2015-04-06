System.register(["./models/Task", "./services/TaskService"], function (_export) {
  var Task, TaskService, _createClass, _classCallCheck, Tracker;

  return {
    setters: [function (_modelsTask) {
      Task = _modelsTask.Task;
    }, function (_servicesTaskService) {
      TaskService = _servicesTaskService.TaskService;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Tracker = _export("Tracker", (function () {
        function Tracker(service) {
          _classCallCheck(this, Tracker);

          this.service = service;
          this.newTask = new Task();
          this.currentTask = service.getCurrentTask();
          this.finishedTasks = service.loadFinishedTasks();
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
              this.service.saveTask(this.currentTask);
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
              this.service.saveTask(task);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [TaskService];
            }
          }
        });

        return Tracker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLElBQUksRUFDSixXQUFXLGlDQUVOLE9BQU87Ozs7QUFIWixVQUFJLGVBQUosSUFBSTs7QUFDSixpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7Ozs7QUFFTixhQUFPO0FBRVAsaUJBRkEsT0FBTyxDQUVOLE9BQU8sRUFBQztnQ0FGVCxPQUFPOztBQUdoQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUIsY0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDNUMsY0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNsRDs7cUJBUFUsT0FBTztBQVNsQixtQkFBUzttQkFBQSxxQkFBRztBQUNWLGtCQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0FBQ3BCLHVCQUFPO2VBQUEsQUFFVCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDbEIsb0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsb0JBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2VBQ3hDO0FBQ0Qsa0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNoQyxrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzFCLGtCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekM7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLGtCQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2hDLGtCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGtCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDVCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDM0I7O0FBRUQseUJBQWU7bUJBQUEseUJBQUMsSUFBSSxFQUFDO0FBQ25CLGtCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixrQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hELGtCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3Qjs7O0FBdENNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUMscUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUFDOzs7O2VBRDVCLE9BQU8iLCJmaWxlIjoidHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9