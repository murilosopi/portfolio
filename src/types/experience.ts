export interface Experience {
  id: string;
  type: 'education' | 'work';
  description: string;
  initialDate: Date;
  finalDate?: Date;
}
