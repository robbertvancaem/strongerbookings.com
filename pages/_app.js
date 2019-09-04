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
    }, 200);

    Router.events.on('routeChangeStart', () => {
      this.setState({
        loading: true,
      });
    });

    Router.events.on('routeChangeComplete', () => {
      this.setState({
        loading: false,
      });
    });
    Router.events.on('routeChangeError', () => {
      this.setState({
        loading: false,
      });
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
    const {
      Component, pageProps, router, slides,
    } = this.props;

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
            </Head>
            <GlobalStyle />
            <Loader show={this.state.loading} />
            <Navigation />
            <Component {...pageProps} key={router.route} slides={slides} />
          </div>
        </ThemeProvider>
      </Container>
    );
  }
}
