import { Clock, Calendar, Video, AlertCircle } from 'lucide-react'

export default function SessionDetails() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-12">Session Details</h1>

        <div className="space-y-8">
          {/* Timing */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Timing</h2>
              <p className="text-lg text-foreground/80">7:00 PM – 9:00 PM (PKT)</p>
            </div>
          </div>

          {/* Days */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Days</h2>
              <p className="text-lg text-foreground/80">Monday to Friday</p>
            </div>
          </div>

          {/* Mode */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Mode</h2>
              <p className="text-lg text-foreground/80">Online Live Sessions</p>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Important Note</h3>
              <p className="text-foreground/80">
                Make sure to join on time. Attendance and participation are important for your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
