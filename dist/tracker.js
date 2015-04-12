System.register(['./models/Task', './services/TaskService'], function (_export) {
  var Task, TaskService, _classCallCheck, _createClass, Tracker;

  return {
    setters: [function (_modelsTask) {
      Task = _modelsTask.Task;
    }, function (_servicesTaskService) {
      TaskService = _servicesTaskService.TaskService;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Tracker = (function () {
        function Tracker(service) {
          _classCallCheck(this, Tracker);

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
        }], [{
          key: 'inject',
          value: function inject() {
            return [TaskService];
          }
        }]);

        return Tracker;
      })();

      _export('Tracker', Tracker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3REFHYSxPQUFPOzs7O3lCQUhaLElBQUk7O3lDQUNKLFdBQVc7Ozs7Ozs7OztBQUVOLGFBQU87QUFFUCxpQkFGQSxPQUFPLENBRU4sT0FBTyxFQUFDO2dDQUZULE9BQU87O0FBR2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQixjQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM1QyxjQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xEOztxQkFQVSxPQUFPOztpQkFTVCxxQkFBRztBQUNWLGdCQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO0FBQ3BCLHFCQUFPO2FBQUEsQUFFVCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDbEIsa0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hDO0FBQ0QsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNoQyxnQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzFCLGdCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7V0FDekM7OztpQkFFVSxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDaEMsZ0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEMsZ0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztXQUNsQjs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsZ0JBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLGdCQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1dBQzNCOzs7aUJBRWMseUJBQUMsSUFBSSxFQUFDO0FBQ25CLGdCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hELGdCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUM3Qjs7O2lCQXRDWSxrQkFBRztBQUFDLG1CQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7V0FBQzs7O2VBRDVCLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==