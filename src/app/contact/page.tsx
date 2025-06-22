import { Contacts } from "../_components/contatos";
import { Footer } from "../_components/footer";
import { Hero } from "../_components/hero";
import { Navbar } from "../_components/navbar";
import { SubFooter } from "../_components/subfooter";

export default function ContactsPage() {
  return (
    <section id="contato" className="relative w-full md:h-auto">
      <Navbar />
      <Hero />
      <section id="contato" className="relative w-full md:h-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 text-gray-800 flex-col flex">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>

          <p className="mb-5">
            Para mais informações sobre nossos serviços, entre em contato
            conosco através do formulário abaixo ou pelos nossos canais de
            atendimento.
          </p>

          <p className="mb-5">
            Estamos prontos para atender suas necessidades logísticas com
            agilidade e eficiência.
          </p>

          <p>
            Preencha o formulário e nossa equipe entrará em contato o mais breve
            possível.
          </p>
        </div>
      </section>
      <Contacts />
      <Footer />
      <SubFooter />
    </section>
  );
}
