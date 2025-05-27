export interface Task {
  _id: string;
  name: string;
  description?: string;
  status?: "In Progress" | "Completed" | "Won't Do";
  icon?: "developer" | "chat" | "coffee" | "robot" | "books" | "timer";
}

export interface Board {
  _id: string;
  name: string;
  description?: string;
  tasks: Task[];
}