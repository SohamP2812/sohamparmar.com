import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
export default function Container({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  )
}
