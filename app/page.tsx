import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import LandingPageScreen from '@/components/LandingPageScreen';
import Cards from '@/components/Cards/Cards';
import Skills from '@/components/Skills/Skills';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle margin-0 />
      <LandingPageScreen />

      <Skills />

      <Cards />
    </>
  );
}
