import { getAllBlogIds, getBlogData } from '../../lib/blogs'
import Image from 'next/image'
import MdxBody from '../../components/MdxBody'

export default function Blog({ blogData }) {
  return (
    <div className="flex min-h-screen flex-col items-center pt-8 pb-20">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          {blogData.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <p className="ml-1 mb-2 text-sm text-gray-700 dark:text-gray-500">
            By {blogData.createdBy} | {blogData.date}
          </p>
        </div>
        <div className="my-8 max-w-full">
          <div className="relative aspect-video w-[600px] max-w-full rounded-2xl border-[1px] bg-white">
            <Image
              src={blogData.image}
              alt={blogData.title}
              className="rounded-2xl"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <MdxBody content={blogData.contentHtml} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id)
  return {
    props: {
      blogData,
    },
  }
}
