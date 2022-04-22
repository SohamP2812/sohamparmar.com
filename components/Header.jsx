import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Popover className="sticky top-0 z-50 bg-white opacity-90 backdrop-blur-md dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 dark:border-gray-700 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                width="50"
                height="50"
                src="/SohamParmarLogo.png"
                alt="Soham Parmar"
                className="brightness-0 hover:cursor-pointer dark:invert"
                priority
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-gray-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                About
              </a>
            </Link>
            <Link href="/projects">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                Projects
              </a>
            </Link>
          </Popover.Group>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="hidden h-10 w-10 rounded-xl border-gray-400 bg-gray-200 hover:border-2 focus:outline-none dark:border-gray-300 dark:bg-gray-700 md:inline md:flex"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="m-auto h-4 w-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
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
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg dark:bg-neutral-900">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    width="50"
                    height="50"
                    src="/SohamParmarLogo.png"
                    alt="Soham Parmar"
                    className="brightness-0 dark:invert"
                    priority
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <Link href="/">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                    About
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400">
                    Projects
                  </a>
                </Link>
              </div>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="h-10 w-10 rounded-xl border-gray-400 bg-gray-200 hover:border-2 focus:outline-none dark:border-gray-300 dark:bg-gray-700 md:inline"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-yellow-500 dark:text-yellow-500"
                  >
                    {theme === 'dark' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
