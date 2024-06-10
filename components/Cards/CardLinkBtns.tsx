'use client';

import { Button, Group } from '@mantine/core';
import { IconBrandGithub, IconDeviceDesktop } from '@tabler/icons-react';

interface CardsLinkBtnsProps {
  githubLink?: string;
  livePageLink?: string;
}

export default function CardsLinkBtns({ githubLink, livePageLink }: CardsLinkBtnsProps) {
  return (
    <>
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
    </>
  );
}
