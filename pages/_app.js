import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import {Ubuntu, Merriweather, Lora, Poppins} from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['400'],
  subsets: ['latin']
  
})
const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin']
})

const lora = Lora({
  weight: ['400'],
  subsets: ['latin']
})
const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>

    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
    </ThemeProvider>
  )
}
