import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  @UseGuards(AuthGuard())
  async getAllTasks(@Req() req: any) {
    return this.taskService.getAllTasks(req.user);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createTask(@Body() createTaskDto: CreateTaskDto, @Req() req: any) {
    return this.taskService.createTask(createTaskDto, req.user);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
