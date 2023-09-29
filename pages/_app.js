import { NewsletterProvider } from '@/contexts/NewsletterContext';
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import {Ubuntu, Merriweather, Lora, Poppins} from 'next/font/google'
import { SessionProvider } from 'next-auth/react';


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

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <NewsletterProvider>
        <AuthProvider>
        {/* <ThemeProvider attribute='class' defaultTheme='dark'> */}
            <main className={poppins.className}>
              <Component {...pageProps} />
            </main>
        {/* </ThemeProvider> */}
        </AuthProvider>
      </NewsletterProvider>
    </SessionProvider>
  )
}
