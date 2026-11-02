import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Specialists from "@/components/sections/Specialists";
import Gallery from "@/components/sections/Gallery";
import Commitment from "@/components/sections/Commitment";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      <WhyChooseUs />
      <Specialists />
      <Gallery />
      <Commitment />
      <FAQ />
      <Booking />
    </>
  );
}
