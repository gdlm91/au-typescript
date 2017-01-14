import * as ORM from "sequelize";
import { initCourseModel } from "./initCourseModel";

const dbURL = 'postgres://postgres:admin@localhost:5432/complete-typescript-course';

const sequelize = new ORM(dbURL);

export const CourseModel = initCourseModel(sequelize);