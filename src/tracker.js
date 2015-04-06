import {Task} from './models/Task';
import {TaskService} from './services/TaskService';

export class Tracker{
  static inject() {return [TaskService];}
  constructor(service){
    this.service = service;
    this.newTask = new Task();
    this.currentTask = service.getCurrentTask();
    this.finishedTasks = service.loadFinishedTasks();
  }

  startTask() {
    if(!this.newTask.title)
      return;

    if(this.currentTask){
      this.currentTask.stop();
      this.addFinishedTask(this.currentTask);
    }
    this.currentTask = this.newTask;
    this.newTask = new Task();
    this.currentTask.start();
    this.service.saveTask(this.currentTask);
  }

  restartTask(task) {
    this.newTask.title = task.title;
    this.newTask.category = task.category;
    this.startTask();
  }

  stopTask() {
    this.currentTask.stop();
    this.addFinishedTask(this.currentTask);
    this.currentTask = void 0;
  }

  addFinishedTask(task){
    this.finishedTasks.push(task);
    this.finishedTasks = this.finishedTasks.slice();
    this.service.saveTask(task);
  }
}
