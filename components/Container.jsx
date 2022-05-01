import Header from '../components/Header'

export default function Container({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  )
}
