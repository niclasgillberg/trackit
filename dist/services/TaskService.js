System.register(['../brokers/StorageBroker', '../models/Task', 'aurelia-framework'], function (_export) {
  var StorageBroker, Task, inject, _classCallCheck, _createClass, TaskService;

  return {
    setters: [function (_brokersStorageBroker) {
      StorageBroker = _brokersStorageBroker.StorageBroker;
    }, function (_modelsTask) {
      Task = _modelsTask.Task;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      TaskService = (function () {
        function TaskService(storage) {
          _classCallCheck(this, _TaskService);

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
        }]);

        var _TaskService = TaskService;
        TaskService = inject(StorageBroker)(TaskService) || TaskService;
        return TaskService;
      })();

      _export('TaskService', TaskService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Rhc2tTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7a0VBS2EsV0FBVzs7Ozs0Q0FMaEIsYUFBYTs7eUJBQ2IsSUFBSTs7aUNBQ0osTUFBTTs7Ozs7Ozs7O0FBR0QsaUJBQVc7QUFDWCxpQkFEQSxXQUFXLENBQ1YsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLFdBQVc7O2lCQUtWLHdCQUFHO0FBQ2IsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QyxtQkFBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztxQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQTtXQUN2Qzs7O2lCQUVnQiw2QkFBRztBQUNsQixtQkFBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtxQkFBSyxJQUFJLENBQUMsVUFBVTthQUFBLENBQUMsQ0FBQztXQUM5RDs7O2lCQUVhLDBCQUFHO0FBQ2YsbUJBQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7cUJBQUssQ0FBQyxJQUFJLENBQUMsVUFBVTthQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNsRTs7O2lCQUVPLGtCQUFDLElBQUksRUFBRTtBQUNiLGdCQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7QUFDaEIscUJBQU87YUFBQSxBQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNuQyxnQkFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDaEMsVUFBQyxDQUFDO3FCQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUU7YUFBQSxDQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsZ0JBQUcsQ0FBQyxZQUFZLEVBQUM7QUFDZixzQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQixNQUFNO0FBQ0wsc0JBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2pEO0FBQ0QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztXQUN0Qzs7OzJCQS9CVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNULFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoic2VydmljZXMvVGFza1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==