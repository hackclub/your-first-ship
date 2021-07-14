import * as React from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          title="Your First Ship"
          image="https://cloud-qwx0yrr5p-hack-club-bot.vercel.app/0facebook_post_-_1.png"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
