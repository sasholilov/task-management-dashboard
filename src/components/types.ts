export interface Task {
  title: string;
  description: string;
  status: statusType;
  dueDate: string;
  id: number;
}

export type statusType = "to do" | "in progress" | "done";
