import svgPaths from "../imports/svg-9lp9v0o0od";
import imgHero2 from "../assets/dda96bf49632313cbd9852a29d858cae0096ce76.png";
import imgImage from "../assets/e77b745df5250a4376501c5b671c701ec758498e.png";
import imgImage1 from "../assets/430b74a2b988bca1df2b549a18a4ecb4ae327501.png";
import imgImage2 from "../assets/93409b7152ddd246ec2aee506fd669558bae4101.png";
import imgImage3 from "../assets/38a5046ad475465f0cd86f7a1e6dfe9e3ba985c2.png";
import imgImage4 from "../assets/e9ecee3569abd3082ac9a255d25eb122fa46fcd9.png";
import imgImage5 from "../assets/d3e5ef827b875025244740c13b6a1a5f889ef5b4.png";
import imgImage6 from "../assets/4be631603248a1f0ec96ced5898f1adef44b965b.png";

import { useState, useCallback } from "react";

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
}

function Navbar() {
  const scrollTo = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    scrollTo(e, href);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative z-50 w-full max-w-[1226px]">
      <div className="backdrop-blur-[35px] bg-[#fafafa]/90 flex items-center justify-between pl-[16px] pr-[16px] py-[12px] md:py-[8px] rounded-[16px] w-full shadow-sm">
        <div className="flex gap-[8px] items-center shrink-0">
          <span className="font-['Inter',sans-serif] font-semibold text-[18px] md:text-[20px] text-black tracking-[-0.4px] leading-[1.4]">
            Méridien Avocats
          </span>
        </div>

        <button 
          className="md:hidden flex flex-col gap-[4px] p-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] focus-visible:ring-offset-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Fermer le menu principal" : "Ouvrir le menu principal"}
        >
          <span aria-hidden="true" className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span aria-hidden="true" className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span aria-hidden="true" className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <nav 
          id="main-navigation"
          aria-label="Navigation principale"
          className={`absolute md:relative top-[110%] md:top-auto left-0 w-full md:w-auto bg-[#fafafa] md:bg-transparent rounded-[16px] md:rounded-none p-4 md:p-0 shadow-lg md:shadow-none flex-col md:flex-row gap-[16px] md:gap-[24px] transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden md:flex'} items-center`}
        >
          <a href="#cabinet" onClick={(e) => handleNavClick(e, "#cabinet")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity w-full md:w-auto text-center outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] rounded-md px-2 py-1">
            Le cabinet
          </a>
          <a href="#expertises" onClick={(e) => handleNavClick(e, "#expertises")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity w-full md:w-auto text-center outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] rounded-md px-2 py-1">
            Nos expertises
          </a>
          <a href="#equipe" onClick={(e) => handleNavClick(e, "#equipe")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity w-full md:w-auto text-center outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] rounded-md px-2 py-1">
            L'équipe
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-[#22150d] flex items-center justify-center px-[12px] py-[8px] rounded-[8px] font-['Inter',sans-serif] font-medium text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-90 transition-opacity w-full md:w-auto text-center outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa]"
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  const scrollTo = useSmoothScroll();
  return (
    <section aria-labelledby="hero-heading" className="relative flex flex-col gap-[32px] md:gap-[48px] items-center px-[24px] md:px-[64px] pt-[24px] md:pt-[32px] pb-[80px] md:pb-[120px] w-full min-h-[100svh] overflow-hidden justify-center">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgHero2}
      />
      <div className="absolute top-[24px] md:top-[32px] w-full px-[16px] md:px-[64px] flex justify-center z-50">
        <Navbar />
      </div>
      <div className="relative flex flex-col gap-[16px] md:gap-[24px] items-center text-center mt-[80px] md:mt-[40px]" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
        <h1 id="hero-heading" className="font-['Inter',sans-serif] font-bold text-[36px] sm:text-[48px] md:text-[64px] text-[#fafafa] tracking-[-0.5px] md:tracking-[-1.28px] leading-[1.2] md:leading-[1.1] w-full">
          Votre partenaire stratégique<br aria-hidden="true" className="hidden md:block" /> en droit des affaires.
        </h1>
        <p className="font-['Inter',sans-serif] font-medium text-[18px] md:text-[24px] text-[rgba(250,250,250,0.9)] tracking-[-0.12px] leading-[1.4] max-w-[960px]">
          Sécuriser vos ambitions, défendre vos intérêts. Méridien Avocats vous accompagne à chaque étape de la vie de votre entreprise avec des solutions juridiques sur mesure, pragmatiques et innovantes.
        </p>
      </div>
      <div className="relative flex flex-col sm:flex-row flex-wrap gap-[16px] items-center w-full sm:w-auto mt-[16px]">
        <a href="#contact" onClick={(e) => scrollTo(e, "#contact")} className="bg-[#fafafa] w-full sm:w-auto flex items-center justify-center px-[16px] py-[12px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[16px] md:text-[18px] text-black tracking-[-0.09px] leading-[1.45] hover:opacity-90 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22150d]">
          Prendre rendez-vous
        </a>
        <a href="#expertises" onClick={(e) => scrollTo(e, "#expertises")} className="relative flex w-full sm:w-auto items-center justify-center px-[16px] py-[12px] rounded-[12px] font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-[#fafafa] tracking-[-0.09px] leading-[1.45] border-2 border-[#fafafa] hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22150d]">
          Découvrir nos expertises
        </a>
      </div>
    </section>
  );
}

