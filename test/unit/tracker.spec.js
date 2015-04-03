import {Tracker} from '../../src/tracker';
import {Task} from '../../src/models/Task';

describe('the Tracker', () => {
  var tracker;
  beforeEach(() => {
    tracker = new Tracker();
  });

  describe('initial state', () => {
    it('has initialized a new task', () => {
      expect(tracker.newTask).toBeDefined();
    });

    it('has not initalized a current task', () => {
      expect(tracker.currentTask).toBeUndefined();
    });

    it('has an empty finished tasks list', () => {
      expect(tracker.finishedTasks).toBeDefined();
      expect(tracker.finishedTasks).toEqual([]);
    });
  });

  describe('starting a new task', () => {
    var startTime;

    beforeEach(() => {
      var oldDateNow = Date.now;
      spyOn(Date, 'now').and.callFake(() => {
        startTime = oldDateNow();
        return startTime;
      });

      tracker.currentTask = new Task('Old task', 'Old category');
      tracker.newTask.title = 'Creating some stuff';
      tracker.newTask.category = 'Development';
      startTime = Date.now();
      tracker.startTask();
    });

    it('has moved the new task to be the current task', () => {
      expect(tracker.currentTask).toBeDefined();
      expect(tracker.currentTask.title).toEqual('Creating some stuff');
      expect(tracker.currentTask.category).toEqual('Development');
    });

    it('has set a start time on the current task', () => {
      expect(tracker.currentTask.startDate).toEqual(startTime);
    });

    it('has placed the old current task in the finished list', () => {
      expect(tracker.finishedTasks.length).toBe(1);
      expect(tracker.finishedTasks[0].title).toEqual('Old task');
    });
  });
});