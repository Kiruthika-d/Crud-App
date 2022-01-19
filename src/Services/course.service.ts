import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from '../Models/course.model';

@Injectable()
export class CourseService {
    constructor(@InjectModel('Course') private readonly courseModel: Model<Course>){}

    async getAll():Promise<Course[]>{
        return await this.courseModel.find({});
    }
  
    async add(animal){
      const createCourse = new this.courseModel(animal);
      await createCourse.save();
    }
  
    async update(course){
      await this.courseModel.updateOne({code:course.code},course);
    }
  
    async delete(id){
      await this.courseModel.deleteOne({_id :id});
    }
}
