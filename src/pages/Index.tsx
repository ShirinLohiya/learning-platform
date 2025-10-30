import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DemoPreview from "@/components/DemoPreview";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DemoPreview />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
