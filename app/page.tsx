import { Title, Center } from '@mantine/core';
import Cards from '../components/Cards/Cards';
import LandingPageScreen from '@/components/LandingPageScreen';

export default function HomePage() {
  return (
    <>
      <LandingPageScreen />

      <Center>
        <Title order={2}>Projects</Title>
      </Center>
      <Cards />
    </>
  );
}
