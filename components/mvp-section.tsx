const mvpPoints = [
  {
    title: "Build What Matters First",
    description: "Focus on the core features needed to validate your idea.",
    icon: "🎯",
  },
  {
    title: "Fast Delivery → Real User Feedback",
    description: "Your first version is live quickly, so you can start learning immediately.",
    icon: "📈",
  },
  {
    title: "Scalable Foundation",
    description: "Built cleanly from day one so the MVP can grow into a full product.",
    icon: "🔧",
  },
]

export default function MVPSection() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">
            MVPs for Early-Stage Founders
          </h2>
          <p className="text-xl text-gray-600 font-light">Launch fast. Test early. Learn quickly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mvpPoints.map((point, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="text-5xl flex justify-center">{point.icon}</div>
              <h3 className="text-lg font-medium text-gray-950">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
