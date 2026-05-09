"use client";
import { faqs } from "@/lib/frequentData";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FrequentQuestion = () => {
  const [currentId, setCurrentId] = useState(null);

  const handleVisibility = (itemId) => {
    if (itemId === currentId) {
      setCurrentId(null);
    } else {
      setCurrentId(itemId);
    }
  };

  return (
    <div className="mb-[100px] md:mt-5 mt-20 customWidth">
      <h1 className="text-3xl mb-3 md:text-[40px] font-extrabold text-center ">
        Frequently Asked <br className="md:hidden block" /> Questions
      </h1>
      <p className="md:text-base text-sm text-gray-500 text-center">
        Easily explore rental listings for your lifestyle. With seamless search
        tools, <br />
        finding a place that feels like home is simple.
      </p>

      <section className="mt-10 customWidth xl:w-[40%] lg:w-[50%] md:w-[60%] mx-auto">
        {faqs?.map((item) => (
          <div
            onClick={() => handleVisibility(item?.id)}
            key={item?.id}
            className="border-b last:border-b-0"
          >
            <div
              className="pt-2 cursor-pointer flex 
            justify-between   "
            >
              <h1 className="pb-6  font-bold text-lg text-primary-800 w-[97%]">
                {item?.question}
              </h1>{" "}
              {item?.id === currentId ? (
                <Minus className="3xs:w-[40px] " />
              ) : (
                <Plus className="3xs:w-[40px] " />
              )}
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                item?.id === currentId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="smallDesc  text-left pb-5">{item?.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FrequentQuestion;
