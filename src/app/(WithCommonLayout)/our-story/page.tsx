import ImagePreviews from "@/app/search/[id]/ImagePreviews";
import Footer from "@/components/shared/Footer";
import {
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const storyThree = "/story-3.avif";
// const storyTwo = "/story-4.webp";
// const storyOne = "/story-5.webp";

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Support",
    desc: "Guided assistance to help you find the right rental property with ease and confidence.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Verified Listings",
    desc: "Wide selection of quality-checked listings across top neighborhoods in your city.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Flexible Options",
    desc: "Rental plans tailored to your budget, lifestyle, and timeframe — short or long term.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trusted & Secure",
    desc: "Secure booking systems and tenant protection features for your peace of mind.",
  },
];

const contacts = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "info@rentMode.com",
    href: "mailto:info@rentMode.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+123 456 789",
    href: "tel:+123456789",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "123 Dublin, Ireland",
    href: "#",
  },
];
const images = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&auto=format&fit=crop",
];
const storyImages = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
];

const AboutPage = () => {
  return (
    <section className="bg-white">
      <ImagePreviews images={images} />

      {/* Mission */}
      <section className="customWidth mx-auto px-4 mt-24 mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f6920a] mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Mission
          </h2>
          <div className="w-12 h-1 bg-[#f6920a] mx-auto rounded-full" />
        </div>
        <div className="customWidth space-y-5 text-gray-600 text-[17px] leading-relaxed">
          <p>
            At RentMode, our mission is to redefine the rental experience by
            making it simpler, safer, and more tailored to your unique needs.
            Whether you are searching for your first apartment, relocating to a
            new city, or exploring flexible living options, we are here to
            support you every step of the way.
          </p>
          <p>
            We understand that finding the right rental property can be
            overwhelming. That's why we provide expert support to guide you
            through the process — helping you make informed decisions with
            confidence. Our team is dedicated to understanding your preferences,
            priorities, and budget to match you with the perfect place to call
            home.
          </p>
          <p>
            With a wide selection of verified listings in top neighborhoods, we
            ensure that every property on our platform meets strict quality
            standards. From cozy studios to spacious family homes, we offer
            something for everyone — because your lifestyle matters.
          </p>
        </div>
      </section>

      {/* Images + What Sets Us Apart */}
      <section className="customWidth mx-auto px-4 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          <Image
            src={storyImages[0]}
            width={800}
            alt="Modern kitchen interior"
            height={500}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <Image
            src={storyImages[1]}
            width={800}
            alt="Cozy apartment living room"
            height={500}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <Image
            src={storyImages[2]}
            width={800}
            alt="Bright bedroom"
            height={500}
            className="w-full h-64 object-cover rounded-2xl md:col-span-2 lg:col-span-1"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f6920a] mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What Sets Us Apart
          </h2>
          <div className="w-12 h-1 bg-[#f6920a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-[#f6920a]/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f6920a]/10 text-[#f6920a] flex items-center justify-center mb-4 group-hover:bg-[#f6920a] group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="customWidth mx-auto px-4 my-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#f6920a] mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg">
            Have questions? We'd love to hear from you.
          </p>
          <div className="w-12 h-1 bg-[#f6920a] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-[#f6920a]/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f6920a]/10 text-[#f6920a] flex items-center justify-center mb-4 group-hover:bg-[#f6920a] group-hover:text-white transition-colors duration-300">
                {c.icon}
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                {c.label}
              </span>
              <span className="text-gray-800 font-medium text-sm">
                {c.value}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default AboutPage;
