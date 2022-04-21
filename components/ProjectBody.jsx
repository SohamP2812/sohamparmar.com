import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import unwrapImages from 'remark-unwrap-images'

const components = {
  img: (image) => {
    const defaultSize = [4, 3] // Aspect ratio of a default landscape photo
    const [width, height] =
      typeof image.title === 'string' && /^\d*x\d*$/.test(image.title)
        ? image.title.split('x').map((n) => parseInt(n))
        : defaultSize
    return (
      <div className="my-8 rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
    )
  },
}

export default function ProjectBody({ content }) {
  return (
    <ReactMarkdown
      plugins={unwrapImages}
      children={content}
      components={components}
    />
  )
}
