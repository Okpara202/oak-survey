import AccurateDataSection from "../component/home/AccurateDataSection";
import ClientSay from "../component/home/ClientSay";
import ComprehensiveSolutionsSection from "../component/home/ComprehensiveSolutionSection";
import HeroSection from "../component/home/HeroSection";
import ServiceCardsSection from "../component/home/ServiceCardSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ComprehensiveSolutionsSection />
      <AccurateDataSection />
      <ServiceCardsSection />
      <ClientSay />
    </>
  );
}

export default Home;
