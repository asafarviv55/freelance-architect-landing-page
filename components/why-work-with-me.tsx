const reasons = [
  "Proven track record of launching successful products at scale",
  "Deep expertise in system architecture and technical decision-making",
  "Experienced in guiding founders through the entire journey: MVP planning, product decisions, architecture, and launch.",
  "Focus on building production-ready code, not prototypes",
  "Available for ongoing technical guidance and mentorship",
  "Clear communication and collaborative problem-solving approach",
]

export default function WhyWorkWithMe() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">Why Work With Me</h2>
          <p className="text-lg text-gray-600 font-light">What sets my approach apart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-950 text-white text-sm font-medium">
                  ✓
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
