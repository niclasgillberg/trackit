System.register(["../brokers/StorageBroker", "../models/Task"], function (_export) {
  var StorageBroker, Task, _createClass, _classCallCheck, TaskService;

  return {
    setters: [function (_brokersStorageBroker) {
      StorageBroker = _brokersStorageBroker.StorageBroker;
    }, function (_modelsTask) {
      Task = _modelsTask.Task;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TaskService = _export("TaskService", (function () {
        function TaskService(storage) {
          _classCallCheck(this, TaskService);

          this.storage = storage;
        }

        _createClass(TaskService, {
          loadAllTasks: {
            value: function loadAllTasks() {
              var tasks = this.storage.fetch("tasks") || [];
              return tasks.map(function (t) {
                return Task.parse(t);
              });
            }
          },
          loadFinishedTasks: {
            value: function loadFinishedTasks() {
              return this.loadAllTasks().filter(function (task) {
                return task.isFinished;
              });
            }
          },
          getCurrentTask: {
            value: function getCurrentTask() {
              return this.loadAllTasks().filter(function (task) {
                return !task.isFinished;
              })[0];
            }
          },
          saveTask: {
            value: function saveTask(task) {
              if (!task.startTime) {
                return;
              }var allTasks = this.loadAllTasks();
              var existingTask = allTasks.filter(function (t) {
                return t.id === task.id;
              })[0];
              if (!existingTask) {
                allTasks.push(task);
              } else {
                allTasks[allTasks.indexOf(existingTask)] = task;
              }
              this.storage.save("tasks", allTasks);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [StorageBroker];
            }
          }
        });

        return TaskService;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Rhc2tTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxhQUFhLEVBQ2IsSUFBSSxpQ0FFQyxXQUFXOzs7O0FBSGhCLG1CQUFhLHlCQUFiLGFBQWE7O0FBQ2IsVUFBSSxlQUFKLElBQUk7Ozs7Ozs7OztBQUVDLGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLE9BQU8sRUFBRTtnQ0FGVixXQUFXOztBQUdwQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSlUsV0FBVztBQU10QixzQkFBWTttQkFBQSx3QkFBRztBQUNiLGtCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMscUJBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7dUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFBQSxDQUFDLENBQUE7YUFDdkM7O0FBRUQsMkJBQWlCO21CQUFBLDZCQUFHO0FBQ2xCLHFCQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO3VCQUFLLElBQUksQ0FBQyxVQUFVO2VBQUEsQ0FBQyxDQUFDO2FBQzlEOztBQUVELHdCQUFjO21CQUFBLDBCQUFHO0FBQ2YscUJBQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7dUJBQUssQ0FBQyxJQUFJLENBQUMsVUFBVTtlQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRTs7QUFFRCxrQkFBUTttQkFBQSxrQkFBQyxJQUFJLEVBQUU7QUFDYixrQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTO0FBQ2hCLHVCQUFPO2VBQUEsQUFDVCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbkMsa0JBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQ2hDLFVBQUMsQ0FBQzt1QkFBSyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFO2VBQUEsQ0FDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNMLGtCQUFHLENBQUMsWUFBWSxFQUFDO0FBQ2Ysd0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7ZUFDckIsTUFBTTtBQUNMLHdCQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztlQUNqRDtBQUNELGtCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEM7OztBQS9CTSxnQkFBTTttQkFBQSxrQkFBRztBQUFDLHFCQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7YUFBQzs7OztlQUQ3QixXQUFXIiwiZmlsZSI6InNlcnZpY2VzL1Rhc2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=