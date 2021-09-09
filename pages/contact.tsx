import type { NextPage } from 'next'
import { Head } from 'next/document'
import ContactController from '../components/contact/ContactController'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Contact | Grated</title>
      </Head>
      <ContactController />
    </div>
  )
}

export default Contact
