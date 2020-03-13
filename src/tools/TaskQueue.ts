interface Task {
  delay: number,
  callback: Function
}
export default class Queue {
  tasks: Task[] = []
  task(delay: number, callback: Function) {
    this.tasks.push({ delay, callback });
    return this;
  }
  start() {
    let self=this;
    async function helper(){
      while(self.tasks.length!==0){
        const cur:Task=self.tasks.shift() as Task;
        await new Promise(resolve=>{
          setTimeout(() => {
            cur.callback();
            resolve();
          }, cur.delay);
        })
      }
    }
    return helper();
  }
}
