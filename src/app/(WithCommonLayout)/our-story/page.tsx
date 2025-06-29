import ImagePreviews from "@/app/search/[id]/ImagePreviews";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* <div className="h-[60px]"></div> */}
      <ImagePreviews images={["/story-2.avif", "/story-1.avif"]} />

      <section className=" mb-8">
        <h2 className="mt-24 mb-8 te text-center text-[45px] font-semibold">
          Our Misson
        </h2>

        <p className="w-3/4 mx-auto text-d1 mb-4">
          At RentMode, our mission is to redefine the rental experience by
          making it simpler, safer, and more tailored to your unique needs.
          Whether you are searching for your first apartment, relocating to a
          new city, or exploring flexible living options, we are here to support
          you every step of the way. We understand that finding the right rental
          property can be overwhelming. That’s why we provide expert support to
          guide you through the process—helping you make informed decisions with
          confidence. Our team is dedicated to understanding your preferences,
          priorities, and budget to match you with the perfect place to call
          home. With a wide selection of verified listings in top neighborhoods,
          we ensure that every property on our platform meets strict quality
          standards. <br /> <br /> From cozy studios to spacious family homes,
          we offer something for everyone—because your lifestyle matters. We
          also recognize that every renter’s journey is different. That’s why we
          provide flexible rental options designed to suit your timeframe,
          financial situation, and living needs. Whether you are looking for
          short-term stays or long-term commitments, our platform is built to
          adapt to you. Above all, we are a trusted platform focused on safety,
          transparency, and peace of mind. With secure booking systems and
          tenant protection features, we prioritize your security and comfort
          from search to move-in. Our goal is not just to help you find a
          rental, but to help you find a place you can truly feel at home. At
          [Your Website Name], we make renting better—for everyone.
        </p>
      </section>

      <section className="my-24 flex lg:flex-col flex-col items-center justify-center gap-10">
        <div className="flex lg:flex-row flex-col gap-5">
          <Image
            src="https://www.houselogic.com/wp-content/uploads/2016/08/tax-deductions-rental-home-standard_1f79136f45639b6e63f8a93b18c9fdcc.jpg"
            alt=""
            width={500}
            height={500}
            className="rounded"
          />
          <Image
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div>
          <h2 className="text-[25px] font-semibold">What Sets Us Apart</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
            <li>
              Expert support to help you find the right rental property with
              ease.
            </li>
            <li>
              Wide selection of verified listings across top neighborhoods.
            </li>
            <li>
              Flexible rental options tailored to your budget and lifestyle.
            </li>
            <li>
              Trusted platform with secure booking and tenant protection
              features.
            </li>
          </ul>
        </div>
      </section>

      <section className=" ">
        <h2 className="  text-center text-[45px] mt-16 font-semibold">
          Contact Us
        </h2>

        <p className="text-center text-d1 mb-10">
          If you have any questions, feel free to get in touch with us:
        </p>
        <ul className="flex  lg:flex-row flex-col py-3 text-center  justify-center items-center gap-5 bg-primary text-white text-2xl lg:h-[100px] ">
          <li>
            Email: <a href="mailto:info@rentMode.com">info@rentMode.com</a>
          </li>
          <li>Phone: +123 456 789</li>
          <li>Address: 123 Dublin, Ireland, </li>
        </ul>
      </section>
    </>
  );
};

export default AboutPage;
