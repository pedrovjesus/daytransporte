import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Service } from "./_components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  );
}
