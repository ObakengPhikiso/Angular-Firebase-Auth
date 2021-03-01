
export interface AuthRegister {
    email: string;
    password: string;
    name: string;
    surname: string;
}

export interface AuthLogin {
    email: string;
    password: string;
}
export interface form {
    nameOfSender: string;
    department: string;
    school: string;
    moduleName: string;
    moduleCode: string;
    moduleLecture: string;
    moduleYear: number;
    studentEnrolled: number;
    reasonRequest: string;
    tutor: tutor[];
}

export interface tutor {
    tutorName: string;
    tutorSurname: string;
    studentNum: number;
    sessionNum: number;
    numHours: number;
    yearStudy: number
}
