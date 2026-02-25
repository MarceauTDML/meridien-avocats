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
  return (
    <div className="backdrop-blur-[35px] bg-[#fafafa] flex items-center justify-between pl-[16px] pr-[8px] py-[8px] rounded-[16px] w-full max-w-[1226px]">
      <div className="flex gap-[8px] items-center shrink-0">
        <span className="font-['Inter',sans-serif] font-semibold text-[20px] text-black tracking-[-0.4px] leading-[1.4]">
          Méridien Avocats
        </span>
      </div>
      <nav className="flex gap-[24px] items-center">
        <a href="#cabinet" onClick={(e) => scrollTo(e, "#cabinet")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity">
          Le cabinet
        </a>
        <a href="#expertises" onClick={(e) => scrollTo(e, "#expertises")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity">
          Nos expertises
        </a>
        <a href="#equipe" onClick={(e) => scrollTo(e, "#equipe")} className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity">
          L'équipe
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className="bg-[#22150d] flex items-center justify-center px-[12px] py-[8px] rounded-[8px] font-['Inter',sans-serif] font-medium text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-90 transition-opacity"
        >
          Prendre rendez-vous
        </a>
      </nav>
    </div>
  );
}

function Hero() {
  const scrollTo = useSmoothScroll();
  return (
    <section className="relative flex flex-col gap-[48px] items-center px-[64px] pt-[32px] pb-[120px] w-full overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgHero2}
      />
      <Navbar />
      <div className="relative flex flex-col gap-[24px] items-center text-center mt-[40px]" style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}>
        <h1 className="font-['Inter',sans-serif] font-bold text-[64px] text-[#fafafa] tracking-[-1.28px] leading-[1.1] w-full">
          Votre partenaire stratégique en droit des affaires.
        </h1>
        <p className="font-['Inter',sans-serif] font-medium text-[24px] text-[rgba(250,250,250,0.9)] tracking-[-0.12px] leading-[1.4] max-w-[960px]">
          Sécuriser vos ambitions, défendre vos intérêts. Méridien Avocats vous accompagne à chaque étape de la vie de votre entreprise avec des solutions juridiques sur mesure, pragmatiques et innovantes.
        </p>
      </div>
      <div className="relative flex flex-wrap gap-[16px] items-center cursor-pointer">
        <a href="#contact" onClick={(e) => scrollTo(e, "#contact")} className="bg-[#fafafa] flex items-center justify-center px-[16px] py-[12px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[18px] text-black tracking-[-0.09px] leading-[1.45] hover:opacity-90 transition-opacity">
          Prendre rendez-vous
        </a>
        <a href="#expertises" onClick={(e) => scrollTo(e, "#expertises")} className="relative flex items-center justify-center px-[16px] py-[12px] rounded-[12px] font-['Inter',sans-serif] font-medium text-[18px] text-[#fafafa] tracking-[-0.09px] leading-[1.45] border-2 border-[#fafafa] hover:bg-white/10 transition-colors">
          Découvrir nos expertises
        </a>
      </div>
    </section>
  );
}

function SectionHeadline({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <p className="font-['Inter',sans-serif] font-medium text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] leading-[1.45]">
        {label}
      </p>
      <h3 className="font-['Inter',sans-serif] font-bold text-[48px] text-black tracking-[-0.96px] leading-[1.2]">
        {title}
      </h3>
    </div>
  );
}

function CabinetSection() {
  return (
    <section id="cabinet" className="flex flex-col gap-[32px] items-start px-[64px] py-[120px] w-full max-w-[1280px] mx-auto">
      <SectionHeadline label="LE CABINET" title="L'excellence juridique au service de votre croissance." />
      <div className="font-['Inter',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45] w-full">
        <p className="mb-0">
          Fondé sur la conviction que le droit est un levier de création de valeur, Méridien Avocats est un cabinet dédié exclusivement au droit des affaires. Nous conseillons et défendons une clientèle variée : créateurs d'entreprises, PME, ETI et groupes internationaux.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          Notre approche est simple : comprendre votre modèle économique pour vous apporter des réponses juridiques parfaitement alignées avec votre stratégie commerciale. Nous ne nous contentons pas de vous exposer les risques ; nous construisons avec vous des solutions pour les surmonter.
        </p>
      </div>
    </section>
  );
}

