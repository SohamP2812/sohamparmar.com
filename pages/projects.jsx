import { getProjectsData } from '../lib/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects({ allProjectsData }) {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-black">
          My Projects 💪
        </h1>
        <div className="">
          <div className="mx-auto grid w-full grid-cols-1 gap-8 py-20 pb-40 md:grid-cols-2">
            {allProjectsData.map(({ id, title, image }) => (
              <Link
                href={{
                  pathname: '/projects/[id]',
                  query: { id: id },
                }}
                key={id}
              >
                <a className="block w-full rounded-2xl shadow-2xl transition duration-500 ease-out hover:scale-105">
                  <div className="relative transform overflow-hidden rounded-2xl">
                    <div className="relative aspect-video w-[600px] max-w-full">
                      <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                    <h1 className="absolute top-5 left-5 rounded-md bg-black bg-opacity-40 px-2 text-xl font-bold text-gray-50">
                      {title}
                    </h1>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allProjectsData = getProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}
