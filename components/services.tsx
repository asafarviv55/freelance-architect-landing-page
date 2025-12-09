const services = [
  {
    title: "MVP Development for Founders & Startups",
    description:
      "Rapid development of production-ready MVPs — from idea, to architecture, to a working product users can test.",
    icon: "⚡",
  },
  {
    title: "SaaS Platform Development",
    description:
      "End-to-end development of scalable SaaS platforms with authentication, multi-tenancy, and robust business logic.",
    icon: "🚀",
  },
  {
    title: "AI Integrations & Automation",
    description:
      "Seamless integration of AI models and automation workflows to enhance product capabilities and user experience.",
    icon: "🤖",
  },
  {
    title: "Backend Engineering",
    description: "High-performance APIs, databases, and microservices designed for reliability, security, and scale.",
    icon: "⚙️",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure design, CI/CD pipelines, monitoring, and deployment automation across major cloud providers.",
    icon: "☁️",
  },
  {
    title: "CTO-Level System Architecture",
    description: "Strategic architecture decisions, system design, technical roadmaps, and guidance for growing teams.",
    icon: "🏛️",
  },
]

export default function Services() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 mb-4">Services</h2>
          <p className="text-lg text-gray-600 font-light">Expertise across the full technology stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-950 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
