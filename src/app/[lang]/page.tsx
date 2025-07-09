import { AboutMeSection } from '@/sections/AboutMeSection';
import { JourneySection } from '@/sections/JourneySection';
import { Container } from '@/components/Container';
import { GradientSection } from '@/components/GradientSection';
import { ColorVariants } from '@/constants/colors';
import { languages } from '@/data/languages';
import { Language } from '@/types/language';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const LanguageHome = async ({
  params
}: {
  params: Promise<{
    lang: Language;
  }>;
}) => {
  const { lang } = await params;

  return (
    <main>
      <GradientSection
        from={ColorVariants.Dark}
        to={ColorVariants.PrimaryDarken}
      >
        <Container>
          <AboutMeSection lang={lang} />
        </Container>
      </GradientSection>

      <GradientSection
        from={ColorVariants.PrimaryDarken}
        to={ColorVariants.Dark}
      >
        <Container>
          <JourneySection lang={lang} />
        </Container>
      </GradientSection>
    </main>
  );
};

export default LanguageHome;