function ExpertisesHeadline() {
  return (
    <section id="expertises" className="flex flex-col items-start px-[64px] py-[120px] w-full max-w-[1280px] mx-auto">
      <SectionHeadline
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
  topPadding = "pt-[120px]",
  bottomPadding = "pb-[40px]",
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
    <div className="flex flex-1 flex-col items-start justify-center min-w-0">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <h4 className="font-['Inter',sans-serif] font-bold text-[36px] text-black tracking-[-0.72px] leading-[1.2]">
          {title}
        </h4>
        <div className="font-['Inter',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
          <p className="font-bold leading-[1.45] mb-0">{intro}</p>
          <ul className="list-disc">
            {items.map((item, i) => (
              <li key={i} className={`ms-[27px] ${i < items.length - 1 ? "mb-0" : ""}`}>
                <span className="leading-[1.45]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex-1 h-[432px] min-w-0 relative rounded-[16px]">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
        src={image}
      />
    </div>
  );

  return (
    <div className={`flex gap-[64px] items-center justify-center ${bottomPadding} ${topPadding} px-[64px] w-full max-w-[1280px] mx-auto`}>
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}

function TeamSection() {
  return (
    <section id="equipe" className="w-full max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-[32px] items-start px-[64px] py-[120px]">
        <SectionHeadline label="L'EQUIPE" title="Des experts dédiés à votre réussite." />
        <p className="font-['Inter',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45] w-full">
          Notre équipe est composée d'avocats passionnés et expérimentés, travaillant en synergie pour couvrir l'ensemble de vos besoins.
        </p>
      </div>
      <div className="flex gap-[32px] items-start justify-center px-[64px] py-[120px]">
        <TeamCard name="Alain Chambert" role="Département Corporate & M&A" image={imgImage4} />
        <TeamCard name="Alicia Morein" role="Département Contentieux & Arbitrage" image={imgImage5} />
        <TeamCard name="Anaïs Delandre" role="Département Droit Social & Economique" image={imgImage6} />
      </div>
    </section>
  );
}

function TeamCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-1 flex-col gap-[32px] items-start max-w-[388px] min-w-[336px] rounded-[8px]">
      <div className="aspect-[362.67/483] relative rounded-[16px] w-full">
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-[8px] items-start w-full">
        <h5 className="font-['Inter',sans-serif] font-semibold text-[24px] text-black tracking-[-0.48px] leading-[1.2]">
          {name}
        </h5>
        <p className="font-['Inter',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45]">
          {role}
        </p>
      </div>
    </div>
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
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-[64px] py-[120px]">
      <SectionHeadline
        label="PRENDRE RENDEZ-VOUS"
        title="Contactez notre équipe pour une première consultation confidentielle."
      />
      <form onSubmit={handleSubmit} className="mt-[48px] flex flex-col gap-[32px]">
        <div className="flex gap-[24px] w-full">
          <label className="flex flex-col gap-[8px] flex-1">
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Nom *</span>
            <input
              type="text"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              placeholder="Dupont"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </label>
          <label className="flex flex-col gap-[8px] flex-1">
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Prénom *</span>
            <input
              type="text"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Jean"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </label>
        </div>
        <div className="flex gap-[24px] w-full">
          <label className="flex flex-col gap-[8px] flex-1">
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Email *</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jean.dupont@exemple.fr"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </label>
          <label className="flex flex-col gap-[8px] flex-1">
            <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Téléphone</span>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors placeholder:text-[rgba(0,0,0,0.3)]"
            />
          </label>
        </div>
        <label className="flex flex-col gap-[8px] w-full">
          <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Domaine d'expertise concerné</span>
          <select
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors bg-white appearance-none cursor-pointer"
          >
            <option value="">Sélectionnez un domaine</option>
            <option value="corporate">Droit des Sociétés & M&A</option>
            <option value="contentieux">Contentieux des Affaires & Arbitrage</option>
            <option value="contrats">Contrats Commerciaux & Droit Économique</option>
            <option value="social">Droit Social</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label className="flex flex-col gap-[8px] w-full">
          <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.55)] tracking-[-0.03px] leading-[1.45]">Votre message *</span>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Décrivez brièvement votre situation ou votre besoin juridique..."
            className="font-['Inter',sans-serif] font-medium text-[16px] text-black tracking-[-0.08px] leading-[1.45] border border-[rgba(0,0,0,0.15)] rounded-[12px] px-[16px] py-[14px] outline-none focus:border-[#22150d] transition-colors resize-none placeholder:text-[rgba(0,0,0,0.3)]"
          />
        </label>
        <div className="flex items-center gap-[24px]">
          <button
            type="submit"
            className="bg-[#22150d] flex items-center justify-center px-[32px] py-[14px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[18px] text-[#fafafa] tracking-[-0.09px] leading-[1.45] cursor-pointer hover:opacity-90 transition-opacity"
          >
            Envoyer ma demande
          </button>
          {submitted && (
            <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#22150d] tracking-[-0.08px] leading-[1.45] animate-fade-in">
              Merci ! Votre demande a bien été envoyée. Nous vous recontacterons rapidement.
            </span>
          )}
        </div>
      </form>
    </section>
  );
}

