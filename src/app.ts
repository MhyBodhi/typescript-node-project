// src/app.ts

import { TaskService } from './services/taskService';

const { formatTask } = require('../js/utils'); // 导入 JS 文件中的函数

// 创建 TaskService 实例
const taskService = new TaskService();

// 添加一些任务
taskService.addTask("Learn TypeScript");
taskService.addTask("Integrate Webpack with TypeScript");
taskService.addTask("Migrate JavaScript to TypeScript");

// 获取并显示所有任务
console.log("All Tasks:");
console.log(taskService.getAllTasks());

// 完成任务并显示状态
taskService.completeTask(1);
console.log("After Completing Task 1:");
console.log(taskService.getAllTasks());

console.log("Formatted Tasks:");
taskService.getAllTasks().forEach(task => {
  console.log(formatTask(task));
});