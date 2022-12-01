import { Inter } from '@next/font/google'

import Layout from '../components/layout'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/index.css'
import 'highlight.js/styles/github-dark-dimmed.css'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${inter.className} text-gray-800`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
)
export default App
