import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './model/task.model';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Query(() => Task, { nullable: true })
  async task(@Args('id', { type: () => ID }) id: number): Promise<Task | null> {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  async createTask(
    @Args('title') title: string,
    @Args('description', { nullable: true }) description: string,
    @Args('priority', { nullable: true }) priority: number,
    @Args('status') status: string,
    @Args('dueDate', { nullable: true }) dueDate: Date,
    @Args('completed') completed: boolean,
  ): Promise<Task> {
    return this.taskService.create({
      title,
      description,
      priority,
      status,
      dueDate,
      completed,
    });
  }

  @Mutation(() => Task, { nullable: true })
  async updateTask(
    @Args('id', { type: () => ID }) id: number,
    @Args('title', { nullable: true }) title: string,
    @Args('description', { nullable: true }) description: string,
    @Args('priority', { nullable: true }) priority: number,
    @Args('status', { nullable: true }) status: string,
    @Args('dueDate', { nullable: true }) dueDate: Date,
    @Args('completed', { nullable: true }) completed: boolean,
  ): Promise<Task | null> {
    return this.taskService.update(id, {
      title,
      description,
      priority,
      status,
      dueDate,
      completed,
    });
  }

  @Mutation(() => Task)
  async deleteTask(@Args('id', { type: () => ID }) id: number) {
    return this.taskService.remove(id);
  }
}
