import { defaultLanguage, languages } from '@/data/languages';

export default function Head() {
  return (
    <>
      {languages.map((lang) => (
        <link
          key={lang}
          rel='alternate'
          href={`/${lang}`}
          hrefLang={lang}
        />
      ))}
      <link
        rel='alternate'
        href='/'
        hrefLang='x-default'
      />
      <link
        rel='canonical'
        href={`/${defaultLanguage}`}
      />
    </>
  );
}
