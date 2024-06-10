import { Group, /*Button,*/ Center } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

export default function FooterComponent() {
  return (
    <>
      <footer>
        <Group justify="center" gap="sm" grow>
          {/* <Button variant="default">First</Button>
        <Button variant="default">Second</Button> */}
          <Center>
            <ColorSchemeToggle margin-0 />
          </Center>
        </Group>
      </footer>
    </>
  );
}
