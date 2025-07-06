export type ExperienceType = 'education' | 'work';

export interface ExperienceBase {
  id: string;
  type: ExperienceType;
  initialDate: Date;
  finalDate?: Date;
  content: EducationalContent | WorkContent;
}

interface EducationalContent {
  title: string;
  description: string;
  institution?: string;
  insightsAndLearnings?: string;
}

interface WorkContent {
  title: string;
  description: string;
  insightsAndLearnings: string;
  company: string;
  role: string;
}

export interface EducationalExperience extends ExperienceBase {
  type: 'education';
  content: EducationalContent;
}

export interface WorkExperience extends ExperienceBase {
  type: 'work';
  content: WorkContent;
}

export type Experience = EducationalExperience | WorkExperience;
