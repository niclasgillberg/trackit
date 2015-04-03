export class Task {
  constructor(title, category){
    this.title = title || '';
    this.category = category || '';
    this.startDate = void 0;
  }

  start(){
    this.startDate = Date.now();
  }

  stop(){
    
  }
}