function InstagramIcon() {
  return (
    <button className="block relative shrink-0 size-[24px] cursor-pointer">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip_ig)">
          <path d={svgPaths.p3c382d72} fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip_ig">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function LinkedinIcon() {
  return (
    <button className="block relative shrink-0 size-[24px] cursor-pointer">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
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
    </button>
  );
}

function XIcon() {
  return (
    <button className="block relative shrink-0 size-[24px] cursor-pointer">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.pdaf0200} fill="#FAFAFA" />
      </svg>
    </button>
  );
}

function Footer() {
  return (
    <footer className="bg-[#22150d] flex items-center justify-center px-[64px] pb-[120px] w-full">
      <div className="flex flex-1 gap-[120px] items-start py-[80px] relative max-w-[1152px]">
        <div className="absolute border-[#fafafa] border-solid border-t inset-x-0 top-0 pointer-events-none" />
        <div className="flex flex-1 flex-col gap-[56px] items-start min-w-0">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <span className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#fafafa] tracking-[-0.48px] leading-[1.45]">
              Méridien Avocats
            </span>
            <p className="font-['Inter',sans-serif] font-medium text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45]">
              Votre partenaire stratégique en droit des affaires.
            </p>
          </div>
          <nav className="flex gap-[24px] items-center cursor-pointer">
            <InstagramIcon />
            <LinkedinIcon />
            <XIcon />
          </nav>
        </div>
        <div className="flex gap-[40px] items-start shrink-0">
          <FooterColumn
            title="Site"
            items={["Le cabinet", "Nos expertises", "L'équipe", "Prendre rendez-vous"]}
            width="w-[167px]"
          />
          <FooterColumn
            title="Contact"
            items={["06 25 15 33 33", "meridien@avocats.fr", "25 rue des lévriers", "75005, Paris"]}
            width="w-[170px]"
          />
          <FooterColumn
            title="Légal"
            items={["CGU", "CGV", "Mentions légales", "Confidentialité"]}
            width="w-[130px]"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, width }: { title: string; items: string[]; width: string }) {
  return (
    <nav className={`flex flex-col gap-[8px] items-start justify-center ${width}`}>
      <div className="flex items-start pb-[16px] w-full">
        <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45]">
          {title}
        </span>
      </div>
      {items.map((item) => (
        <p key={item} className="font-['Inter',sans-serif] font-medium text-[16px] text-[#fafafa] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:opacity-70 transition-opacity">
          {item}
        </p>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-white w-full font-['Inter',sans-serif]">
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
        topPadding="pt-[120px]"
        bottomPadding="pb-[40px]"
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
        imageFirst
        topPadding="pt-[40px]"
        bottomPadding="pb-[120px]"
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
        topPadding="pt-[120px]"
        bottomPadding="pb-[40px]"
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
        imageFirst
        topPadding="pt-[40px]"
        bottomPadding="pb-[120px]"
      />

      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}