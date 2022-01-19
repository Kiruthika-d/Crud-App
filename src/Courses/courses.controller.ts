import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CourseService } from '../Services/course.service';

@Controller('courses')
export class CoursesController {
  constructor(private service: CourseService) {}
  @Get('all')
  async GetAll() {
    return await this.service.getAll();
  }

  @Post('add')
  async Add(@Body() course: any) {
    await this.service.add(course);
  }

  @Post('update')
  async Update(@Body() course: any) {
    await this.service.update(course);
  }

  @Delete('delete/:id')
  async Delete(@Param('id') id) {
    await this.service.delete(id);
  }
}
