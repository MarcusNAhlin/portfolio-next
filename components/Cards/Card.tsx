'use client';

import { Card, Image, Text, Badge, Button, Group, Title, Pill, Flex } from '@mantine/core';
import { IconBrandGithub, IconDeviceDesktop } from '@tabler/icons-react';

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
        <Card.Section>
          {imageLink && (
            <Image src={imageLink} height={250} width={500} fit="cover" alt={imageAlt} />
          )}
        </Card.Section>

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

        <Group justify="center" gap="sm" grow>
          {githubLink ? (
            <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              component="a"
              href={githubLink}
              target="_blank"
            >
              <IconBrandGithub size="1.5rem" stroke="1.5" style={{ margin: 5 }} />
              On GitHub
            </Button>
          ) : (
            <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              data-disabled
              onClick={(event) => event.preventDefault()}
            >
              <IconBrandGithub size="1.5rem" stroke="1.5" style={{ margin: 5 }} />
              On GitHub
            </Button>
          )}

          {livePageLink ? (
            <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              component="a"
              href={livePageLink}
              target="_blank"
            >
              <IconDeviceDesktop size="1.5rem" stroke="1.5" style={{ margin: 5 }} />
              Live Page
            </Button>
          ) : (
            <Button
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              data-disabled
              onClick={(event) => event.preventDefault()}
            >
              <IconDeviceDesktop size="1.5rem" stroke="1.5" style={{ margin: 5 }} />
              Live Page
            </Button>
          )}
        </Group>
      </Card>
    </>
  );
}
