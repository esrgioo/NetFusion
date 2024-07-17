import Feature from "@/components/Feature";
import GrowBusiness from "@/components/GrowBusiness";
import Growdiscover from "@/components/Growdiscover";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Make from "@/components/Make";
import Meet from "@/components/Meet";
import Opportunities from "@/components/Opportunities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Opportunities />
      <Meet />
      <Join />
      <Make />
      <Growdiscover />
      <GrowBusiness />
    </main>
  );
}
