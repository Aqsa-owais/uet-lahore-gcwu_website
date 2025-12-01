export default function About() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">About iCodeGuru</h1>

        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            iCodeGuru empowers students to learn practical programming through structured sessions, hands-on assignments, and curated resources. Our mission is to bridge the gap between academic learning and industry requirements.
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Stay consistent with regular, structured learning sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Participate actively in discussions and hands-on exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Use provided links to submit work and revisit lectures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>Build real-world projects and gain practical experience</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose iCodeGuru?</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe in learning by doing. Our platform combines expert instruction, practical assignments, and comprehensive resources to ensure you not only understand concepts but can apply them immediately in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
