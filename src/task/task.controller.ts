import { Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async getAllTasks() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  async updateTask(@Param('id') id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return this.taskService.remove(id);
  }
}
