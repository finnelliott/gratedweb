/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  MoonIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SunIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

import content from '../../data/content'

const mainNavigation = content.shared.mainNavigation



function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

function changeTheme() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // Whenever the user explicitly chooses dark mode
        document.documentElement.classList.add('dark')
    } else {
        // Whenever the user explicitly chooses light mode
        document.documentElement.classList.remove('dark')
    }
    console.log(JSON.stringify(localStorage.theme))
}

export default function MainNavigation() {
  return (
    <Popover className="relative bg-white dark:bg-black">
      <div className="flex justify-between md:justify-start items-center px-4 py-6 sm:px-6 md:space-x-10 max-w-7xl mx-auto">
        <div>
          <Link href="/">
          <a className="flex">
            <span className="sr-only">Grated</span>
            <svg className="h-4 w-auto sm:h-6 fill-current text-black dark:text-gray-50" width="139" height="25" viewBox="0 0 139 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4182 11.46V16.26H17.2182C17.0982 18.36 15.4782 19.26 11.8782 19.26C7.16823 19.26 6.65823 18.57 6.65823 12.3C6.65823 6.02999 7.16823 5.33999 11.8782 5.33999C16.5882 5.33999 17.0982 5.69999 17.0382 8.93999H23.6382C23.6982 1.97999 21.3582 0.23999 11.8782 0.23999C2.42823 0.23999 0.0582275 2.63999 0.0582275 12.3C0.0582275 21.96 2.42823 24.36 11.8782 24.36C15.2682 24.36 17.1882 23.1 17.9382 20.25V24H23.6382V11.46H12.4182Z"/>
            <path d="M39.7316 0.599991H26.3516V24H32.6516V15.75H37.3316C40.6016 15.75 40.9316 16.02 40.9316 18.6V24H47.5316V18.24C47.5316 15.24 45.9416 13.86 42.8216 13.53C46.0916 13.08 47.5316 11.25 47.5316 7.37999C47.5316 1.94999 45.9716 0.599991 39.7316 0.599991ZM32.6516 10.95V5.69999H38.1116C40.9316 5.69999 41.2316 5.96999 41.2316 8.27999C41.2316 10.68 40.9316 10.95 38.1116 10.95H32.6516Z"/>
            <path d="M67.0285 0.599991H56.5885L48.8785 24H55.6585L57.0685 19.44H66.0685L67.3285 24H74.5285L67.0285 0.599991ZM58.6885 14.34L61.5385 5.69999H61.7185L64.5085 14.34H58.6885Z"/>
            <path d="M79.0173 24H85.3173V5.99999H92.5473V0.599991H71.8473V5.99999H79.0173V24Z"/>
            <path d="M94.2031 0.599991V24H113.463V18.6H100.503V14.7H112.203V9.59999H100.503V5.99999H113.403V0.599991H94.2031Z"/>
            <path d="M122.476 5.99999H127.606C131.866 5.99999 132.346 6.62999 132.346 12.3C132.346 17.97 131.866 18.6 127.606 18.6H122.476L122.446 12.3L122.476 5.99999ZM116.176 24H128.266C136.816 24 138.946 21.66 138.946 12.3C138.946 2.93999 136.816 0.599991 128.266 0.599991H116.176V24Z"/>
            </svg>

          </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-crayola-400 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:bg-gray-800">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
          <nav className="flex space-x-10 justify-end">
            {mainNavigation.pageLinks.map((item) => (
              <Link href={item.linkHref} key={item.linkText} >
                <a
                  className="text-base font-medium text-gray-500 hover:text-black dark:text-gray-200 dark:hover:text-gray-400">
              {item.linkText}
            </a>
            </Link>
            ))}
          </nav>
          <div className="flex-none items-center md:ml-12">
            <Link href={mainNavigation.signUp.linkHref}>
              <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
                {mainNavigation.signUp.linkText}
              </a>
            </Link>
          </div>
        </div>
        <button className="hidden md:block" onClick={() => changeTheme()}>
        {/* {typeof localStorage !== 'undefined' && localStorage?.theme === 'light' ? 
        <MoonIcon className="h-6 w-6 hidden md:block text-black stroke-current dark:text-gray-50" />
        : */}
        <SunIcon className="h-6 w-6 text-black stroke-current dark:text-gray-50" />
        {/* } */}
        </button>
        
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:divide-gray-700 dark:bg-black">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <button onClick={() => changeTheme()}>
                    <SunIcon className="h-6 w-6  dark:text-white text-black" />
                </button>
                <div>
                    <span className="sr-only">Grated</span>
                    <svg className="h-4 w-auto sm:h-6 fill-current text-black dark:text-gray-50" width="139" height="25" viewBox="0 0 139 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4182 11.46V16.26H17.2182C17.0982 18.36 15.4782 19.26 11.8782 19.26C7.16823 19.26 6.65823 18.57 6.65823 12.3C6.65823 6.02999 7.16823 5.33999 11.8782 5.33999C16.5882 5.33999 17.0982 5.69999 17.0382 8.93999H23.6382C23.6982 1.97999 21.3582 0.23999 11.8782 0.23999C2.42823 0.23999 0.0582275 2.63999 0.0582275 12.3C0.0582275 21.96 2.42823 24.36 11.8782 24.36C15.2682 24.36 17.1882 23.1 17.9382 20.25V24H23.6382V11.46H12.4182Z"/>
                    <path d="M39.7316 0.599991H26.3516V24H32.6516V15.75H37.3316C40.6016 15.75 40.9316 16.02 40.9316 18.6V24H47.5316V18.24C47.5316 15.24 45.9416 13.86 42.8216 13.53C46.0916 13.08 47.5316 11.25 47.5316 7.37999C47.5316 1.94999 45.9716 0.599991 39.7316 0.599991ZM32.6516 10.95V5.69999H38.1116C40.9316 5.69999 41.2316 5.96999 41.2316 8.27999C41.2316 10.68 40.9316 10.95 38.1116 10.95H32.6516Z"/>
                    <path d="M67.0285 0.599991H56.5885L48.8785 24H55.6585L57.0685 19.44H66.0685L67.3285 24H74.5285L67.0285 0.599991ZM58.6885 14.34L61.5385 5.69999H61.7185L64.5085 14.34H58.6885Z"/>
                    <path d="M79.0173 24H85.3173V5.99999H92.5473V0.599991H71.8473V5.99999H79.0173V24Z"/>
                    <path d="M94.2031 0.599991V24H113.463V18.6H100.503V14.7H112.203V9.59999H100.503V5.99999H113.403V0.599991H94.2031Z"/>
                    <path d="M122.476 5.99999H127.606C131.866 5.99999 132.346 6.62999 132.346 12.3C132.346 17.97 131.866 18.6 127.606 18.6H122.476L122.446 12.3L122.476 5.99999ZM116.176 24H128.266C136.816 24 138.946 21.66 138.946 12.3C138.946 2.93999 136.816 0.599991 128.266 0.599991H116.176V24Z"/>
                    </svg>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-crayola-400 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:bg-gray-800">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="flex flex-col">
                {mainNavigation.pageLinks.map((item) => (
                <Link 
                    href={item.linkHref}
                    key={item.linkText} 
                >
                  <a
                    className="text-base font-medium text-black hover:text-gray-700 my-2 dark:text-gray-200 dark:hover:text-gray-400"
                  >
                    {item.linkText}
                  </a>
                </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link href={mainNavigation.signUp.linkHref}>
                <a
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 dark:text-black dark:bg-white dark:hover:bg-gray-100"
                >
                  {mainNavigation.signUp.linkText}
                </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
