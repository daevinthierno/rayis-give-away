import { Hero,Info,About,Speakers,Schedule,Sponsors,Features,Tickets,Testimonials,Gallery,FAQ } from "@/containers";


export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Info />
      <About />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Features />
      <Tickets />
      <FAQ />
      <Testimonials />
      <Gallery />
    </main>
  );
}
