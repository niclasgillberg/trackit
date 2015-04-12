System.register(['./models/Task', './services/TaskService', 'aurelia-framework'], function (_export) {
  var Task, TaskService, inject, _classCallCheck, _createClass, Tracker;

  return {
    setters: [function (_modelsTask) {
      Task = _modelsTask.Task;
    }, function (_servicesTaskService) {
      TaskService = _servicesTaskService.TaskService;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Tracker = (function () {
        function Tracker(service) {
          _classCallCheck(this, _Tracker);

          this.service = service;
          this.newTask = new Task();
          this.currentTask = service.getCurrentTask();
          this.finishedTasks = service.loadFinishedTasks();
        }

        _createClass(Tracker, [{
          key: 'startTask',
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
        }, {
          key: 'restartTask',
          value: function restartTask(task) {
            this.newTask.title = task.title;
            this.newTask.category = task.category;
            this.startTask();
          }
        }, {
          key: 'stopTask',
          value: function stopTask() {
            this.currentTask.stop();
            this.addFinishedTask(this.currentTask);
            this.currentTask = void 0;
          }
        }, {
          key: 'addFinishedTask',
          value: function addFinishedTask(task) {
            this.finishedTasks.push(task);
            this.finishedTasks = this.finishedTasks.slice();
            this.service.saveTask(task);
          }
        }]);

        var _Tracker = Tracker;
        Tracker = inject(TaskService)(Tracker) || Tracker;
        return Tracker;
      })();

      _export('Tracker', Tracker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnRUFLYSxPQUFPOzs7O3lCQUxaLElBQUk7O3lDQUNKLFdBQVc7O2lDQUNYLE1BQU07Ozs7Ozs7OztBQUdELGFBQU87QUFDUCxpQkFEQSxPQUFPLENBQ04sT0FBTyxFQUFDOzs7QUFDbEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzFCLGNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzVDLGNBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbEQ7O3FCQU5VLE9BQU87O2lCQVFULHFCQUFHO0FBQ1YsZ0JBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7QUFDcEIscUJBQU87YUFBQSxBQUVULElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztBQUNsQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEM7QUFDRCxnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUIsZ0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztXQUN6Qzs7O2lCQUVVLHFCQUFDLElBQUksRUFBRTtBQUNoQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNoQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0QyxnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1dBQ2xCOzs7aUJBRU8sb0JBQUc7QUFDVCxnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixnQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7V0FDM0I7OztpQkFFYyx5QkFBQyxJQUFJLEVBQUM7QUFDbkIsZ0JBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEQsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQzdCOzs7dUJBdENVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==