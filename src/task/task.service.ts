import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({ data });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
