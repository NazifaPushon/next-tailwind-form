import { ThemeProvider } from 'next-themes'
import { createGlobalStyle } from 'styled-components'
import '../styles/globals.css'
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: rgba(59, 59, 59, 0.993);
  }
`
function MyApp({ Component, pageProps }) {
  return (
      <>
      <GlobalStyle />
      <ThemeProvider attribute="class"><Component {...pageProps} /></ThemeProvider></>
  )
}

export default MyApp
