import { getBlogsData } from '../lib/blogs'
import Image from 'next/image'
import Link from 'next/link'

export default function Blogs({ allBlogsData }) {
  return (
    <div className="flex min-h-screen flex-col items-center pt-8 pb-20">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">My Thoughts</h1>

        <div className="flex w-full flex-col gap-4 py-4">
          {allBlogsData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ id, title, image, date }) => (
              <Link
                href={{
                  pathname: '/blogs/[id]',
                  query: { id: id },
                }}
                key={id}
              >
                <a className="h-28 w-full rounded-2xl bg-[#272727] shadow-2xl transition duration-500 ease-out hover:scale-105 dark:bg-[#4c4c4c] dark:shadow-zinc-800">
                  <div className="h-full w-full transform overflow-hidden rounded-2xl">
                    <div className="align-center flex h-full flex-row items-center p-2">
                      <div className="h-full overflow-hidden rounded-2xl">
                        <div className="relative aspect-video h-full bg-white">
                          <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            priority
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="px-2 text-2xl font-bold text-gray-50">
                          {title}
                        </h1>
                        <p className="px-2 text-gray-400 dark:text-gray-300">
                          {date}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allBlogsData = getBlogsData()
  return {
    props: {
      allBlogsData,
    },
  }
}
