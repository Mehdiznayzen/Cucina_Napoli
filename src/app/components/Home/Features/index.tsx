'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Restaurant {
  name: string
  address: string
  phone: string
  image: string
}

const Features = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRestaurants(data.Featuresdata2)
      } catch (error) {
        console.error('Erreur de chargement des restaurants :', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-600 text-lg font-semibold uppercase tracking-widest">
            Nos Restaurants
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Une expérience gourmande inspirée de l’Italie.
          </h2>
        </div>

        <div
          className={`grid gap-10 ${
            restaurants.length > 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}>
          {loading
            ? Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-green-100 h-64 rounded-2xl"
                ></div>
              ))
            : restaurants.map((r, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                  <div className="relative h-48 w-full">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-green-700">
                      {r.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{r.address}</p>
                    <p className="text-gray-500 mt-1 font-medium">
                      📞 {r.phone}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features
