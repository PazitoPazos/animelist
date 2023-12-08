import CardList from '@/Components/CardList'
import Filters from '@/Components/Filters'
import Header from '@/Components/Header'
import { Head } from '@inertiajs/react'

export default function Directory() {
  return (
    <>
      <Head title="Directory" />
      <div className="grid h-screen">
        <Header />

        <main className="h-full">
          <Filters />
          <CardList />
        </main>

        <footer className="flex items-center justify-center bg-slate-200">
          <span>Made By Pazos</span>
        </footer>
      </div>
    </>
  )
}
