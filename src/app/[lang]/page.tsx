import { AboutMeSection } from '@/sections/AboutMeSection';
import { JourneySection } from '@/sections/JourneySection';
import { Container } from '@/components/Container';
import { GradientSection } from '@/components/GradientSection';
import { GradientVariants } from '@/constants/colors';
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
      <GradientSection variant={GradientVariants.DarkToPrimaryDarken}>
        <Container>
          <AboutMeSection lang={lang} />
        </Container>
      </GradientSection>

      <GradientSection variant={GradientVariants.PrimaryDarkenToDark}>
        <Container>
          <JourneySection lang={lang} />
        </Container>
      </GradientSection>
    </main>
  );
};

export default LanguageHome;
