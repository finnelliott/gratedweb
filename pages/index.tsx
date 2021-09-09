import type { NextPage } from 'next'
import Head from 'next/head'
import HomeController from '../components/home/HomeController'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Home | Grated</title>
      </Head>
      <HomeController />
    </div>
  )
}

export default Home
