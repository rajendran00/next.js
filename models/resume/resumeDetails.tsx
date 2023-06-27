import { ObjectUtil } from "../../utils/objectUtils";

export class ResumeDetails {
    name: string | null = null;
    role: string | null = null;
    roleDescription: string | null = null;
    experience: Experience | null = null;
    projectDetails: Array<ProjectDetails> | null = null;
    academicDetails: AcademicDetails | null = null;
    contactDetails: ContactDetails | null = null;
    skills: Array<string> | null = null;
    qualities: Array<string> | null = null;
    githubUrl: string | null = null;
    language: Array<ContentDetails> | null = null;
    interests: Array<ContentDetails> | null = null;
    constructor(resumeDetails?: ResumeDetails) {
        if (resumeDetails) {
            this.deserialize(resumeDetails);
        }
    }
    private deserialize(resumeDetails: ResumeDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (resumeDetails?.hasOwnProperty(key)) {
                switch (key) {
                    case "projectDetails":
                        this[key] = resumeDetails.projectDetails ? ObjectUtil.rendeArray<ProjectDetails>(resumeDetails.projectDetails, ProjectDetails) : null;
                        break;
                    case "language":
                        this[key] = resumeDetails.language ? ObjectUtil.rendeArray<ContentDetails>(resumeDetails.language, ContentDetails) : null;
                        break;
                    case "interests":
                        this[key] = resumeDetails.interests ? ObjectUtil.rendeArray<ContentDetails>(resumeDetails.interests, ContentDetails) : null;
                        break;
                    default:
                        (this as any)[key] = (resumeDetails as any)[key];
                }
            }
        }
    }
}
export class Experience {
    companyName: string | null = null;
    roleDetails: Array<RoleDetails> | null = null;
    constructor(experience?: Experience) {
        if (experience) {
            this.deserialize(experience);
        }
    }
    private deserialize(experience: Experience) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (experience?.hasOwnProperty(key)) {
                switch (key) {
                    case "roleDetails":
                        this[key] = experience.roleDetails ? ObjectUtil.rendeArray<RoleDetails>(experience.roleDetails, RoleDetails) : null;
                        break;
                    default:
                        (this as any)[key] = (experience as any)[key];
                }
            }
        }
    }
}
export class RoleDetails {
    stack: string | null = null;
    duration: string | null = null;
    constructor(roleDetails?: RoleDetails) {
        if (roleDetails) {
            this.deserialize(roleDetails);
        }
    }
    private deserialize(roleDetails: RoleDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (roleDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (roleDetails as any)[key];
                }
            }
        }
    }
}
export class ProjectDetails {
    title: string | null = null;
    content: Array<WorkedProjects> | null = null;
    constructor(projectDetails?: ProjectDetails) {
        if (projectDetails) {
            this.deserialize(projectDetails);
        }
    }
    private deserialize(projectDetails: ProjectDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (projectDetails?.hasOwnProperty(key)) {
                switch (key) {
                    case "content":
                        this[key] = projectDetails.content ? ObjectUtil.rendeArray<WorkedProjects>(projectDetails.content, WorkedProjects) : null;
                        break;
                    default:
                        (this as any)[key] = (projectDetails as any)[key];
                }
            }
        }
    }
}
export class WorkedProjects {
    name: string | null = null;
    description: string | null = null;
    stack: string | null = null;
    duration: string | null = null;
    constructor(workedProjects?: WorkedProjects) {
        if (workedProjects) {
            this.deserialize(workedProjects);
        }
    }
    private deserialize(workedProjects: WorkedProjects) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (workedProjects?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (workedProjects as any)[key];
                }
            }
        }
    }
}
export class AcademicDetails {
    tenthDetails: SchoolDetails | null = null;
    twelthDetails: SchoolDetails | null = null;
    ugDetails: UGDetails | null = null;
    constructor(academicDetails?: AcademicDetails) {
        if (academicDetails) {
            this.deserialize(academicDetails);
        }
    }
    private deserialize(academicDetails: AcademicDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (academicDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (academicDetails as any)[key];
                }
            }
        }
    }
}
export class UGDetails {
    collegeName: string | null = null;
    location: string | null = null;
    duration: string | null = null;
    CGPA: string | null = null;
    degree: string | null = null;
    constructor(ugDetails?: UGDetails) {
        if (ugDetails) {
            this.deserialize(ugDetails);
        }
    }
    private deserialize(ugDetails: UGDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (ugDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (ugDetails as any)[key];
                }
            }
        }
    }
}
export class SchoolDetails {
    schoolName: string | null = null;
    location: string | null = null;
    duration: string | null = null;
    percentage: string | null = null;
    constructor(schoolDetails?: SchoolDetails) {
        if (schoolDetails) {
            this.deserialize(schoolDetails);
        }
    }
    private deserialize(schoolDetails: SchoolDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (schoolDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (schoolDetails as any)[key];
                }
            }
        }
    }
}
export class ContactDetails {
    emailId: string | null = null;
    phone: string | null = null;
    address: string | null = null;
    linkedInUrl: string | null = null;
    constructor(contactDetails?: ContactDetails) {
        if (contactDetails) {
            this.deserialize(contactDetails);
        }
    }
    private deserialize(contactDetails: ContactDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (contactDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (contactDetails as any)[key];
                }
            }
        }
    }
}
export class ContentDetails {
    title: string | null = null;
    content: string | null = null;
    constructor(contactDetails?: ContactDetails) {
        if (contactDetails) {
            this.deserialize(contactDetails);
        }
    }
    private deserialize(contactDetails: ContactDetails) {
        const keys = Object.keys(this);
        for (const key of keys) {
            if (contactDetails?.hasOwnProperty(key)) {
                switch (key) {
                    default:
                        (this as any)[key] = (contactDetails as any)[key];
                }
            }
        }
    }
}

