import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import FooterComponent from '../components/FooterComponent';

export const metadata = {
  title: 'Portfolio - Marcus A',
  description: 'Marcus A portfolio website',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
          <FooterComponent />
        </MantineProvider>
      </body>
    </html>
  );
}
