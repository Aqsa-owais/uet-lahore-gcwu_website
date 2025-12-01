'use client'

import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'

export default function RecordedLectures() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Lecture Recordings</h1>
        <p className="text-lg text-foreground/70 mb-12">
          Access all lecture recordings in one place. Review sessions at your own pace and never miss important concepts.
        </p>

        {/* Main CTA */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 sm:p-12 text-center mb-12">
          <PlayCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">All Recorded Lectures</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Open the recordings sheet organized by week and topic.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
            onClick={() => window.open('https://docs.google.com/spreadsheets/d/1fCNCKrhIOnAJshwFC6wyzb5-qrluAYVgOT6Dey7gxTY/edit?usp=sharing', '_blank')}
          >
            Open Recordings Sheet
          </Button>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">Organized by Week</h3>
            <p className="text-foreground/70">All recordings are organized chronologically by week for easy navigation.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">Review Anytime</h3>
            <p className="text-foreground/70">Access all sessions whenever you need to review concepts or catch up.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">HD Quality</h3>
            <p className="text-foreground/70">All recordings are available in high quality for the best learning experience.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">Downloadable</h3>
            <p className="text-foreground/70">Download lectures for offline viewing whenever you prefer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
