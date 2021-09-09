import type { NextPage } from 'next'
import Head from 'next/head'
import AboutController from '../components/about/AboutController'

const About: NextPage = () => {
  return (
    <div>
      <Head>
      <title>About | Grated</title>
      </Head>
      <AboutController />
    </div>
  )
}

export default About
