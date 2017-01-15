import * as ORM from "sequelize";
import { initCourseModel } from "./initCourseModel";
import { initLessonModel } from "./initLessonModel";

const dbURL = 'postgres://postgres:admin@localhost:5432/complete-typescript-course';

const sequelize = new ORM(dbURL);

export const CourseModel = initCourseModel(sequelize);

export const LessonModel = initLessonModel(sequelize);

CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'});

LessonModel.belongsTo(CourseModel, {foreignKey: 'courseId'});