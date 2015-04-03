export class Task {
  constructor(title, category){
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
    return (this.stopTime - this.startTime) / 1000;
  }
}