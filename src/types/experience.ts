export interface Experience {
  id: string;
  type: 'education' | 'work';
  title: string;
  description: string;
  initialDate: Date;
  finalDate?: Date;
  tags?: string[];
}

export interface EducationalExperience extends Omit<Experience, 'type'> {
  type: 'education';
  institution: string;
  insightsAndLearnings?: string;
  certificateUrl?: string;
}
