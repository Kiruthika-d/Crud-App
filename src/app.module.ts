import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './Courses/courses.controller';
import { CourseSchema } from './Schemas/courses.schema';
import { CourseService } from './Services/course.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Course',
        schema: CourseSchema,
        collection: 'Courses',
      },
    ]),
    MongooseModule.forRoot('mongodb://localhost:27017/CourseDetails'),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService],
})
export class AppModule {}
