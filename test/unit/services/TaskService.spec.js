import {TaskService} from '../../../src/services/TaskService';
import {Task} from '../../../src/models/Task';

class MockStorageBroker {
  constructor() {
    var task1 = new Task('Task 1', 'default');
    task1.startTime = new Date('2015-01-01 00:00:00');
    task1.stopTime = new Date('2015-01-01 01:00:00');
    var task2 = new Task('Task 2', 'important');
    task2.startTime = new Date('2015-01-01 01:00:00');
    task2.stopTime = new Date('2015-01-01 01:01:00');
    var task3 = new Task('Task 3', 'running');
    task3.startTime = new Date('2015-01-01 02:00:00')
    this.data = {
      tasks: [
        task1,
        task2,
        task3
      ]
    };
  }

  fetch(key) {
    return this.data[key];
  }

  save(key, value) {
    this.data[key] = value;
  }
}

describe('the task service', () => {
  var service,
      storage;
  beforeEach(() => {
    storage = new MockStorageBroker();
    service = new TaskService(storage);
  });

  it('can be instantiated with a StorageBroker', () => {
    expect(service).toBeDefined();
  });

  describe('when loading all tasks', () => {
    var result;
    beforeEach(() => {
      result = service.loadAllTasks();
    });

    it('has three tasks', () => {
      expect(result.length).toBe(3);
    });
  });

  describe('when loading finished tasks', () => {
    var result;
    beforeEach(() => {
      result = service.loadFinishedTasks();
    });

    it('returns two tasks', () => {
      expect(result.length).toBe(2);
    });
  });

  describe('when loading current task', () => {
    var result;
    describe('and no task is unfinished', () => {
      beforeAll(() => {
        storage.data['tasks'][2].stopTime = new Date('2015-01-01 02:00:00');

        result = service.getCurrentTask();
      });

      it('returns undefined', () => {
        expect(result).toBeUndefined();
      });

      afterAll(() => {
        storage.data['tasks'][2].stopTime = void 0;
      });
    });

    describe('and there is one task that is unfinished', () => {
      beforeEach(() => {
        result = service.getCurrentTask();
      });

      it('returns the unfinished task', () => {
        expect(result.title).toBe('Task 3');
        expect(result.category).toBe('running');
      });
    });
  });

  describe('when saving a task', () => {
    var task,
        result;

    describe('that is not started', () => {
      beforeEach(() => {
        task = new Task('New task', 'saving');

        service.saveTask(task);
      });

      it('does not persist the task', () => {
        expect(storage.data.tasks.length).toBe(3);
      });
    });

    describe('that is new', () => {
      beforeEach(() => {
        task = new Task('New task', 'saving');
        task.startTime = new Date('2015-01-01 03:00:00')

        service.saveTask(task);
      });

      it('adds the task to the storage', () => {
        expect(storage.data.tasks.length).toBe(4);
      });
    });
    
    describe('that already exists', () => {
      beforeEach(() => {
        task = new Task('Task 3', 'running');
        task.id = storage.data.tasks[2].id;
        task.startTime = new Date('2015-01-01 02:00:00')
        task.stopTime = new Date('2015-01-01 03:00:00');

        service.saveTask(task);
      });

      it('does not add the task again', () => {
        expect(storage.data.tasks.length).toBe(3);
      });

      it('updates the properties of the task', () => {
        expect(storage.data.tasks[2].stopTime).toBeDefined();
      });
    });
  });
});