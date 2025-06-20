import { AboutMe } from '@/sections/AboutMe';
import { Journey } from '@/sections/Journey';
import { Container } from '@/components/Container';
import { GradientSection } from '@/components/GradientSection';
import { GradientVariants } from '@/constants/colors';

export default function Home() {
  return (
    <main>
      <GradientSection variant={GradientVariants.DarkToPrimaryDarken}>
        <Container>
          <AboutMe />
        </Container>
      </GradientSection>

      <GradientSection variant={GradientVariants.PrimaryDarkenToDark}>
        <Container>
          <Journey />
        </Container>
      </GradientSection>
    </main>
  );
}
