export interface Task {
  _id: string;
  name: string;
  description?: string;
  status: string;
  icon?: string;
}

export interface Board {
  _id: string;
  name: string;
  description?: string;
  tasks: Task[];
}