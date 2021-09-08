/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import content from '../../data/content'

const features = content.home.features
/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export default function FeaturesSection() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden dark:bg-gray-900">
        <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {features.feature1.heading}
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
                  {features.feature1.body}
                </p>
                <div className="mt-6">
                <Link href={features.feature1.ctaHref}>
                <a
                    className="inline-flex py-2 text-lg font-medium text-crayola-600 hover:text-crayola-700 dark:text-crayola-500 dark:hover:text-crayola-300 items-center"
                  >
                    {features.feature1.ctaText}
                    <ChevronRightIcon className="h-6 w-6 ml-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 h-full">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full h-full flex items-center">
                <div className="relative w-full h-screen max-h-96 rounded-xl overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-full lg:max-w-none">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right top"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {features.feature2.heading}
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
                  {features.feature2.body}
                </p>
                <div className="mt-6">
                  <Link href={features.feature2.ctaHref}>
                  <a
                    className="inline-flex py-2 text-lg font-medium text-crayola-600 hover:text-crayola-700 dark:text-crayola-500 dark:hover:text-crayola-300 items-center"
                  >
                    {features.feature2.ctaText}
                    <ChevronRightIcon className="h-6 w-6 ml-4" />
                  </a>
                  </Link>
                </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 h-full">
            <div className="pl-4 -mr-48 sm:pr-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full h-full flex items-center">
                <div className="relative w-full h-screen max-h-96 rounded-xl overflow-hidden shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-full lg:max-w-none">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left top"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
