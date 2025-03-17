import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/geometric-bg.jpg"
          alt="Geometric Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold tracking-tight">ConnectX</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 text-white hover:text-gray-200 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition">
              Sign Up
            </button>
          </div>
        </nav>

        <div className="mt-32 text-center">
          <h2 className="text-white text-5xl sm:text-6xl font-bold leading-tight">
            The Sales Hub HQ<br />of Tomorrow
          </h2>
          <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto">
            Transform your sales operations with next-generation tools and insights
          </p>
        </div>
      </div>
    </div>
  )
} 