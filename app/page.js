import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import Offers from "@/components/Offers";
import SignatureDishes from "@/components/SignatureDishes";
import StorySection from "@/components/StorySection";
import ExperienceSection from "@/components/ExperienceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Catering from "@/components/Catering";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Journal from "@/components/Journal";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <Offers />
      <SignatureDishes />
      <StorySection />
      <ExperienceSection />
      <WhyChooseUs />
      <Catering />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Journal />
      <FinalCTA />
    </>
  );
}
