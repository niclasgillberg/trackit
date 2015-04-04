import {Task} from './models/Task';

export class Tracker{

  constructor(){
    this.newTask = new Task();
    this.currentTask = void 0;
    this.finishedTasks = [];
  }

  startTask() {
    if(!this.newTask.title)
      return;

    if(this.currentTask){
      this.currentTask.stop();
      this.finishedTasks.push(this.currentTask);
    }
    this.currentTask = this.newTask;
    this.newTask = new Task();
    this.currentTask.start();
  }

  restartTask(task) {
    this.newTask.title = task.title;
    this.newTask.category = task.category;
    this.startTask();
  }

  stopTask() {
    this.currentTask.stop();
    this.finishedTasks.push(this.currentTask);
    this.currentTask = void 0;
  }
}
