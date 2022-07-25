import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import styles from 'styles/Home.module.css'
import Navbar from 'components/Navbar'
import { Button } from '@mantine/core'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        mainLinks={[
          { label: 'Home', link: '/' },
          { label: 'About', link: '/about' },
          { label: 'Contact', link: '/contact' },
        ]}
        userLinks={[
          { label: 'Profile', link: '/profile' },
          { label: 'Settings', link: '/profile/settings' },
          { label: 'Login', link: '/login' },
        ]}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('common:WELCOME_TO')}{' '}
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js!
          </a>
        </h1>
        <Button size="lg" className={styles.mantineButton}>
          <a
            href="https://mantine.dev/pages/getting-started/"
            target="_blank"
            rel="noreferrer"
          >
            {t('common:WITH_MANTINE')}
          </a>
        </Button>
      </main>
    </div>
  )
}

export default Home