function SectionHeadline({ label, title, titleId }: { label: string; title: string, titleId?: string }) {
  return (
    <header className="flex flex-col gap-[8px] md:gap-[16px] items-start w-full">
      <p className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] leading-[1.45]" aria-hidden="true">
        {label}
      </p>
      <h2 id={titleId} className="font-['Inter',sans-serif] font-bold text-[32px] md:text-[48px] text-black tracking-[-0.5px] md:tracking-[-0.96px] leading-[1.2]">
        <span className="sr-only">{label} - </span>{title}
      </h2>
    </header>
  );
}

function CabinetSection() {
  return (
    <section id="cabinet" aria-labelledby="cabinet-heading" className="flex flex-col gap-[24px] md:gap-[32px] items-start px-[24px] md:px-[64px] py-[60px] md:py-[120px] w-full max-w-[1280px] mx-auto">
      <SectionHeadline titleId="cabinet-heading" label="LE CABINET" title="L'excellence juridique au service de votre croissance." />
      <div className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.6] md:leading-[1.45] w-full">
        <p className="mb-4 md:mb-0">
          Fondé sur la conviction que le droit est un levier de création de valeur, Méridien Avocats est un cabinet dédié exclusivement au droit des affaires. Nous conseillons et défendons une clientèle variée : créateurs d'entreprises, PME, ETI et groupes internationaux.
        </p>
        <p aria-hidden="true" className="hidden md:block mb-0">&nbsp;</p>
        <p>
          Notre approche est simple : comprendre votre modèle économique pour vous apporter des réponses juridiques parfaitement alignées avec votre stratégie commerciale. Nous ne nous contentons pas de vous exposer les risques ; nous construisons avec vous des solutions pour les surmonter.
        </p>
      </div>
    </section>
  );
}

function ExpertisesHeadline() {
  return (
    <section id="expertises" aria-labelledby="expertises-heading" className="flex flex-col items-start px-[24px] md:px-[64px] pt-[60px] md:pt-[120px] pb-[30px] md:pb-[60px] w-full max-w-[1280px] mx-auto">
      <SectionHeadline
        titleId="expertises-heading"
        label="NOS EXPERTISES"
        title="Une maîtrise pointue pour sécuriser et optimiser chaque aspect de vos opérations."
      />
    </section>
  );
}

