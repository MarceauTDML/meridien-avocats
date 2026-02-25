import svgPaths from "./svg-9lp9v0o0od";
import imgHero2 from "figma:asset/dda96bf49632313cbd9852a29d858cae0096ce76.png";
import imgLogo from "figma:asset/5b94b68947f8b548e93e77e9ae76bd9188ecc7c8.png";
import imgImage from "figma:asset/e77b745df5250a4376501c5b671c701ec758498e.png";
import imgImage1 from "figma:asset/430b74a2b988bca1df2b549a18a4ecb4ae327501.png";
import imgImage2 from "figma:asset/93409b7152ddd246ec2aee506fd669558bae4101.png";
import imgImage3 from "figma:asset/38a5046ad475465f0cd86f7a1e6dfe9e3ba985c2.png";
import imgImage4 from "figma:asset/e9ecee3569abd3082ac9a255d25eb122fa46fcd9.png";
import imgImage5 from "figma:asset/d3e5ef827b875025244740c13b6a1a5f889ef5b4.png";
import imgImage6 from "figma:asset/4be631603248a1f0ec96ced5898f1adef44b965b.png";

function Company() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[124px]" data-name="Company">
      <div className="relative shrink-0 size-[32px]" data-name="Logo">
        <img alt="Logomark" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px] w-[172px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Méridien Avocats</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-[#22150d] content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Prendre rendez-vous</p>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <nav className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Le cabinet</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Nos expertises</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">L’équipe</p>
      </div>
      <PrimaryButton />
    </nav>
  );
}

function Menu() {
  return (
    <div className="backdrop-blur-[35px] bg-[#fafafa] content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-[1226px]" data-name="Menu">
      <Company />
      <Buttons />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" data-name="Content">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#fafafa] text-[64px] tracking-[-1.28px] w-[min-content]">
        <h1 className="block leading-[1.1] whitespace-pre-wrap">Votre partenaire stratégique en droit des affaires.</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-[rgba(250,250,250,0.9)] tracking-[-0.12px] w-[960px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Sécuriser vos ambitions, défendre vos intérêts. Méridien Avocats vous accompagne à chaque étape de la vie de votre entreprise avec des solutions juridiques sur mesure, pragmatiques et innovantes.</p>
      </div>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <button className="bg-[#fafafa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Prendre rendez-vous</p>
      </div>
    </button>
  );
}

function SecondaryButton() {
  return (
    <button className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border-2 border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[18px] text-left tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Découvrir nos expertises</p>
      </div>
    </button>
  );
}

function Buttons1() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <PrimaryButton1 />
      <SecondaryButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="absolute content-stretch flex flex-col gap-[48px] items-center left-0 px-[64px] py-[120px] top-0 w-[1280px]" data-name="Hero 2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero2} />
      <Menu />
      <Content />
      <Buttons1 />
    </section>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">LE CABINET</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">{`L'excellence juridique au service de votre croissance.`}</h3>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <section className="absolute content-stretch flex flex-col gap-[32px] h-[469px] items-start left-0 not-italic px-[64px] py-[120px] top-[707px] w-[1280px]" data-name="Text 5">
      <Headline />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Fondé sur la conviction que le droit est un levier de création de valeur, Méridien Avocats est un cabinet dédié exclusivement au droit des affaires. Nous conseillons et défendons une clientèle variée : créateurs d'entreprises, PME, ETI et groupes internationaux.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Notre approche est simple : comprendre votre modèle économique pour vous apporter des réponses juridiques parfaitement alignées avec votre stratégie commerciale. Nous ne nous contentons pas de vous exposer les risques ; nous construisons avec vous des solutions pour les surmonter.</p>
      </div>
    </section>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">NOS EXPERTISES</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Une maîtrise pointue pour sécuriser et optimiser chaque aspect de vos opérations.</h3>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <section className="absolute h-[235px] left-0 top-[1176px] w-[1280px]" data-name="Text 6">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[120px] relative size-full">
        <Headline1 />
      </div>
    </section>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">{`Droit des Sociétés & Fusions-Acquisitions (M&A)`}</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0">De la création de votre structure à sa transmission, nous vous accompagnons dans toutes vos opérations de haut de bilan :</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">{`Création d'entreprise et pactes d'actionnaires.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Opérations de levée de fonds et capital-risque.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Acquisitions, fusions, et restructurations (LBO, MBO).</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">Gouvernance et secrétariat juridique courant.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text />
    </div>
  );
}

function Row() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center pb-[40px] pt-[120px] px-[64px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Content1 />
          </div>
          <div aria-hidden="true" className="flex-[1_0_0] h-[432px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
          </div>
        </div>
      </div>
    </li>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">{`Contentieux des Affaires & Arbitrage`}</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0">{`Quand le conflit est inévitable, nous défendons vos intérêts avec pugnacité devant l'ensemble des juridictions commerciales et civiles :`}</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Rupture brutale des relations commerciales.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Concurrence déloyale et litiges entre associés.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">{`Recouvrement de créances et voies d'exécution.`}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">Modes alternatifs de règlement des litiges (Médiation, Arbitrage).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text1 />
    </div>
  );
}

function Row1() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center pb-[120px] pt-[40px] px-[64px] relative w-full">
          <div aria-hidden="true" className="flex-[1_0_0] h-[432px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Content2 />
          </div>
        </div>
      </div>
    </li>
  );
}

