import { AboutMeSection } from '@/sections/AboutMeSection';
import { JourneySection } from '@/sections/JourneySection';
import { Container } from '@/components/Container';
import { GradientSection } from '@/components/GradientSection';
import { GradientVariants } from '@/constants/colors';

export default function Home() {
  return (
    <main>
      <GradientSection variant={GradientVariants.DarkToPrimaryDarken}>
        <Container>
          <AboutMeSection />
        </Container>
      </GradientSection>

      <GradientSection variant={GradientVariants.PrimaryDarkenToDark}>
        <Container>
          <JourneySection />
        </Container>
      </GradientSection>
    </main>
  );
}
