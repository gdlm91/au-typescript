export interface CourseSummary {
    readonly id: number,
    readonly url: string,
    description: string,
    iconUrl: string,
    courseListIcon: string
    seqNo: number
}

export function createCourseSumary({id, url, description, iconUrl, courseListIcon, seqNo}: any): CourseSummary {
    return {
        id, url, description, iconUrl, courseListIcon, seqNo
    }
}

export function createCourseSumaries(data: any[]): CourseSummary[] {
    return data.map(createCourseSumary);
}