function ExpertiseRow({
  title,
  intro,
  items,
  image,
  imageFirst = false,
  topPadding = "pt-[60px] md:pt-[120px]",
  bottomPadding = "pb-[60px] md:pb-[40px]",
}: {
  title: string;
  intro: string;
  items: string[];
  image: string;
  imageFirst?: boolean;
  topPadding?: string;
  bottomPadding?: string;
}) {
  const textContent = (
    <div className="flex flex-1 flex-col items-start justify-center min-w-0 w-full lg:w-1/2">
      <div className="flex flex-col gap-[16px] md:gap-[24px] items-start w-full">
        <h3 className="font-['Inter',sans-serif] font-bold text-[28px] md:text-[36px] text-black tracking-[-0.72px] leading-[1.2]">
          {title}
        </h3>
        <div className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
          <p className="font-bold leading-[1.6] md:leading-[1.45] mb-4 md:mb-0">{intro}</p>
          <ul className="list-disc ms-[20px] md:ms-[27px] mt-2 md:mt-0">
            {items.map((item, i) => (
              <li key={i} className={`${i < items.length - 1 ? "mb-2 md:mb-0" : ""}`}>
                <span className="leading-[1.6] md:leading-[1.45]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex-1 w-full lg:w-1/2 h-[300px] md:h-[432px] min-w-0 relative rounded-[16px]">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
        src={image}
      />
    </div>
  );

  return (
    <article className={`flex flex-col ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-[32px] md:gap-[64px] items-center justify-center ${bottomPadding} ${topPadding} px-[24px] md:px-[64px] w-full max-w-[1280px] mx-auto`}>
      {imageContent}
      {textContent}
    </article>
  );
}

function TeamSection() {
  return (
    <section id="equipe" aria-labelledby="equipe-heading" className="w-full max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-[24px] md:gap-[32px] items-start px-[24px] md:px-[64px] pt-[60px] md:pt-[120px] pb-[30px] md:pb-[60px]">
        <SectionHeadline titleId="equipe-heading" label="L'ÉQUIPE" title="Des experts dédiés à votre réussite." />
        <p className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.6] md:leading-[1.45] w-full">
          Notre équipe est composée d'avocats passionnés et expérimentés, travaillant en synergie pour couvrir l'ensemble de vos besoins.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[32px] items-start justify-center px-[24px] md:px-[64px] pb-[60px] md:pb-[120px]">
        <TeamCard name="Alain Chambert" role="Département Corporate & M&A" image={imgImage4} />
        <TeamCard name="Alicia Morein" role="Département Contentieux & Arbitrage" image={imgImage5} />
        <TeamCard name="Anaïs Delandre" role="Département Droit Social & Economique" image={imgImage6} />
      </div>
    </section>
  );
}

function TeamCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article className="flex flex-1 w-full flex-col gap-[16px] md:gap-[32px] items-start md:max-w-[388px] min-w-0 md:min-w-[336px] rounded-[8px]">
      <div className="aspect-[362.67/483] relative rounded-[16px] w-full">
        <img
          alt={`Portrait de ${name}, ${role}`}
          className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-[4px] md:gap-[8px] items-start w-full">
        <h3 className="font-['Inter',sans-serif] font-semibold text-[20px] md:text-[24px] text-black tracking-[-0.48px] leading-[1.2]">
          {name}
        </h3>
        <p className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45]">
          {role}
        </p>
      </div>
    </article>
  );
}

