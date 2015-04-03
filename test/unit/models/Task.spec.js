import {Task} from '../../../src/models/Task';

describe('the Task', () => {
  var task;
  describe('no default values', () => {
    beforeEach(() => {
      task = new Task();
    });

    it('has empty title', () => {
      expect(task.title).toBe('');
    });

    it('has empty category', () => {
      expect(task.category).toBe('');
    });

    it('has no start time', () => {
      expect(task.startTime).toBeUndefined();
    });
  });

  describe('with default values', () => {
    beforeEach(() => {
      task = new Task('default', 'values');
    });

    it('has a default title', () => {
      expect(task.title).toBe('default');
    });

    it('has a default category', () => {
      expect(task.category).toBe('values');
    });
  });

  describe('starting a task', () => {
    var startTime;
    beforeEach(() => {
      var oldDate = Date;
      spyOn(window, 'Date').and.callFake(() => {
        startTime = new oldDate('2015-01-01 00:00:00');
        return startTime;
      });

      task = new Task('Starting task', 'Starters');
      task.start();
    });

    it('has a start time', () => {
      expect(task.startTime).toBeDefined();
      expect(task.startTime).toBe(startTime);
    });
  });

  describe('stopping a task', () => {
    var startTime, stopTime;
    beforeEach(() => {
      var oldDate = Date;
      spyOn(window, 'Date').and.callFake(() => {
        stopTime = new oldDate('2015-01-01 01:00:00');
        startTime = new oldDate('2015-01-01 00:00:00');
        return stopTime;
      });

      task = new Task('Stopping task', 'Stoppers');
      task.startTime = startTime;
      task.stop();
    });

    it('has a stop time', () => {
      expect(task.stopTime).toBeDefined();
      expect(task.stopTime).toBe(stopTime);
    });

    it('has a duration', () => {
      expect(task.duration).toBeDefined();
      expect(task.duration).toBe(3600);
    });
  });
});