'use client';

import { Button, Group, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Group justify="center" mt="xl" pos="absolute" right="2vw" top="1vh">
      <Button size="sm" variant="link" onClick={toggleColorScheme}>
        {computedColorScheme === 'dark' ? <IconMoon /> : <IconSun />}
      </Button>
    </Group>
  );
}
