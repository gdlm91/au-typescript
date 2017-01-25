import { CourseSummary } from './course-summary';
import { Lesson } from './lesson';

export interface CourseDetail extends CourseSummary {
    longDescription: string,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    lessons?: Lesson[]
}

export function createCourseDetail({
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo,
    longDescription,
    comingSoon,
    isNew,
    isOngoing,
    Lessons
}: any): CourseDetail {
    return {
        id,
        url,
        description,
        iconUrl,
        courseListIcon,
        seqNo,
        longDescription,
        comingSoon,
        isNew,
        isOngoing,
        lessons: Lessons.map(createLessonFromDbModel)
    }
}

export function createLessonFromDbModel({
    id,
    url,
    description,
    duration,
    seqNo,
    courseId,
    pro,
    tags
}: any) {
    return {
        id,
        url,
        description,
        duration,
        seqNo,
        courseId,
        pro,
        tags
    }
}