import { Language } from '@/types/language';

export const dateToLongLocale = (date: Date, lang: Language): string => {
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

  return utcDate.toLocaleDateString(lang, {
    dateStyle: 'long'
  });
};
