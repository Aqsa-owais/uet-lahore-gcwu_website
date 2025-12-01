import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
            New Course for 2025
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Latest Trends in Technology 2025
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
            iCodeGuru is a dynamic learning platform focused on bridging the gap between academia and the tech industry by offering practical, in-demand, and globally relevant courses. To explore more and become part of our learning community...
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold"
            onClick={() => {
              const sheets = document.querySelector('[data-sheet-link]');
              if (sheets) {
                window.open((sheets as HTMLElement).dataset.sheetLink, '_blank');
              }
            }}
          >
            Join iCodeGuru
          </Button>
          
          {/* Hidden element for sheet link - user will update this */}
          <div data-sheet-link="https://icode.guru/join/" style={{ display: 'none' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Practical Learning',
                description: 'Hands-on sessions focused on real-world applications and industry practices'
              },
              {
                title: 'Expert Guidance',
                description: 'Learn from experienced instructors who bridge academia and industry'
              },
              {
                title: 'Complete Support',
                description: 'Access recordings, assignments, and resources whenever you need them'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
