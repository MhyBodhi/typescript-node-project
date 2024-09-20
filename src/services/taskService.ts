// src/services/taskService.ts

import { TaskModel } from '../models/task';

export class TaskService {
  private tasks: TaskModel[] = [];

  // 添加任务
  addTask(description: string): TaskModel {
    const task = new TaskModel(this.tasks.length + 1, description);
    this.tasks.push(task);
    return task;
  }

  // 获取所有任务
  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  // 完成任务
  completeTask(id: number): boolean {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.isCompleted = true;
      return true;
    }
    return false;
  }
}
