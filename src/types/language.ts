export type Language = 'pt' | 'en';

export type Languages = Language[];

export enum LanguageEnum {
  Portuguese = 'pt',
  English = 'en'
}

export interface OptionalLanguage {
  lang?: Language;
}
