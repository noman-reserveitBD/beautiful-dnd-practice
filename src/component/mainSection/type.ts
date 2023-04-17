export interface Task {
  name: string;
  id: number;
  task: string;
}

export interface Tasks {
  header?: string;
  data: Task[];
}
