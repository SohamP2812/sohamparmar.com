import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Image from 'next/image'
import ProjectBody from '../../components/ProjectBody'
export default function Project({ projectData }) {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-black">
          {projectData.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <p className="ml-1 mb-2 text-sm text-gray-700">
            Created by {projectData.createdBy} | {projectData.date}
          </p>
          {projectData.github && (
            <div className="ml-1 mb-2 flex items-center">
              <Image
                alt="GitHub Logo"
                height={24}
                width={24}
                src="/GitHubLogo.png"
                className="rounded-full"
                objectFit="cover"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={projectData.github}
                className="ml-[6px] text-sm"
              >
                GitHub Repository
              </a>
            </div>
          )}
        </div>
        <div className="my-8">
          <div className="relative h-[380px] w-[600px] rounded-2xl border-[1px]">
            <Image
              src={projectData.image}
              alt={projectData.title}
              className="rounded-2xl"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <ProjectBody content={projectData.contentHtml} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}
