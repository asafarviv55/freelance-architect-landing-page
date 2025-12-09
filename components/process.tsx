const steps = [
  {
    number: "01",
    title: "Discovery & MVP Planning",
    description:
      "Clarifying product goals, defining the core features, and identifying what's essential for the first launch.",
  },
  {
    number: "02",
    title: "System Design for Fast Validation",
    description: "Architecture focused on speed, clarity, and the ability to evolve as the product scales.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description: "Building your product with clean, maintainable code and thoughtful technical decisions.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description: "Comprehensive testing, optimization, and deployment to production for immediate user feedback.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Go-live support, initial monitoring, and guidance for gathering user feedback and iterating.",
  },
]

export default function Process() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">My Process</h2>
          <p className="text-lg text-gray-600 font-light">From concept to production</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="text-3xl font-light text-gray-300">{step.number}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-medium text-gray-950 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
