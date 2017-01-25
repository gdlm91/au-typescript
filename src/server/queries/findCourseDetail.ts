import { CourseModel, LessonModel } from "../model/model";
import * as Bluebird from 'bluebird';
import { CourseDetail, createCourseDetail } from '../../shared/model/course-detail';

export function findCourseDetail(courseId: number): Bluebird<CourseDetail> {
    return CourseModel.findById(courseId, {
        include: [
            { model: LessonModel }
        ]
    }).then(createCourseDetail);
}