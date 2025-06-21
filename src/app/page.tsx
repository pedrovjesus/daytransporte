import { About } from "./_components/sobre";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Service } from "./_components/servicos";
import { WeServices } from "./_components/nossos-servicos";
import { Contacts } from "./_components/contatos";
import { SubFooter } from "./_components/subfooter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <WeServices />
      <Contacts />
      <Footer />
      <SubFooter />
    </div>
  );
}
