import { Group, Flex, Center, Title, Stack } from '@mantine/core';
import Skill from '@/components/Skills/Skill';

export default function skillsComponent() {
  return (
    <>
      <Stack mih="100vh">
        <Center>
          <Title order={2} id="skills" pt="4rem">
            Skills
          </Title>
        </Center>
        <Flex direction="row" justify="center" ml="auto" mr="auto" maw="600px">
          <Group>
            <Flex direction="row" wrap="wrap" justify="center">
              <Skill skillName="JavaScript" skillLevel={4} />
              <Skill skillName="Python" skillLevel={4} />
              <Skill skillName="ReactJS" skillLevel={3} />
              <Skill skillName="ExpressJS" skillLevel={3} />
            </Flex>
          </Group>
        </Flex>
      </Stack>
    </>
  );
}
