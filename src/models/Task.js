import {Guid} from '../_helpers/Guid';

export class Task {
  constructor(title, category, id){
    this.id = id || Guid.new();
    this.title = title || '';
    this.category = category || '';
    this.startTime = void 0;
  }

  start(){
    this.startTime = new Date();
  }

  stop(){
    this.stopTime = new Date();
  }

  get duration() {
    var stopTime = this.stopTime || new Date();
    return Math.round((stopTime - this.startTime) / 1000);
  }

  get isFinished() {
    return !!this.stopTime;
  }

  static parse(obj) {
    var task = new Task(obj.title, obj.category, obj.id);
    if(obj.startTime)
      task.startTime = new Date(obj.startTime);
    if(obj.stopTime)
      task.stopTime = new Date(obj.stopTime);
    return task;
  }
}