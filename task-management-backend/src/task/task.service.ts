import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<Task>,
  ) {}

  async getAllTasks(user: User) {
    return this.taskModel.find({ user: user._id });
  }

  async createTask(task: Task, user: User) {
    const data = Object.assign(task, { user: user._id });
    const res = await this.taskModel.create(data);
    return res;
  }

  async deleteTask(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
