import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/pricingData";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="bg-white  pb-20 ">
      <div className="bg-secondary-400 h-[35vh] flex items-center justify-center">
        <div className="space-y-5">
          <h1 className="text-6xl font-bold text-center">Plans & Pricing</h1>
          <p className="text-xl text-center font-semibold">
            Why pay more than $200 a month for Property Management software?
          </p>
          <p className="text-sm font-medium text-center">
            Our maximum is their minimum — unlimited units for unlimited value.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <h1 className=" text-center  font-semibold my-10">Yearly Plans</h1>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 lg:w-[950px] md:w-[730px] mx-auto customWidth">
          {pricingPlans?.map((plan, index) => (
            <div
              key={index}
              className={`pb-10 transform  transition-all duration-150 shadow-xl p-4 border-t-4  rounded-sm ${
                plan?.id === "pro"
                  ? "h-[105%] [&_*]:text-white -translate-y-3 md:hover:-translate-y-5 bg-[#0e2a30] border-secondary-600"
                  : "md:hover:-translate-y-1 border-black"
              }`}
            >
              <div className="">
                <div
                  className={`flex justify-between ${
                    plan?.id === "pro" ? "mt-4" : ""
                  }  mt-1 `}
                >
                  <h3 className={`font-semibold  text-xl`}>{plan?.title}</h3>
                  {plan?.id === "pro" && (
                    <span className="addFlexItems h-[22px]  px-1 rounded bg-[#41a541] text-[12px] font-semibold ">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-primary-700 font-semibold  ">
                  {plan?.tagline}
                </p>
                <h1 className="mt-8 text-3xl font-semibold">
                  $16 <span className="text-lg">.50</span>/
                  <span className="font-semibold">m</span>
                </h1>
                <p className="mt-1 text-sm text-primary-600">
                  ${plan?.annualPrice} if billed annually
                </p>
                <button
                  className={`${
                    plan?.id === "pro" ? "bg-secondary-600" : ""
                  } my-3 border border-secondary-600 hover:bg-secondary-600  transition-all duration-100 px-3 py-1 text-sm font-semibold rounded-[5px]  hover:text-white cursor-pointer`}
                >
                  Start 14-day trial
                </button>

                <p className="font-bold text-sm my-6">{plan?.includesTitle}</p>

                <div>
                  {plan?.includes?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="text-secondary-600 w-[15px]" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex  text-center justify-center my-14 ">
          <div className="space-y-5  ">
            <p className="smallDesc "> Prices exclude any applicable taxes.</p>

            <p className="smallDesc">
              Onboarding available. Onboarding fees apply based on portfolio
              size.
            </p>

            <Button variant="primary" className="font-bold  mt-4 py-5">
              Compare all features
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
