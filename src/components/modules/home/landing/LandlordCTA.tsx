import { CheckCircle2 } from "lucide-react";
export function LandlordCTA() {
  return (
    <section className="py-20 mb-[50px] bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-block bg-white/10 text-[#f6920a] font-semibold px-4 py-1.5 rounded-full text-sm mb-6 w-max">
                For Property Owners
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Are you a landlord? <br />
                <span className="text-gray-400">List with confidence.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Reach thousands of verified renters, manage applications
                seamlessly, and collect rent online—all in one place.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Zero listing fees for your first property",
                  "Comprehensive background & credit checks",
                  "Automated rent collection & reminders",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-[#f6920a] mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-[#f6920a] hover:bg-[#e08309] text-white px-8 py-4 rounded-xl font-bold transition-colors text-center">
                  List Your Property
                </button>
                <button className="cursor-pointer bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-colors text-center">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image/Mockup Side */}
            <div className="relative hidden lg:block bg-gray-800 p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6920a]/20 to-transparent opacity-50"></div>

              {/* Abstract Dashboard Mockup */}
              <div className="relative h-full w-full bg-white rounded-2xl shadow-2xl p-6 transform translate-x-12 translate-y-12 rotate-2 border border-gray-200">
                <div className="flex items-center justify-between mb-8 border-b pb-4">
                  <div className="w-32 h-6 bg-gray-200 rounded-md"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="h-24 bg-orange-50 rounded-xl border border-orange-100 p-4">
                    <div className="w-8 h-8 bg-orange-200 rounded-full mb-2"></div>
                    <div className="w-16 h-4 bg-orange-200 rounded-md"></div>
                  </div>
                  <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 p-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="h-24 bg-gray-50 rounded-xl border border-gray-100 p-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
                        <div className="w-1/3 h-3 bg-gray-100 rounded-md"></div>
                      </div>
                      <div className="w-20 h-8 bg-green-100 rounded-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
