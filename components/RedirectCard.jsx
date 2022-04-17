import Link from 'next/link'
export default function RedirectCard({ title, description }) {
  return (
    <Link href="/">
      <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">{title} &rarr;</h3>
        <p className="mt-4 text-xl">{description}</p>
      </a>
    </Link>
  )
}
