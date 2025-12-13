export interface Task {
  title: string;
  description: string;
  status: statusType;
  dueDate: string;
  id: number;
}

type statusType = "to do" | "in progress" | "done";
