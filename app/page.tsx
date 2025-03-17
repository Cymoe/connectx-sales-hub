import { ArrowRight, BarChart3, Layers, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "./components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 border border-gray-700/50 rotate-45 opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-gray-700/50 rotate-12 opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-gray-700/50 -rotate-12 opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-8 md:px-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md" />
          <span className="text-xl font-bold tracking-tight">ConnectX</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#solutions" className="text-gray-300 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="container mx-auto px-8 md:px-16 pt-16 md:pt-24 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm text-purple-300">
                <span className="mr-2">✨</span> Next-generation sales platform
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                The Sales Hub
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">HQ</span>
                <br />
                of Tomorrow
              </h1>

              <p className="text-xl text-gray-300">
                Transform your sales operations with next-generation tools and insights powered by AI and real-time
                analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Book a Demo
                </Button>
              </div>

              <div className="pt-6">
                <p className="text-sm text-gray-400 mb-3">Trusted by innovative teams at</p>
                <div className="flex flex-wrap gap-6 items-center opacity-70">
                  <div className="text-lg font-semibold">acme</div>
                  <div className="text-lg font-semibold">globex</div>
                  <div className="text-lg font-semibold">stark</div>
                  <div className="text-lg font-semibold">wayne</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-purple-400 mb-3" />
                    <h3 className="font-medium mb-1">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-400">Real-time insights and performance metrics</p>
                  </div>
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <Users className="h-8 w-8 text-indigo-400 mb-3" />
                    <h3 className="font-medium mb-1">Team Collaboration</h3>
                    <p className="text-sm text-gray-400">Seamless workflow and communication</p>
                  </div>
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <MessageSquare className="h-8 w-8 text-cyan-400 mb-3" />
                    <h3 className="font-medium mb-1">AI Assistant</h3>
                    <p className="text-sm text-gray-400">Smart suggestions and automation</p>
                  </div>
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <Layers className="h-8 w-8 text-purple-400 mb-3" />
                    <h3 className="font-medium mb-1">Integrations</h3>
                    <p className="text-sm text-gray-400">Connect with your favorite tools</p>
                  </div>
                </div>

                <div className="mt-6 bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">Sales Performance</h3>
                    <span className="text-sm text-green-400">+24%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Previous: 68K</span>
                    <span>Current: 84K</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>New lead captured</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>AI insights ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-8 md:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                98%
              </div>
              <p className="text-gray-400 mt-2">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                2.5x
              </div>
              <p className="text-gray-400 mt-2">Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                500+
              </div>
              <p className="text-gray-400 mt-2">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                35%
              </div>
              <p className="text-gray-400 mt-2">Time Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
