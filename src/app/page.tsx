import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Support } from "@/components/home/Support";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Support />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
