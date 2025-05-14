import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
