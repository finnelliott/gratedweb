import type { NextPage } from 'next'
import Head from 'next/head'
import SignUpController from '../components/sign-up/SignUpController'

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Sign Up | Grated</title>
      </Head>
      <SignUpController />
    </div>
  )
}

export default SignUp
