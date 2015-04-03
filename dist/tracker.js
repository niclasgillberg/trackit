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
              if (this.currentTask) this.currentTask.stop();
              this.finishedTasks.push(this.currentTask);
              this.currentTask = this.newTask;
              this.newTask = new Task();
              this.currentTask.start();
            }
          }
        });

        return Tracker;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLElBQUksaUNBRUMsT0FBTzs7OztBQUZaLFVBQUksZUFBSixJQUFJOzs7Ozs7Ozs7QUFFQyxhQUFPO0FBRVAsaUJBRkEsT0FBTyxHQUVMO2dDQUZGLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQixjQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFCLGNBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCOztxQkFOVSxPQUFPO0FBUWxCLG1CQUFTO21CQUFBLHFCQUFHO0FBQ1Ysa0JBQUcsSUFBSSxDQUFDLFdBQVcsRUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQixrQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFDLGtCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDaEMsa0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQjs7OztlQWZVLE9BQU8iLCJmaWxlIjoidHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9