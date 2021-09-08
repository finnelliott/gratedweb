import Link from 'next/link'
import content from '../../data/content'

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

const hero = content.home.hero

export default function HeroSection() {
  return (
    <main className="lg:relative bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 className="text-3xl tracking-tight font-semibold text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
          <span className="block xl:inline">{hero.heading1}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 dark:text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl">
            {hero.heading2}
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href={hero.ctaHref}>
            <a
              className="bg-clip-padding w-full flex items-center justify-center px-4 py-2 text-lg font-medium rounded-md text-white bg-gradient-to-r from-crayola-400 to-crayola-600 hover:from-crayola-500 hover:to-crayola-700 md:py-3 md:text-xl md:px-5"
            >
              {hero.ctaText}
            </a>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        alt=""
      />
    </div>
  </main>

    )
}
