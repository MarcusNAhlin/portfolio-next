import { Title, Flex, Button } from '@mantine/core';

export default function LandingPageScreen() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Flex align="center" justify="center" direction="column" pt="30vh">
        <Title order={1}>
          Hello,
          <br />
          I&apos;m <span style={{ color: 'var(--mantine-color-orange-filled)' }}> Marcus A</span>
          <br />
          &lt;Web developer&gt;
        </Title>
        <Flex gap="0.1rem" direction="column">
          <Flex gap="1rem" direction="row">
            <Button component="a" href="#projects" mt="lg">
              View Projects
            </Button>
            <Button component="a" href="#skills" mt="lg">
              View Skills
            </Button>
          </Flex>
          <Button component="a" href="#contact" mt="lg">
            Contact Me
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
