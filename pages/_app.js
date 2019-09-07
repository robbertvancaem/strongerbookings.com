import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';

import Loader from '../components/loader';
import GlobalStyle from '../components/global-style';
import Navigation from '../components/navigation';
import theme from '../theme';

export default class MyApp extends App {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 500);

    Router.events.on('routeChangeStart', () => {
      this.setState({
        loading: true,
      });
    });

    Router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 500);
    });
  }

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
            <Loader show={this.state.loading} />
            <Navigation />
            <Component {...pageProps} key={router.route} />
          </div>
        </ThemeProvider>
      </Container>
    );
  }
}
