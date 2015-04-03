import {Task} from './models/Task';

export class Tracker{

  constructor(){
    this.newTask = new Task();
    this.currentTask = void 0;
    this.finishedTasks = [];
  }

  startTask() {
    if(this.currentTask)
      this.currentTask.stop();
    this.finishedTasks.push(this.currentTask);
    this.currentTask = this.newTask;
    this.newTask = new Task();
    this.currentTask.start();
  }
}
