System.register(['../brokers/StorageBroker', '../models/Task'], function (_export) {
  var StorageBroker, Task, _classCallCheck, _createClass, TaskService;

  return {
    setters: [function (_brokersStorageBroker) {
      StorageBroker = _brokersStorageBroker.StorageBroker;
    }, function (_modelsTask) {
      Task = _modelsTask.Task;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      TaskService = (function () {
        function TaskService(storage) {
          _classCallCheck(this, TaskService);

          this.storage = storage;
        }

        _createClass(TaskService, [{
          key: 'loadAllTasks',
          value: function loadAllTasks() {
            var tasks = this.storage.fetch('tasks') || [];
            return tasks.map(function (t) {
              return Task.parse(t);
            });
          }
        }, {
          key: 'loadFinishedTasks',
          value: function loadFinishedTasks() {
            return this.loadAllTasks().filter(function (task) {
              return task.isFinished;
            });
          }
        }, {
          key: 'getCurrentTask',
          value: function getCurrentTask() {
            return this.loadAllTasks().filter(function (task) {
              return !task.isFinished;
            })[0];
          }
        }, {
          key: 'saveTask',
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
            this.storage.save('tasks', allTasks);
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [StorageBroker];
          }
        }]);

        return TaskService;
      })();

      _export('TaskService', TaskService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Rhc2tTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MERBR2EsV0FBVzs7Ozs0Q0FIaEIsYUFBYTs7eUJBQ2IsSUFBSTs7Ozs7Ozs7O0FBRUMsaUJBQVc7QUFFWCxpQkFGQSxXQUFXLENBRVYsT0FBTyxFQUFFO2dDQUZWLFdBQVc7O0FBR3BCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztxQkFKVSxXQUFXOztpQkFNVix3QkFBRztBQUNiLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMsbUJBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7cUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUE7V0FDdkM7OztpQkFFZ0IsNkJBQUc7QUFDbEIsbUJBQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7cUJBQUssSUFBSSxDQUFDLFVBQVU7YUFBQSxDQUFDLENBQUM7V0FDOUQ7OztpQkFFYSwwQkFBRztBQUNmLG1CQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO3FCQUFLLENBQUMsSUFBSSxDQUFDLFVBQVU7YUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7V0FDbEU7OztpQkFFTyxrQkFBQyxJQUFJLEVBQUU7QUFDYixnQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTO0FBQ2hCLHFCQUFPO2FBQUEsQUFDVCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbkMsZ0JBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQ2hDLFVBQUMsQ0FBQztxQkFBSyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFO2FBQUEsQ0FDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNMLGdCQUFHLENBQUMsWUFBWSxFQUFDO0FBQ2Ysc0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckIsTUFBTTtBQUNMLHNCQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNqRDtBQUNELGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7V0FDdEM7OztpQkEvQlksa0JBQUc7QUFBQyxtQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1dBQUM7OztlQUQ3QixXQUFXOzs7NkJBQVgsV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9UYXNrU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9