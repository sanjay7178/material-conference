export function SponsorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src="/placeholder.svg"
              alt={`Sponsor ${i + 1}`}
              className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

