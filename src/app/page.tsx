import { AboutMe } from "@/sections/AboutMe";
import { Journey } from "@/sections/Journey";
import { Container } from "@/components/Container";
import {
  GradientVariants,
  GradientSection,
} from "@/components/GradientSection";

export default function Home() {
  return (
    <main>
      <GradientSection variant={GradientVariants.FromDark}>
        <Container>
          <AboutMe />
        </Container>
      </GradientSection>

      <GradientSection variant={GradientVariants.ToDark}>
        <Container>
          <Journey />
        </Container>
      </GradientSection>
    </main>
  );
}
