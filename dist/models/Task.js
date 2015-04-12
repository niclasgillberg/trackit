System.register(['../_helpers/Guid'], function (_export) {
  var Guid, _classCallCheck, _createClass, Task;

  return {
    setters: [function (_helpersGuid) {
      Guid = _helpersGuid.Guid;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Task = (function () {
        function Task(title, category, id) {
          _classCallCheck(this, Task);

          this.id = id || Guid['new']();
          this.title = title || '';
          this.category = category || '';
          this.startTime = void 0;
        }

        _createClass(Task, [{
          key: 'start',
          value: function start() {
            this.startTime = new Date();
          }
        }, {
          key: 'stop',
          value: function stop() {
            this.stopTime = new Date();
          }
        }, {
          key: 'duration',
          get: function () {
            var stopTime = this.stopTime || new Date();
            return Math.round((stopTime - this.startTime) / 1000);
          }
        }, {
          key: 'isFinished',
          get: function () {
            return !!this.stopTime;
          }
        }], [{
          key: 'parse',
          value: function parse(obj) {
            var task = new Task(obj.title, obj.category, obj.id);
            if (obj.startTime) task.startTime = new Date(obj.startTime);
            if (obj.stopTime) task.stopTime = new Date(obj.stopTime);
            return task;
          }
        }]);

        return Task;
      })();

      _export('Task', Task);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9UYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MkNBRWEsSUFBSTs7OzswQkFGVCxJQUFJOzs7Ozs7Ozs7QUFFQyxVQUFJO0FBQ0osaUJBREEsSUFBSSxDQUNILEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDO2dDQURyQixJQUFJOztBQUViLGNBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksT0FBSSxFQUFFLENBQUM7QUFDM0IsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pCOztxQkFOVSxJQUFJOztpQkFRVixpQkFBRTtBQUNMLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7V0FDN0I7OztpQkFFRyxnQkFBRTtBQUNKLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7V0FDNUI7OztlQUVXLFlBQUc7QUFDYixnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzNDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQSxHQUFJLElBQUksQ0FBQyxDQUFDO1dBQ3ZEOzs7ZUFFYSxZQUFHO0FBQ2YsbUJBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7V0FDeEI7OztpQkFFVyxlQUFDLEdBQUcsRUFBRTtBQUNoQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyRCxnQkFBRyxHQUFHLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLGdCQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7OztlQWhDVSxJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJtb2RlbHMvVGFzay5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9