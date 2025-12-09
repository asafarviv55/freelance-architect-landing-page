export default function Hero() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-950">
            Senior Software Architect
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-light">Building fast, reliable systems that scale</p>
        </div>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          I specialize in building fast, reliable MVPs for early-stage founders and startups — helping them validate
          ideas, launch quickly, and scale efficiently. From concept to production, I turn raw ideas into fully
          functional systems.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="https://wa.me/972546522485?text=Hi%2C%20I%20found%20you%20through%20your%20Freelance%20Architect%20website%20and%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-950 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Let's Talk
          </a>
          <button className="px-8 py-3 border border-gray-300 text-gray-950 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors">
            View My Work
          </button>
        </div>
      </div>
    </section>
  )
}
