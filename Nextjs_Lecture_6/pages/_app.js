import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from '../src/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
