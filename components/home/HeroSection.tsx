import Link from 'next/link'
import Image from 'next/image'
import content from '../../data/content'
import heroMockUp from '../../public/HeroMockUp.png'

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

const hero = content.home.hero

export default function HeroSection() {
  return (
  //   <main className="lg:relative bg-white dark:bg-black">
  //   <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left lg:flex">
  //     <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
  //       <h1 className="text-3xl tracking-tight font-semibold text-black dark:text-gray-50 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
  //         <span className="block xl:inline">{hero.heading1}</span>
  //       </h1>
  //       <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 dark:text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl">
  //           {hero.heading2}
  //       </p>
  //       <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
  //         <div className="rounded-md shadow">
  //           <Link href={hero.ctaHref}>
  //           <a
  //             className="bg-clip-padding w-full flex items-center justify-center px-4 py-2 text-lg font-medium rounded-md text-white bg-gradient-to-r from-crayola-400 to-crayola-600 hover:from-crayola-500 hover:to-crayola-700 md:py-3 md:text-xl md:px-5"
  //           >
  //             {hero.ctaText}
  //           </a>
  //           </Link>
  //         </div>
          
  //       </div>
  //     </div>
  //     <div className="relative w-full h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
  //     <div
  //       className="absolute top-12 lg:top-0 lg:left-0 inset-0 w-full h-full"
  //     >
  //         <Image
  //           layout="fill"
  //           objectFit="scale-down"
  //           objectPosition="center center"
  //           src={heroMockUp}
  //           alt=""
  //           />
  //     </div>
        
  //   </div>
  //   </div>
    
  // </main>

  <main className="bg-white dark:bg-black overflow-hidden">
  <div className="mx-auto max-w-7xl w-full text-center lg:text-left grid grid-cols-1 lg:grid-cols-2">
    <div className="px-4 w-full sm:px-8 xl:pr-16 col-span-1 pt-16 pb-20 lg:py-48">
      <h1 className="text-3xl tracking-tight font-semibold text-black dark:text-gray-50 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
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
    <div className="w-full h-screen col-span-1 relative p-4">
    <div
      className="w-full h-full absolute top-0 right-0 m-4"
    >
        <Image
          layout="fill"
          objectFit="scale-down"
          objectPosition="center center"
          src={heroMockUp}
          alt=""
          />
    </div>
      
  </div>
  </div>
  
</main>
    )
}
