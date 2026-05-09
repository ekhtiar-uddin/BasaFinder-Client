import { CalendarCheck, Key, Search } from "lucide-react";
const steps = [
  {
    number: "01",
    title: "Search & Filter",
    description:
      "Find your ideal home using our smart filters and verified listings.",
    icon: Search,
  },
  {
    number: "02",
    title: "Book a Tour",
    description:
      "Schedule an in-person or virtual tour with the landlord instantly.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "Move In",
    description: "Sign the lease online, pay securely, and get your keys.",
    icon: Key,
  },
];
export function HowItWorks() {
  return (
    <section className="my-[50px] py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl mb-3 md:text-[40px] font-extrabold text-center ">
            How RentMode Works
          </h2>
          <p className="md:text-base text-sm text-gray-500 text-center">
            We've simplified the rental process so you can focus on what
            matters: finding a place that feels like home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-8 relative group">
                <div className="absolute inset-0 bg-[#f6920a] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-10"></div>
                <step.icon className="w-10 h-10 text-[#f6920a]" />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-gray-50">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
