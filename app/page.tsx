'use client'

import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import Home from '@/components/pages/home'
import SessionDetails from '@/components/pages/session-details'
import Assignments from '@/components/pages/assignments'
import RecordedLectures from '@/components/pages/recorded-lectures'
import About from '@/components/pages/about'
import Footer from '@/components/footer'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<string>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'session-details':
        return <SessionDetails />
      case 'assignments':
        return <Assignments />
      case 'recorded-lectures':
        return <RecordedLectures />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  )
}
