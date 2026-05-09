import { motion } from "framer-motion";
import {
  DollarSign,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Take the first step toward your <br className="hidden md:block" />
            <span className="text-[#f6920a]">dream apartment.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Browse our millions of rental homes that perfectly match your
            lifestyle and personal preferences.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="w-full max-w-5xl bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2 mb-12"
        >
          <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="City, neighborhood, or zip"
              className="w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 font-medium"
            />
          </div>

          <div className="flex-1 flex items-center px-4 py-3 w-full border-b md:border-b-0 md:border-r border-gray-100">
            <Home className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <select className="w-full bg-transparent border-none outline-none text-gray-900 font-medium appearance-none cursor-pointer">
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="studio">Studio</option>
            </select>
          </div>

          <div className="flex-1 flex items-center px-4 py-3 w-full">
            <DollarSign className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <select className="w-full bg-transparent border-none outline-none text-gray-900 font-medium appearance-none cursor-pointer">
              <option value="">Price Range</option>
              <option value="0-1000">Under $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="3000+">$3,000+</option>
            </select>
          </div>

          <button className="w-full md:w-auto bg-[#f6920a] hover:bg-[#e08309] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg shadow-orange-500/30">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-300 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-[#f6920a]" />
            <span>10k+ Active Listings</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600 my-auto"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#f6920a]" />
            <span>Verified Landlords</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600 my-auto"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#f6920a]" />
            <span>Zero Hidden Fees</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
