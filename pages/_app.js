import App from 'next/app';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Grommet theme={hpe}>
        <Component {...pageProps} />
      </Grommet>
    )
  }
}
