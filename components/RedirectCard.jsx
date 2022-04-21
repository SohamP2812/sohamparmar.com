import Link from 'next/link'
export default function RedirectCard({ title, description, href }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="flex">
      <Link href={href}>
        <a className="mt-6 min-h-[200px] w-96 transform rounded-xl bg-gradient-to-r from-[#e5e7eb] to-[#e5e7eb] p-1 text-left text-black transition-all hover:scale-[1.02] hover:from-[#d4b5f6] hover:to-[#6d7bf6] hover:no-underline">
          <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4">
            <div className="flex flex-col justify-between md:flex-col">
              <h3 className="m-0 text-2xl font-bold">{title} &rarr;</h3>
              <p className="mb-0 mt-4 text-xl">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
