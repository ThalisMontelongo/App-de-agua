import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">⚡</span>
            </div>
            <span className="text-gray-600">Innovative Developer Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
            Leading Developers<br />
            Creating the Future of<br />
            Technology
          </h1>
          
          <p className="text-gray-600 max-w-xl mb-12">
            At the helm of innovation, our team of leading developers is dedicated to shaping the future of technology through cutting-edge solutions.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-600 text-sm">💡</span>
              </div>
              <div>
                <h3 className="font-medium">Innovation at the Forefront</h3>
                <p className="text-sm text-gray-500">Our developers are dedicated to shaping the future of technology.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search your technology"
                className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none"
              />
              <button className="bg-[#4A332D] text-white rounded-xl px-6 py-3 hover:bg-[#5A433D] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl p-8 aspect-[4/3] flex flex-col justify-end">
            <button className="bg-[#4A332D] text-white rounded-xl px-6 py-3 w-fit hover:bg-[#5A433D] transition-colors">
              View Our Work
            </button>
          </div>

          {/* Right Cards Stack */}
          <div className="space-y-6">
            {/* Top Card */}
            <div className="bg-gray-100 rounded-3xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-4 py-1 bg-white/80 rounded-full text-sm mb-2">Try Free</span>
                  <h3 className="text-xl font-medium">Developer Excellence Unleashed</h3>
                </div>
                <span className="text-sm text-gray-500">01</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                In a world where innovation drives success, our team of expert developers stands at the forefront.
              </p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                See More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-medium">Lyssa Gelyeonna</h3>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-[#4A332D] text-white rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-2xl font-medium">4,5</span>
                <span className="text-sm text-gray-300">/5</span>
              </div>
              <h3 className="font-medium mb-4">Explore Our TrustScore & Customer Reviews</h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <span className="text-sm flex items-center ml-2">100k+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;