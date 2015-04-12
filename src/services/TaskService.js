import {StorageBroker} from '../brokers/StorageBroker';
import {Task} from '../models/Task';
import {inject} from 'aurelia-framework';

@inject(StorageBroker)
export class TaskService {
  constructor(storage) {
    this.storage = storage;
  }

  loadAllTasks() {
    var tasks = this.storage.fetch('tasks') || [];
    return tasks.map((t) => Task.parse(t))
  }

  loadFinishedTasks() {
    return this.loadAllTasks().filter((task) => task.isFinished);
  }

  getCurrentTask() {
    return this.loadAllTasks().filter((task) => !task.isFinished)[0];
  }

  saveTask(task) {
    if(!task.startTime)
      return;
    var allTasks = this.loadAllTasks();
    var existingTask = allTasks.filter(
      (t) => t.id === task.id
    )[0];
    if(!existingTask){
      allTasks.push(task);
    } else {
      allTasks[allTasks.indexOf(existingTask)] = task;
    }
    this.storage.save('tasks', allTasks);
  }
}