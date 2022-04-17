import Image from 'next/image'
import RedirectCard from '../components/RedirectCard'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <main className="mx-auto mt-16 flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="flex max-w-2xl flex-col-reverse items-center pb-10 text-left sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl">
              Soham Parmar
            </h1>
            <h2 className="mb-4 text-gray-700">
              Computer Engineering Student at the{' '}
              <a
                href="https://uwaterloo.ca"
                target="_blank"
                className="font-semibold hover:underline"
              >
                University of Waterloo
              </a>
            </h2>
            <p className="text-gray-600">
              I am an enthusiastic advocate for the digitalization of our world,
              and an even stronger advocate for the widespread understanding of
              the digital devices running our world.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[300px]">
            <Image
              alt="Soham Parmar"
              height={300}
              width={300}
              src="/SohamParmar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="mt-6 mb-20 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <RedirectCard
            title="This Website"
            description="Find in-depth information about this website and the technologies used to build it."
          />
          <RedirectCard
            title="About Me"
            description="Find out some more about me - such as my background, passions, hobbies, and more."
          />
          <RedirectCard
            title="Projects"
            description="Take a look at some of the projects I have made as well as some details about how they were made."
          />
          <RedirectCard
            title="Links"
            description="Some more links you can check out to find me on other platforms."
          />
        </div>
      </main>
    </div>
  )
}
