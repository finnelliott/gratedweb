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

const newsletterSignUp = content.signUp.newsletterSignUpForm


export default function NewsletterSignUpForm() {

    
    return (
      <div className="bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:pt-32 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-semibold text-black dark:text-gray-50 sm:text-4xl text-center mx-auto">{newsletterSignUp.heading}</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-200 text-center mx-auto">
              {newsletterSignUp.body}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:pb-32 pt-8 lg:px-8 sm:flex lg:items-center">
          <div className="justify-center mx-auto">
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
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-crayola-500 focus:border-crayola-500 sm:max-w-xs rounded-md dark:placeholder-gray-200 dark:bg-gray-700"
                placeholder={newsletterSignUp.inputPlaceholder}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-crayola-600 hover:bg-crayola-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crayola-500"
                >
                  {newsletterSignUp.ctaText}
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-200">
              {newsletterSignUp.disclaimer}{' '}
              <Link href={newsletterSignUp.disclaimerLinkHref}>
              <a className="font-medium underline">
                {newsletterSignUp.disclaimerLinkText}
              </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
  