export interface ITodo {
  id: string;
  title: string;
  description: string;
  type: TodoType;
}

export enum TodoType {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}
