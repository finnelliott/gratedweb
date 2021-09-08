/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import content from '../../data/content'

const features = content.home.features

export default function FeaturesSection() {
  return (
    <div className="relative bg-white dark:bg-gray-900 pt-16 pb-32 overflow-hidden">
        <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {features.feature1.heading}
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
                  {features.feature1.body}
                </p>
                <div className="mt-6">
                <Link href={features.feature1.ctaHref}>
                  <a
                    className="inline-flex items-center text-base font-medium text-crayola-600 hover:text-crayola-700"
                  >
                    {features.feature1.ctaText}
                    <ChevronRightIcon className="h-8 w-8 pl-4" />
                  </a>
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
   
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {features.feature2.heading}
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
                  {features.feature2.body}
                </p>
                <div className="mt-6">
                <Link href={features.feature2.ctaHref}>
                  <a
                    className="inline-flex items-center text-base font-medium text-crayola-600 hover:text-crayola-700"
                  >
                    {features.feature2.ctaText}
                    <ChevronRightIcon className="h-8 w-8 pl-4" />
                  </a>
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
       </div>
  )
}
