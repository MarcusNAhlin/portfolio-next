import { Card, CardSection, Image, Text, Badge, Group, Title, Pill, Flex } from '@mantine/core';
import CardsLinkBtns from './CardLinkBtns';

interface CardComponentProps {
  title: string;
  description: string;
  imageLink?: string;
  imageAlt?: string;
  githubLink?: string;
  livePageLink?: string;
  inProgress?: boolean;
  done?: boolean;
  tagList?: Array<string>;
}

export default function CardComponent({
  title,
  description,
  imageLink = '',
  imageAlt = 'Image on project',
  githubLink = undefined,
  livePageLink = undefined,
  inProgress = false,
  done = false,
  tagList = [],
}: CardComponentProps) {
  return (
    <>
      <Card w="400px" shadow="sm" padding="lg" radius="md" withBorder className="card-hover">
        <CardSection>
          {imageLink && (
            <Image src={imageLink} height={250} width={500} fit="cover" alt={imageAlt} />
          )}
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Title order={3} fw={500}>
            {title}
          </Title>
          <Group justify="center">
            {done && <Badge color="green">Done</Badge>}
            {inProgress && <Badge color="orange">In Progress</Badge>}
          </Group>
        </Group>

        <Text size="md" c="dimmed">
          {description}
        </Text>

        <Flex direction="row" ml="-0.3rem">
          {tagList.map((tag) => (
            <Pill key={tag} mt="sm" mr="4px">
              {tag}
            </Pill>
          ))}
        </Flex>

        <CardsLinkBtns githubLink={githubLink} livePageLink={livePageLink} />
      </Card>
    </>
  );
}
