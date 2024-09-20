// src/models/task.ts

export interface Task {
    id: number;
    description: string;
    isCompleted: boolean;
  }
  
  export class TaskModel implements Task {
    constructor(public id: number, public description: string, public isCompleted: boolean = false) {}
  }
  