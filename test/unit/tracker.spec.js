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

  describe('starting a new task when current is in progress', () => {
    var startTime;

    beforeEach(() => {
      var oldDate = Date;
      spyOn(window, 'Date').and.callFake(() => {
        startTime = new oldDate('2015-01-01 00:00:00');
        return startTime;
      });

      tracker.currentTask = new Task('Old task', 'Old category');
      tracker.newTask.title = 'Creating some stuff';
      tracker.newTask.category = 'Development';
      startTime = new Date();
      tracker.startTask();
    });

    it('has moved the new task to be the current task', () => {
      expect(tracker.currentTask).toBeDefined();
      expect(tracker.currentTask.title).toEqual('Creating some stuff');
      expect(tracker.currentTask.category).toEqual('Development');
    });

    it('has set a start time on the current task', () => {
      expect(tracker.currentTask.startTime).toEqual(startTime);
    });

    it('has placed the old current task in the finished list', () => {
      expect(tracker.finishedTasks.length).toBe(1);
      expect(tracker.finishedTasks[0].title).toEqual('Old task');
    });
  });

  describe('starting a new task when no task is in progress', () => {
    var startTime;
    beforeEach(() => {
      var oldDate = Date;
      spyOn(window, 'Date').and.callFake(() => {
        startTime = new oldDate('2015-01-01 00:00:00');
        return startTime;
      });

      startTime = new Date();
      tracker.startTask();
    });

    it('does not add anything to the finished list', () => {
      expect(tracker.finishedTasks.length).toBe(0);
    });
  });

  describe('stopping the current task', () => {
    beforeEach(() => {
      tracker.currentTask = new Task('Started task', 'stopping');
      tracker.currentTask.startTime = new Date('2015-01-01 01:00:00');

      tracker.stopTask();
    });

    it('adds the current task to the finished list', () => {
      expect(tracker.finishedTasks[0].title).toBe('Started task');
    });

    it('resets the current task', () => {
      expect(tracker.currentTask).toBeUndefined();
    });
  });

  describe('restarting a task', () => {
    var currentTask, startTime;
    beforeEach(() => {
      var oldDate = Date;
      spyOn(window, 'Date').and.callFake(() => {
        startTime = new oldDate('2015-01-01 00:00:00');
        return startTime;
      });

      var finishedTask = new Task('task', 'category');
      finishedTask.startTime = new Date('2015-01-01 00:00:00');
      finishedTask.stopTime = new Date('2015-01-01 01:00:00');

      tracker.finishedTasks = [finishedTask];
      tracker.currentTask = new Task('Current');
      tracker.currentTask.startTime = new Date('2015-01-01 01:00:00');

      tracker.restartTask(finishedTask);
    });

    it('stops the current task', () => {
      expect(tracker.finishedTasks[1].title).toBe('Current');
      expect(tracker.finishedTasks[1].stopTime).toBeDefined();
    });
  });
});