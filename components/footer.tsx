'use client'

import { Button } from '@/components/ui/button'
import { MessageSquare, Facebook, Youtube, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/icode-logo.png"
                alt="iCodeGuru Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">iCodeGuru</span>
            </div>
            <p className="text-sm opacity-80">Empowering the next generation of developers</p>
          </div>

          {/* Quick Links */}
          <div>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/iCodeguru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@iCodeGuru0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/icode-guru/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-center text-sm opacity-70">
            © 2025 iCodeGuru. All rights reserved. | Bridging Academia and Industry
          </p>
        </div>

          {/* Contact & Feedback */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 w-full justify-center bg-secondary-foreground/10 border-secondary-foreground/30 hover:bg-secondary-foreground/20 text-secondary-foreground mb-3"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSessmxG9HB18z6cVLgLYoJQcDazMyoPyb5W_BFF6ByF-IidhA/viewform', '_blank')}
            >
              <MessageSquare size={16} />
              Share Feedback
            </Button>
          </div>
        </div>

        
      </div>
    </footer>
  )
}
