import type { NextPage } from 'next'
import Head from 'next/head'
import LearnController from '../components/learn/LearnController'

const Learn: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Learn | Grated</title>
      </Head>
      <LearnController />
    </div>
  )
}

export default Learn
