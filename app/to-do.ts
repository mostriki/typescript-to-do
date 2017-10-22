class Task {
  done: boolean = false;

  constructor(public descriptionParameter: string, public priorityParameter: string) {
  }
}

let tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
