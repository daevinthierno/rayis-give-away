import { Hero,Info,About,Speakers,Schedule,Sponsors,Features,Tickets,Testimonials,Gallery,FAQ, GiveawaysSection } from "@/containers";

// import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    // <NextUIProvider>
      <main className="w-full overflow-hidden">
        <Hero />
        <Info />
        {/* <GiveawaysSection/> */}
        <Tickets />
        <About />
        {/* <Speakers /> */}
        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        <Features />
        
        <FAQ />
        <Testimonials />
        <Gallery />
      </main>
    // </NextUIProvider>
  );
}
