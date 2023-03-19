import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const blogsDirectory = path.join(process.cwd(), 'data', 'blogs')

export function getBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allBlogsData
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const contentHtml = matterResult.content

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
