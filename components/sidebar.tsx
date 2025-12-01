'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'session-details', label: 'Session Details' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'recorded-lectures', label: 'Recorded Lectures' },
    { id: 'about', label: 'About' },
  ]

  const handleMenuClick = (page: string) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-sidebar-foreground"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } z-40 flex flex-col border-r border-sidebar-border`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="mb-2">
            <Image
              src="/images/icode-logo.png"
              alt="iCodeGuru Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
          <p className="text-xs text-sidebar-foreground/70">Latest Trends in Technology</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/20'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Info */}
        <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/70">
          <p>Join us on our learning journey</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
