class Task {
  id: string;
  text: string;

  constructor(taskData: string) {
    this.text = taskData;
    this.id = new Date().toISOString();
  }
}

export default Task;