function Feature() {
  return (
    <ul className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[1411px] w-[1280px]" data-name="Feature 3">
      <Row />
      <Row1 />
    </ul>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">{`Contrats Commerciaux & Droit Économique`}</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0">Nous sécurisons vos relations avec vos partenaires, fournisseurs et clients :</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Rédaction et négociation de contrats (CGV, CGA, distribution, franchise).</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Conformité réglementaire et droit de la consommation.</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">Accompagnement dans la transition numérique et contrats informatiques.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text2 />
    </div>
  );
}

function Row2() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center pb-[40px] pt-[120px] px-[64px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Content3 />
          </div>
          <div aria-hidden="true" className="flex-[1_0_0] h-[432px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </li>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Droit Social</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] mb-0">Un conseil expert pour la gestion de vos ressources humaines :</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Rédaction de contrats de travail et avenants.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Procédures de licenciement et ruptures conventionnelles.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Gestion des relations avec les instances représentatives du personnel (CSE).</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">{`Contentieux devant le Conseil de Prud'hommes.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[559px]" data-name="Content">
      <Text3 />
    </div>
  );
}

function Row3() {
  return (
    <li className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center pb-[120px] pt-[40px] px-[64px] relative w-full">
          <div aria-hidden="true" className="flex-[1_0_0] h-[432px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Content4 />
          </div>
        </div>
      </div>
    </li>
  );
}

function Feature1() {
  return (
    <ul className="absolute content-stretch flex flex-col h-[967px] items-center justify-center left-0 top-[2595px] w-[1280px]" data-name="Feature 4">
      <Row2 />
      <Row3 />
    </ul>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">L’EQUIPE</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Des experts dédiés à votre réussite.</h3>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <section className="absolute h-[211px] left-0 top-[3562px] w-[1280px]" data-name="Text 7">
      <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic px-[64px] py-[120px] relative size-full">
        <Headline2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <p className="leading-[1.45] whitespace-pre-wrap">{`Notre équipe est composée d'avocats passionnés et expérimentés, travaillant en synergie pour couvrir l'ensemble de vos besoins.`}</p>
        </div>
      </div>
    </section>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Alain Chambert</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Département Corporate & M&A`}</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 1">
      <div aria-hidden="true" className="aspect-[362.6666564941406/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
      </div>
      <Text4 />
    </li>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Alicia Morein</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Département Contentieux & Arbitrage`}</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 2">
      <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
      </div>
      <Text8 />
    </li>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2] whitespace-pre-wrap">Anaïs Delandre</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Département Droit Social & Economique`}</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 3">
      <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
      </div>
      <Text9 />
    </li>
  );
}

function FeatureCards() {
  return (
    <ul className="absolute content-stretch flex gap-[32px] h-[713px] items-start justify-center left-0 px-[64px] py-[120px] top-[3773px] w-[1280px]" data-name="Feature cards 2">
      <Card />
      <Card1 />
      <Card2 />
    </ul>
  );
}

function Headline3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">PRENDRE RENDEZ-VOUS</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Contactez notre équipe pour une première consultation confidentielle.</h3>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <section className="absolute content-stretch flex flex-col h-[355px] items-start left-0 px-[64px] py-[120px] top-[4486px] w-[1280px]" data-name="Text 8">
      <Headline3 />
    </section>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]" data-name="Company">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.48px] w-[200px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Méridien Avocats</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Company1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45] whitespace-pre-wrap">Votre partenaire stratégique en droit des affaires.</p>
      </div>
    </div>
  );
}

function SocialLink() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_244)" id="Social link 1">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_244">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink1() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_241)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="#FAFAFA" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, #22150D)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, #22150D)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, #22150D)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink2() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social link 3">
          <path d={svgPaths.pdaf0200} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function SocialLinks() {
  return (
    <nav className="content-stretch cursor-pointer flex gap-[24px] items-center relative shrink-0" data-name="Social links">
      <SocialLink />
      <SocialLink1 />
      <SocialLink2 />
    </nav>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text11 />
      <SocialLinks />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Site</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[167px]" data-name="Column 1">
      <Header />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Le cabinet</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Nos expertises</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">L’équipe</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Prendre rendez-vous</p>
      </div>
    </nav>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Contact</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[170px]" data-name="Column 2">
      <Header1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">06 25 15 33 33</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">meridien@avocats.fr</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">25 rue des lévriers</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">75005, Paris</p>
      </div>
    </nav>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Légal</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 3">
      <Header2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">CGU</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">CGV</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Mentions légales</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Confidentialité</p>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="Nav">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[120px] items-start min-h-px min-w-px py-[80px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-solid border-t inset-0 pointer-events-none" />
      <Content5 />
      <Nav />
    </div>
  );
}

function Footer() {
  return (
    <footer className="absolute bg-[#22150d] content-stretch flex items-center justify-center left-0 overflow-clip pb-[120px] px-[64px] top-[4841px] w-[1280px]" data-name="Footer 2">
      <Container />
    </footer>
  );
}

export default function MeridienAvocatsMaquette() {
  return (
    <div className="bg-white relative size-full" data-name="Méridien Avocats Maquette">
      <Hero />
      <Text5 />
      <Text6 />
      <Feature />
      <Feature1 />
      <Text7 />
      <FeatureCards />
      <Text10 />
      <Footer />
    </div>
  );
}