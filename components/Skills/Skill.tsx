import { Rating, Title, Flex } from '@mantine/core';

interface SkillProps {
  skillName: string;
  skillLevel: number;
}

export default function skill({ skillName, skillLevel }: SkillProps) {
  return (
    <>
      <Flex direction="column" align="center" ml="1.5rem" mr="1.5rem" mb="2rem">
        <Title order={3}>{skillName}</Title>
        <Rating defaultValue={skillLevel} fractions={2} size="lg" readOnly />
      </Flex>
    </>
  );
}