function CTASection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ nom: "", prenom: "", email: "", telephone: "", sujet: "", message: "" });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full max-w-[1280px] mx-auto px-[24px] md:px-[64px] py-[60px] md:py-[120px]">
      <SectionHeadline
        titleId="contact-heading"
        label="PRENDRE RENDEZ-VOUS"
        title="Contactez notre équipe pour une première consultation confidentielle."
      />
      <form onSubmit={handleSubmit} className="mt-[32px] md:mt-[48px] flex flex-col gap-[24px] md:gap-[32px]" noValidate>
        <div className="flex flex-col sm:flex-row gap-[24px] w-full">
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="nom" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Nom *</label>
            <input
              id="nom"
              type="text"
              name="nom"
              required
              aria-required="true"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Dupont"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)] w-full"
            />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="prenom" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Prénom *</label>
            <input
              id="prenom"
              type="text"
              name="prenom"
              required
              aria-required="true"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Jean"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)] w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[24px] w-full">
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="email" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              aria-required="true"
              value={formData.email}
              onChange={handleChange}
              placeholder="jean.dupont@exemple.fr"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)] w-full"
            />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="telephone" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Téléphone</label>
            <input
              id="telephone"
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06 25 15 33 33"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)] w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="sujet" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Domaine d'expertise concerné</label>
          <select
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors bg-white appearance-none cursor-pointer w-full"
          >
            <option value="">Sélectionnez un domaine</option>
            <option value="corporate">Droit des Sociétés & M&A</option>
            <option value="contentieux">Contentieux des Affaires & Arbitrage</option>
            <option value="contrats">Contrats Commerciaux & Droit Économique</option>
            <option value="social">Droit Social</option>
          </select>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <label htmlFor="message" className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Votre message *</label>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Décrivez brièvement votre situation ou votre besoin juridique..."
            className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] transition-colors resize-none placeholder:text-[rgba(0,0,0,0.3)] w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[16px] md:gap-[24px]">
          <button
            type="submit"
            className="bg-[#22150d] w-full sm:w-auto flex items-center justify-center px-[32px] py-[14px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#fafafa] tracking-[-0.09px] leading-[1.45] cursor-pointer hover:opacity-90 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-[#22150d] focus-visible:ring-offset-2"
          >
            Envoyer ma demande
          </button>
          
          <div aria-live="polite" className="w-full sm:w-auto">
            {submitted && (
              <span className="font-['Inter',sans-serif] font-medium text-[14px] md:text-[16px] text-[#22150d] tracking-[-0.08px] leading-[1.45] animate-fade-in block text-center sm:text-left">
                Merci ! Votre demande a bien été envoyée. Nous vous recontacterons rapidement.
              </span>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

function InstagramIcon() {
  return (
    <a href="#" aria-label="Visiter notre page Instagram" className="block relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
      <svg aria-hidden="true" className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip_ig)">
          <path d={svgPaths.p3c382d72} fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip_ig">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function LinkedinIcon() {
  return (
    <a href="#" aria-label="Visiter notre page LinkedIn" className="block relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
      <svg aria-hidden="true" className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip_li)">
          <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="#FAFAFA" fillRule="evenodd" />
          <path d={svgPaths.pe7ea00} fill="#22150D" />
          <path d={svgPaths.p1ab31680} fill="#22150D" />
          <path d={svgPaths.p28c6df0} fill="#22150D" />
        </g>
        <defs>
          <clipPath id="clip_li">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function XIcon() {
  return (
    <a href="#" aria-label="Visiter notre page X (anciennement Twitter)" className="block relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
      <svg aria-hidden="true" className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.pdaf0200} fill="#FAFAFA" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer aria-label="Pied de page" className="bg-[#22150d] flex items-center justify-center px-[24px] md:px-[64px] pb-[60px] md:pb-[120px] w-full">
      <div className="flex flex-col lg:flex-row flex-1 gap-[48px] lg:gap-[120px] items-start py-[48px] md:py-[80px] relative max-w-[1152px]">
        <div aria-hidden="true" className="absolute border-[#fafafa] border-solid border-t inset-x-0 top-0 pointer-events-none opacity-20" />
        <div className="flex flex-1 flex-col gap-[32px] md:gap-[56px] items-start min-w-0 w-full lg:w-auto">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <span className="font-['Inter',sans-serif] font-semibold text-[20px] md:text-[24px] text-[#fafafa] tracking-[-0.48px] leading-[1.45]">
              Méridien Avocats
            </span>
            <p className="font-['Inter',sans-serif] font-medium text-[14px] md:text-[16px] text-[#fafafa] opacity-80 tracking-[-0.08px] leading-[1.45]">
              Votre partenaire stratégique en droit des affaires.
            </p>
          </div>
          <nav aria-label="Réseaux sociaux" className="flex gap-[24px] items-center cursor-pointer">
            <InstagramIcon />
            <LinkedinIcon />
            <XIcon />
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-[32px] sm:gap-[40px] items-start shrink-0 w-full lg:w-auto">
          <FooterColumn
            title="Site"
            items={[
              { label: "Le cabinet", href: "#cabinet" },
              { label: "Nos expertises", href: "#expertises" },
              { label: "L'équipe", href: "#equipe" },
              { label: "Prendre rendez-vous", href: "#contact" }
            ]}
            width="w-full sm:w-[167px]"
          />
          <FooterColumn
            title="Contact"
            items={[
              { label: "06 25 15 33 33", href: "tel:+33625153333" },
              { label: "meridien@avocats.fr", href: "mailto:meridien@avocats.fr" },
              { label: "25 rue des lévriers", href: "#" },
              { label: "75005, Paris", href: "#" }
            ]}
            width="w-full sm:w-[170px]"
          />
          <FooterColumn
            title="Légal"
            items={[
              { label: "CGU", href: "#" },
              { label: "CGV", href: "#" },
              { label: "Mentions légales", href: "#" },
              { label: "Confidentialité", href: "#" }
            ]}
            width="w-full sm:w-[130px]"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, width }: { title: string; items: {label: string, href: string}[]; width: string }) {
  return (
    <nav aria-label={title} className={`flex flex-col gap-[8px] items-start justify-center ${width}`}>
      <div className="flex items-start pb-[8px] md:pb-[16px] w-full">
        <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45]">
          {title}
        </span>
      </div>
      <ul className="flex flex-col gap-[8px] m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="font-['Inter',sans-serif] font-medium text-[14px] md:text-[16px] text-[#fafafa] opacity-80 tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-100 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1 -mx-1">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <main className="bg-white w-full font-['Inter',sans-serif] overflow-x-hidden">
      <Hero />
      <CabinetSection />
      <ExpertisesHeadline />

      <ExpertiseRow
        title="Droit des Sociétés & Fusions-Acquisitions (M&A)"
        intro="De la création de votre structure à sa transmission, nous vous accompagnons dans toutes vos opérations de haut de bilan :"
        items={[
          "Création d'entreprise et pactes d'actionnaires.",
          "Opérations de levée de fonds et capital-risque.",
          "Acquisitions, fusions, et restructurations (LBO, MBO).",
          "Gouvernance et secrétariat juridique courant.",
        ]}
        image={imgImage}
        topPadding="pt-[0px] md:pt-[60px]"
        bottomPadding="pb-[30px] md:pb-[40px]"
      />
      <ExpertiseRow
        title="Contentieux des Affaires & Arbitrage"
        intro="Quand le conflit est inévitable, nous défendons vos intérêts avec pugnacité devant l'ensemble des juridictions commerciales et civiles :"
        items={[
          "Rupture brutale des relations commerciales.",
          "Concurrence déloyale et litiges entre associés.",
          "Recouvrement de créances et voies d'exécution.",
          "Modes alternatifs de règlement des litiges (Médiation, Arbitrage).",
        ]}
        image={imgImage1}
        imageFirst={true}
        topPadding="pt-[30px] md:pt-[40px]"
        bottomPadding="pb-[30px] md:pb-[60px]"
      />

      <ExpertiseRow
        title="Contrats Commerciaux & Droit Économique"
        intro="Nous sécurisons vos relations avec vos partenaires, fournisseurs et clients :"
        items={[
          "Rédaction et négociation de contrats (CGV, CGA, distribution, franchise).",
          "Conformité réglementaire et droit de la consommation.",
          "Accompagnement dans la transition numérique et contrats informatiques.",
        ]}
        image={imgImage2}
        topPadding="pt-[30px] md:pt-[60px]"
        bottomPadding="pb-[30px] md:pb-[40px]"
      />
      <ExpertiseRow
        title="Droit Social"
        intro="Un conseil expert pour la gestion de vos ressources humaines :"
        items={[
          "Rédaction de contrats de travail et avenants.",
          "Procédures de licenciement et ruptures conventionnelles.",
          "Gestion des relations avec les instances représentatives du personnel (CSE).",
          "Contentieux devant le Conseil de Prud'hommes.",
        ]}
        image={imgImage3}
        imageFirst={true}
        topPadding="pt-[30px] md:pt-[40px]"
        bottomPadding="pb-[60px] md:pb-[120px]"
      />

      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}