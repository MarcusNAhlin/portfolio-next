import { Center, Title, Stack, Group, Text, Flex } from '@mantine/core';
import Image from 'next/image';
import textAsImage from '@/public/text-as-img.png';

export default function contactComponent() {
  return (
    <>
      <Stack mih="100vh">
        <Center>
          <Title order={2} mt="4rem" id="contact">
            Contact
          </Title>
        </Center>

        <Center>
          <Flex direction="column">
            <Text m="auto" size="lg" fw="600">
              E-Mail me at:
            </Text>
            <Group>
              {/* <Text size="lg" fw="900">
                  &#109;&#97;&#114;&#99;&#117;&#115;
                [dot]
                  &#97;&#104;&#108;&#105;&#110;
                [dot]
                  &#100;&#101;&#118;
                [at]
                  &#103;&#109;&#97;&#105;&#108;
                [dot]
                  &#99;&#111;&#109;
                </Text> */}
              <Image
                src={textAsImage.src}
                alt="Image of text related to header"
                width={733}
                height={68}
                style={{
                  backgroundColor: 'var(--mantine-color-orange-filled)',
                  margin: '1rem',
                  borderRadius: '0.2rem',
                  pointerEvents: 'none',
                }}
              ></Image>
            </Group>
          </Flex>
        </Center>
      </Stack>
    </>
  );
}
