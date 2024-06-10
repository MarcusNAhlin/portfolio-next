import { Group, Center } from '@mantine/core';
import CardComponent from './Card';

export default function CardsComponent() {
  return (
    <>
      <Center>
        <Group justify="center" align="start" mt="md" mb="md" mr="xs" ml="xs" w="90%">
          <CardComponent
            title="GolfApp"
            description="GolfApp is a website made with NextJS together with Prisma to help golfers to keep track of their score, view statistics, learn how to get better and more."
            // imageLink="golfApp.png"
            imageAlt="Image of GolfApp website"
            tagList={['NextJS', 'Prisma', 'TypeScript']}
            inProgress
          />

          <CardComponent
            title="Portfolio (this website)"
            description="My portfolio website to showcase my websites and skills."
            // imageLink="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            imageAlt="Image of this website"
            githubLink="https://github.com/MarcusNAhlin/portfolio-next"
            livePageLink="#"
            tagList={['NextJS', 'Mantine', 'TypeScript']}
            done
          />
        </Group>
      </Center>
    </>
  );
}
