/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import content from '../../data/content'

const contactForm = content.contact.contactForm

export default function ContactForm() {
  return (
    <div className="relative bg-white dark:bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-gray-50 sm:text-3xl">{contactForm.heading}</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-200">
              {contactForm.body}
            </p>
            <dl className="mt-8 text-base text-gray-500 dark:text-gray-200">
              {/* <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div> */}
              <div className="mt-3">
                <dt className="sr-only">{contactForm.emailSr}</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-300" aria-hidden="true" />
                  <span className="ml-3">{contactForm.email}</span>
                </dd>
              </div>
            </dl>
            {/* <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p> */}
          </div>
        </div>
        <div className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  {contactForm.namePlaceholder}
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-50 dark:placeholder-gray-200 dark:bg-gray-700 focus:ring-crayola-500 focus:border-crayola-500 border-gray-300 rounded-md"
                  placeholder={contactForm.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                    {contactForm.emailPlaceholder}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-50 dark:placeholder-gray-200 dark:bg-gray-700 focus:ring-crayola-500 focus:border-crayola-500 border-gray-300 rounded-md"
                  placeholder={contactForm.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                    {contactForm.phonePlaceholder}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-50 dark:placeholder-gray-200 dark:bg-gray-700 focus:ring-crayola-500 focus:border-crayola-500 border-gray-300 rounded-md"
                  placeholder={contactForm.phonePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {contactForm.messagePlaceholder}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-50 dark:placeholder-gray-200 dark:bg-gray-700 focus:ring-crayola-500 focus:border-crayola-500 border border-gray-300 rounded-md"
                  placeholder={contactForm.messagePlaceholder}
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-crayola-600 hover:bg-crayola-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crayola-500"
                >
                  {contactForm.ctaText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
