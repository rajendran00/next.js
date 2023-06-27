import '../styles/globals.css'
import '../styles/fontFamily.css'
import '../styles/common.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
