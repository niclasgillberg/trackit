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
});