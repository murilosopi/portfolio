'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLanguage, languages } from '@/data/languages';
import { Language } from '@/types/language';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const current = window.location.pathname;
    const supported = languages;

    if (supported.some((lang) => current.startsWith(`/${lang}`))) return;

    const lang =
      (navigator.language?.split('-')[0] as Language) || defaultLanguage;
    const target = supported.includes(lang) ? lang : defaultLanguage;

    router.replace('/' + target);
  }, [router]);

  return null;
}
