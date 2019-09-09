import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import Navigation from '../components/navigation';
import theme from '../theme';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <div>
            <Head>
              <title>Stronger Bookings | strongerbookings.com</title>
              <link
                href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
              />
            </Head>
            <GlobalStyle />
            <Navigation />
            <Component {...pageProps} key={router.route} />
          </div>
        </ThemeProvider>
      </Container>
    );
  }
}
