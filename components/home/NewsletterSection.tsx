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

import Link from 'next/link'
import content from '../../data/content'

const newsletterSignUp = content.home.newsletterSignUp

export default function NewsletterSection() {
    return (
      <div className="bg-white dark:bg-black">
        <div style={{"background": "radial-gradient(50% 50% at 50% 50%, #00E9BF 0%, rgba(0, 233, 191, 0) 100%)"}} className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 bg-black dark:bg-gray-50 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-50 dark:text-black sm:text-3xl">
                {newsletterSignUp.heading}
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-200 dark:text-gray-500">
                {newsletterSignUp.body}
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  {newsletterSignUp.inputPlaceholder}
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 border dark:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-crayola-700 focus:ring-white rounded-md bg-white"
                  placeholder={newsletterSignUp.inputPlaceholder}
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-crayola-500 hover:bg-crayola-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-crayola-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  {newsletterSignUp.ctaText}
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-200 dark:text-gray-500">
                {newsletterSignUp.disclaimer}{' '}
                <Link href={newsletterSignUp.disclaimerLinkHref}>
                <a className="text-white dark:text-gray-700 font-medium underline">
                  {newsletterSignUp.disclaimerLinkText}
                </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  