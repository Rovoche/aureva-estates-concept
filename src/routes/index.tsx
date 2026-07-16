import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: AurevaHome,
});

// --- Media -----------------------------------------------------------------

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/26078870/11929967_3840_2160_30fps.mp4";
const AERIAL_VIDEO =
  "https://videos.pexels.com/video-files/33125178/14118651_2160_3840_30fps.mp4";
const INTERIOR_WALK =
  "https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4";
const BEDROOM_VIDEO =
  "https://videos.pexels.com/video-files/29466040/12684301_1920_1080_60fps.mp4";
const LIVING_VIDEO =
  "https://videos.pexels.com/video-files/18531410/18531410-uhd_3840_2160_60fps.mp4";

const img = (id: string, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// --- Data ------------------------------------------------------------------

type Property = {
  name: string;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  price: string;
  copy: string;
  image: string;
};

const PROPERTIES: Property[] = [
  {
    name: "Maison Osborne",
    location: "Osborne Foreshore, Ikoyi",
    beds: 5,
    baths: 6,
    sqm: 720,
    price: "₦1.85B",
    copy: "A private waterfront residence on the Lagoon's quieter reach, with a floating stair in Iroko and a west-facing pool.",
    image: img("31032367"),
  },
  {
    name: "The Banana Residence",
    location: "Banana Island",
    beds: 6,
    baths: 8,
    sqm: 980,
    price: "₦3.20B",
    copy: "A gated compound arranged around a courtyard garden, with staff quarters, cinema and a 22-metre lap pool.",
    image: img("17174767"),
  },
  {
    name: "Villa Cordelia",
    location: "Parkview, Ikoyi",
    beds: 4,
    baths: 5,
    sqm: 610,
    price: "₦1.10B",
    copy: "A low-slung modernist villa framed by mature palms, with a walled kitchen garden and detached studio.",
    image: img("4878949"),
  },
  {
    name: "Sky House N19",
    location: "Eko Atlantic, Victoria Island",
    beds: 3,
    baths: 4,
    sqm: 340,
    price: "₦780M",
    copy: "A full-floor penthouse on the nineteenth level, wrapped in floor-to-ceiling glass with an Atlantic prospect.",
    image: img("31496836"),
  },
  {
    name: "The Milverton",
    location: "Old Ikoyi",
    beds: 5,
    baths: 6,
    sqm: 690,
    price: "₦1.45B",
    copy: "A restored 1960s residence reworked with a limestone loggia, guest pavilion and a fifty-metre allée of frangipani.",
    image: img("37253217"),
  },
  {
    name: "Palm Reach 07",
    location: "Lekki Peninsula",
    beds: 4,
    baths: 5,
    sqm: 520,
    price: "₦620M",
    copy: "A beach-side pavilion residence with an outdoor kitchen, plunge pool, and a private walk to the shoreline.",
    image: img("19219055"),
  },
];

type Development = {
  name: string;
  place: string;
  status: string;
  copy: string;
  image: string;
};

const DEVELOPMENTS: Development[] = [
  {
    name: "The Osborne Reserve",
    place: "Osborne Foreshore II",
    status: "Under construction — Q3 2027",
    copy: "Twelve waterfront residences, each with a private mooring and a landscaped roof terrace by Studio Awele.",
    image: img("30808686"),
  },
  {
    name: "Ilashe Sands",
    place: "Ilashe Island",
    status: "Reservations open",
    copy: "A collection of nine beach houses arranged along a private stretch of Atlantic coast, half an hour by boat.",
    image: img("30808684"),
  },
  {
    name: "Marina House",
    place: "Eko Atlantic",
    status: "Selling — Phase II",
    copy: "A twenty-two storey residential tower shaped by the ocean wind, with a member's lounge on the twentieth floor.",
    image: img("27822509"),
  },
];

type Neighbourhood = {
  name: string;
  note: string;
  copy: string;
  image: string;
};

const NEIGHBOURHOODS: Neighbourhood[] = [
  {
    name: "Ikoyi",
    note: "Old Lagos, quietly reworked",
    copy: "Broad, tree-lined streets, walled compounds and a rhythm that has remained largely undisturbed for six decades.",
    image: img("12039376"),
  },
  {
    name: "Banana Island",
    note: "The private address",
    copy: "A single causeway, one gate, and the highest concentration of purpose-built residences in West Africa.",
    image: img("37921899"),
  },
  {
    name: "Eko Atlantic",
    note: "New land, considered",
    copy: "Ten square kilometres reclaimed from the sea, master-planned block by block, with the ocean on three sides.",
    image: img("19219055"),
  },
  {
    name: "Lekki Peninsula",
    note: "Where the city meets the coast",
    copy: "A slower shoreline of gated estates, garden restaurants and long stretches of quiet, uninterrupted beach.",
    image: img("4878949"),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They understood, before we did, that we were not buying a house. We were buying a way of arriving home.",
    name: "Adaeze O.",
    role: "Client, Ikoyi residence",
  },
  {
    quote:
      "The process was unhurried and exact. Six months later, I am still finding details in the house that were quietly considered on our behalf.",
    name: "Tunde A.",
    role: "Client, Banana Island",
  },
  {
    quote:
      "For a foreign buyer, discretion mattered more than anything. Aureva were the only firm in Lagos who understood that in the first meeting.",
    name: "M. Laurent",
    role: "Private client, Paris",
  },
];

const FAQ = [
  {
    q: "Do you represent buyers who are not based in Lagos?",
    a: "Yes. A significant portion of our clients live abroad. We conduct viewings on their behalf, prepare condition reports and coordinate every step of the acquisition remotely, from first visit to handover.",
  },
  {
    q: "Are your listings publicly advertised?",
    a: "Some are. A considerable number of the residences we transact are held privately and shown by introduction only. If you are searching for a specific address, please write to us.",
  },
  {
    q: "How do you value a property?",
    a: "Each residence is assessed on its own terms — location, provenance, build quality, land tenure and comparable sales. We do not publish price-per-square-metre figures; we believe they flatten a considered market.",
  },
  {
    q: "Do you assist with residency and structuring for foreign buyers?",
    a: "We work alongside a small group of trusted lawyers and tax advisers in Lagos, London and Dubai. We are happy to make an introduction when the moment is right.",
  },
  {
    q: "What is your fee structure?",
    a: "Our fees are transparent and agreed in writing before any engagement begins. We do not accept referral fees from developers, so the counsel you receive is entirely our own.",
  },
];

// --- Reveal hook -----------------------------------------------------------

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .img-mask");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// --- Page ------------------------------------------------------------------

function AurevaHome() {
  useReveal();
  return (
    <div className="bg-ivory text-charcoal font-sans">
      <Nav />
      <Hero />
      <About />
      <FeaturedProperties />
      <LuxuryLiving />
      <Developments />
      <Investment />
      <Neighbourhoods />
      <WhyAureva />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <RovocheFooterSignature />
      <FloatingPill />
    </div>
  );
}

// --- Nav -------------------------------------------------------------------

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color,color] duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a
          href="#top"
          className={`font-serif text-xl tracking-[0.32em] ${
            scrolled ? "text-warm-black" : "text-ivory mix-blend-difference"
          }`}
        >
          AUREVA
        </a>
        <nav
          className={`hidden gap-9 text-[11px] font-medium uppercase tracking-[0.22em] md:flex ${
            scrolled ? "text-charcoal" : "text-ivory mix-blend-difference"
          }`}
        >
          <a href="#properties" className="link-underline">Properties</a>
          <a href="#living" className="link-underline">Living</a>
          <a href="#developments" className="link-underline">Developments</a>
          <a href="#neighbourhoods" className="link-underline">Neighbourhoods</a>
          <a href="#contact" className="link-underline">Contact</a>
        </nav>
        <a
          href="#contact"
          className={`hidden text-[11px] font-medium uppercase tracking-[0.22em] md:inline-flex md:items-center md:gap-2 ${
            scrolled ? "text-warm-black" : "text-ivory mix-blend-difference"
          }`}
        >
          <span>Private Enquiry</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

// --- Hero ------------------------------------------------------------------

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-warm-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={img("31032367", 1920)}
      />
      <div className="absolute inset-0 bg-warm-black/35" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.35) 0%, rgba(20,18,15,0) 30%, rgba(20,18,15,0) 60%, rgba(20,18,15,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-28 md:px-12 md:py-32">
        <div />
        <div className="max-w-4xl">
          <h1 className="font-serif text-[13vw] leading-[0.95] tracking-[-0.02em] text-ivory md:text-[7.2vw]">
            Exceptional Homes.
            <br />
            <span className="italic font-light text-gold-soft">Extraordinary Living.</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-[13px] leading-relaxed text-ivory/80 md:text-sm">
            A private practice representing waterfront residences, penthouses and heritage
            villas across Lagos — introduced quietly, transacted with care.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#properties"
              className="group inline-flex items-center justify-between gap-6 border border-ivory/60 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-ivory hover:text-warm-black"
            >
              <span>View the Collection</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/80 link-underline"
            >
              Arrange a Viewing
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-ivory/60 md:block">
        Lagos · Est. 2014
      </div>
      <div className="absolute bottom-6 right-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-ivory/60 md:block">
        Scroll ↓
      </div>
    </section>
  );
}

// --- About -----------------------------------------------------------------

function About() {
  return (
    <section className="relative border-b border-hairline bg-ivory">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:gap-12 md:px-10 md:py-40">
        <div className="md:col-span-4">
          <p className="eyebrow reveal">A Private Practice</p>
          <div className="gold-line mt-6 w-16" />
        </div>
        <div className="md:col-span-8">
          <h2 className="reveal max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[3.75rem]">
            We do not sell houses. We introduce a very small number of people
            to the residences that will shape the next chapter of their lives.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            <p className="reveal text-[15px] leading-[1.85] text-charcoal/85">
              Founded in Ikoyi in 2014, AUREVA represents a considered portfolio of
              waterfront residences, heritage villas and full-floor penthouses across
              Lagos. Our work sits at the intersection of architecture, provenance and
              private counsel.
            </p>
            <p className="reveal text-[15px] leading-[1.85] text-charcoal/85">
              A significant part of our practice is never advertised. Introductions
              are made in person, correspondence is discreet, and every viewing is
              accompanied. We prefer to work with fewer clients, and with more time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Featured properties ---------------------------------------------------

function FeaturedProperties() {
  return (
    <section id="properties" className="relative border-b border-hairline bg-stone-warm">
      <div className="mx-auto max-w-[1440px] px-6 pt-28 pb-16 md:px-10 md:pt-40">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal">The Collection · 2026</p>
            <h2 className="reveal mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
              Six residences, quietly on the market.
            </h2>
          </div>
          <p className="reveal max-w-sm text-[14px] leading-relaxed text-charcoal/75">
            A cross-section of what we are currently representing across Ikoyi,
            Banana Island, Eko Atlantic and the Lekki Peninsula. A further
            portfolio is available privately.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-28">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={p.name} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const offset = index % 2 === 1 ? "md:mt-24" : "";
  return (
    <article className={`group ${offset}`}>
      <div className="img-mask relative aspect-[4/5] w-full overflow-hidden bg-sand">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="reveal mt-8 flex items-start justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-ink">
            {property.location}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-tight md:text-[2rem]">
            {property.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-ink">Guide</p>
          <p className="mt-3 font-serif text-xl md:text-2xl">{property.price}</p>
        </div>
      </div>
      <p className="reveal mt-5 max-w-md text-[14px] leading-[1.8] text-charcoal/80">
        {property.copy}
      </p>
      <div className="reveal mt-6 flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-ink">
        <span>{property.beds} Bed</span>
        <span className="h-3 w-px bg-hairline" />
        <span>{property.baths} Bath</span>
        <span className="h-3 w-px bg-hairline" />
        <span>{property.sqm} m²</span>
      </div>
      <a
        href="#contact"
        className="reveal mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-black"
      >
        <span className="link-underline">View Residence</span>
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

// --- Luxury Living ---------------------------------------------------------

function LuxuryLiving() {
  return (
    <section id="living" className="relative bg-ivory">
      <div className="relative h-[70svh] w-full overflow-hidden md:h-[92svh]">
        <video
          className="h-full w-full object-cover"
          src={LIVING_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-warm-black/25" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-14">
          <p className="eyebrow text-ivory/70">A Way of Living</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] text-ivory md:text-7xl">
            The <span className="italic font-light">quiet hours</span> are the
            ones we design for.
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <div className="img-mask aspect-[4/5] overflow-hidden bg-sand">
            <img
              src={img("6957094")}
              alt="A quiet Lagos interior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="reveal mt-6 max-w-sm text-[13px] leading-relaxed text-muted-ink">
            A drawing room in an Ikoyi residence. Late afternoon, no direction to look.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <p className="eyebrow reveal">On Interiors</p>
          <h3 className="reveal mt-6 font-serif text-3xl leading-[1.1] md:text-5xl">
            A house is a private argument for how you spend your days.
          </h3>
          <p className="reveal mt-8 max-w-lg text-[15px] leading-[1.9] text-charcoal/85">
            We work with a small circle of architects, interior designers and
            landscape practices whose work has quietly shaped Lagos over the
            past decade. When it makes sense, we introduce them. When it
            doesn't, we say so.
          </p>

          <div className="reveal mt-14 grid grid-cols-2 gap-8">
            <div className="img-mask aspect-[3/4] overflow-hidden bg-sand">
              <img
                src={img("6663039")}
                alt="Bedroom interior"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-mask aspect-[3/4] mt-16 overflow-hidden bg-sand">
              <img
                src={img("6315804")}
                alt="Kitchen interior"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={INTERIOR_WALK}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}

// --- Developments ----------------------------------------------------------

function Developments() {
  return (
    <section id="developments" className="border-y border-hairline bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow reveal">Developments</p>
            <h2 className="reveal mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
              Three projects, currently in build.
            </h2>
          </div>
          <p className="reveal max-w-sm text-[14px] leading-relaxed text-charcoal/75">
            We represent a limited number of developments — each chosen for its
            architect, its site, and the discipline of its plans.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {DEVELOPMENTS.map((d, i) => (
            <div
              key={d.name}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14 ${
                i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="img-mask md:col-span-7 aspect-[3/2] overflow-hidden bg-sand">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow reveal">{d.status}</p>
                <h3 className="reveal mt-5 font-serif text-3xl leading-[1.05] md:text-5xl">
                  {d.name}
                </h3>
                <p className="reveal mt-3 text-[13px] uppercase tracking-[0.22em] text-muted-ink">
                  {d.place}
                </p>
                <p className="reveal mt-7 max-w-md text-[15px] leading-[1.85] text-charcoal/85">
                  {d.copy}
                </p>
                <a
                  href="#contact"
                  className="reveal mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-warm-black"
                >
                  <span className="link-underline">Request the Plans</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Investment ------------------------------------------------------------

function Investment() {
  return (
    <section className="relative overflow-hidden bg-warm-black text-ivory">
      <div className="absolute inset-0 opacity-40">
        <video
          className="h-full w-full object-cover"
          src={AERIAL_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="absolute inset-0 bg-warm-black/60" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:gap-12 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <p className="eyebrow reveal text-gold-soft">Investment Counsel</p>
          <h2 className="reveal mt-6 font-serif text-4xl leading-[1.05] text-ivory md:text-6xl">
            For those buying with the next generation in mind.
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="reveal max-w-lg text-[15px] leading-[1.9] text-ivory/80">
            Approximately a third of our clients acquire property in Lagos as a
            long-hold asset. We provide considered counsel on rental yield,
            currency exposure, tenure and eventual disposition — quietly, and
            over a longer horizon than most brokers are willing to keep.
          </p>

          <div className="reveal mt-14 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-ivory/15 pt-10 sm:grid-cols-2">
            {[
              {
                t: "Waterfront hold",
                c: "Ikoyi & Banana Island — appreciation led, low turnover.",
              },
              {
                t: "Yielding penthouses",
                c: "Eko Atlantic & Victoria Island — corporate lets, USD-linked.",
              },
              {
                t: "Land banking",
                c: "Selected Lekki parcels, held under transparent title.",
              },
              {
                t: "Development co-investment",
                c: "By invitation, alongside two Lagos-based practices.",
              },
            ].map((x) => (
              <div key={x.t}>
                <p className="font-serif text-xl text-ivory">{x.t}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-ivory/60">{x.c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Neighbourhoods --------------------------------------------------------

function Neighbourhoods() {
  return (
    <section id="neighbourhoods" className="border-b border-hairline bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">A Guide to Lagos</p>
          <h2 className="reveal mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
            Four addresses, and what it is like to live in them.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:gap-y-24 lg:grid-cols-4">
          {NEIGHBOURHOODS.map((n, i) => (
            <div key={n.name} className={i % 2 === 1 ? "lg:mt-20" : ""}>
              <div className="img-mask aspect-[3/4] overflow-hidden bg-sand">
                <img
                  src={n.image}
                  alt={n.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="reveal mt-6 text-[11px] uppercase tracking-[0.22em] text-muted-ink">
                0{i + 1} · {n.note}
              </p>
              <h3 className="reveal mt-3 font-serif text-2xl md:text-3xl">{n.name}</h3>
              <p className="reveal mt-3 text-[14px] leading-[1.8] text-charcoal/80">
                {n.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Why Aureva ------------------------------------------------------------

function WhyAureva() {
  const rows = [
    {
      n: "01",
      t: "Fewer clients, longer relationships.",
      c: "We take on a limited number of instructions each year. Most of our clients come to us through a personal introduction, and stay with us across more than one residence.",
    },
    {
      n: "02",
      t: "A private book, always in motion.",
      c: "A considerable portion of Lagos's finest houses never appear on the open market. Our practice is built to know about them, and to know about them first.",
    },
    {
      n: "03",
      t: "Independent counsel, transparent fees.",
      c: "We do not accept referral fees from developers, and we do not double-broker. Our fee is agreed in writing before any work begins, and it does not move.",
    },
    {
      n: "04",
      t: "Quiet, accompanied viewings.",
      c: "Every viewing is arranged privately and attended in person. Cameras are put away. Names are not written down. Nothing that isn't yours to keep leaves the house.",
    },
  ];
  return (
    <section className="border-b border-hairline bg-stone-warm">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:gap-12 md:px-10 md:py-40">
        <div className="md:col-span-4">
          <p className="eyebrow reveal">Why Aureva</p>
          <h2 className="reveal mt-6 font-serif text-4xl leading-[1.05] md:text-[3.25rem]">
            Four principles the practice is built upon.
          </h2>
          <div className="reveal mt-10 img-mask aspect-[4/5] overflow-hidden bg-sand">
            <img
              src={img("8134755")}
              alt="Architectural detail"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="border-t border-hairline">
            {rows.map((r) => (
              <div
                key={r.n}
                className="reveal grid grid-cols-12 gap-6 border-b border-hairline py-10 md:py-14"
              >
                <div className="col-span-2 md:col-span-1">
                  <p className="font-serif text-lg text-gold md:text-xl">{r.n}</p>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-serif text-2xl leading-tight md:text-[2rem]">
                    {r.t}
                  </h3>
                  <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-charcoal/80">
                    {r.c}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ----------------------------------------------------------

function Testimonials() {
  return (
    <section className="border-b border-hairline bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <p className="eyebrow reveal">In their words</p>
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="reveal">
              <div className="gold-line mb-8 w-10" />
              <blockquote className="font-serif text-2xl leading-[1.35] text-warm-black md:text-[1.75rem]">
                <span className="text-gold">“</span>
                {t.quote}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-ink">
                <span className="text-warm-black">{t.name}</span>
                <span className="mx-2 text-hairline">/</span>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ -------------------------------------------------------------------

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-hairline bg-ivory">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:gap-12 md:px-10 md:py-40">
        <div className="md:col-span-4">
          <p className="eyebrow reveal">Enquiries</p>
          <h2 className="reveal mt-6 font-serif text-4xl leading-[1.05] md:text-[3.25rem]">
            A few things clients ask, before we meet.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="border-t border-hairline">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="reveal border-b border-hairline">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-8 py-8 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl leading-tight text-warm-black md:text-[1.6rem]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-2 shrink-0 font-serif text-2xl leading-none text-gold transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden text-[14px] leading-[1.85] text-charcoal/80 transition-[grid-template-rows,padding] duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", paddingBottom: isOpen ? "2rem" : 0 }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-2xl">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Contact ---------------------------------------------------------------

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-warm-black text-ivory">
      <div className="absolute inset-0 opacity-30">
        <video
          className="h-full w-full object-cover"
          src={BEDROOM_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="absolute inset-0 bg-warm-black/70" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:gap-12 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <p className="eyebrow reveal text-gold-soft">Begin a Conversation</p>
          <h2 className="reveal mt-6 font-serif text-4xl leading-[1.02] text-ivory md:text-[4.5rem]">
            Write to us,
            <br />
            <span className="italic font-light text-gold-soft">at your leisure.</span>
          </h2>
          <div className="reveal mt-14 space-y-8 text-[13px] leading-relaxed text-ivory/70">
            <div>
              <p className="eyebrow text-ivory/50">Office</p>
              <p className="mt-3 font-serif text-lg text-ivory">
                12 Bourdillon Road
                <br />
                Ikoyi, Lagos
              </p>
            </div>
            <div>
              <p className="eyebrow text-ivory/50">By appointment</p>
              <p className="mt-3 font-serif text-lg text-ivory">
                Monday — Friday
                <br />
                By prior arrangement
              </p>
            </div>
            <div>
              <p className="eyebrow text-ivory/50">Direct</p>
              <p className="mt-3 font-serif text-lg text-ivory">
                private@aureva.ng
                <br />
                +234 1 000 0000
              </p>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-6 md:col-start-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="reveal grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone (optional)" name="phone" />
            <Field label="Preferred neighbourhood" name="area" />
            <div className="md:col-span-2">
              <Field label="A few lines about what you are looking for" name="note" textarea />
            </div>
          </div>

          <button
            type="submit"
            className="reveal mt-12 inline-flex items-center gap-6 border border-ivory/50 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-ivory hover:text-warm-black"
          >
            <span>{sent ? "Thank you — we will be in touch" : "Send Privately"}</span>
            <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-ivory/50">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="mt-4 w-full resize-none border-b border-ivory/25 bg-transparent pb-3 font-serif text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-gold"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-4 w-full border-b border-ivory/25 bg-transparent pb-3 font-serif text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-gold"
        />
      )}
    </label>
  );
}

// --- Footer ----------------------------------------------------------------

function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pt-28 pb-16 md:px-10 md:pt-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl tracking-[0.28em] md:text-5xl">AUREVA</p>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-muted-ink">
              A private practice representing residences of consequence across
              Lagos. Established Ikoyi, 2014.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow">Practice</p>
            <ul className="mt-6 space-y-3 text-[14px] text-charcoal/85">
              <li><a className="link-underline" href="#top">About</a></li>
              <li><a className="link-underline" href="#properties">Properties</a></li>
              <li><a className="link-underline" href="#developments">Developments</a></li>
              <li><a className="link-underline" href="#neighbourhoods">Neighbourhoods</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-[14px] text-charcoal/85">
              <li>Ikoyi, Lagos</li>
              <li>private@aureva.ng</li>
              <li>+234 1 000 0000</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Notes</p>
            <p className="mt-6 text-[13px] leading-relaxed text-muted-ink">
              AUREVA is a Real Estate Consultancy licensed under the Federal
              Republic of Nigeria. Privacy is maintained as a matter of practice,
              not of policy.
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-hairline pt-8 text-[11px] uppercase tracking-[0.22em] text-muted-ink md:flex-row">
          <p>© 2026 Aureva Estates. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="link-underline" href="#">Privacy</a>
            <a className="link-underline" href="#">Terms</a>
            <a className="link-underline" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Rovoche Signature -----------------------------------------------------

function RovocheFooterSignature() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="gold-line" />
        <div className="py-20 text-center md:py-28">
          <p className="font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-warm-black md:text-6xl">
            Built on Rock.{" "}
            <span className="italic font-light text-charcoal/80">Crafted to Last.</span>
          </p>
          <p className="mt-10 text-[13px] uppercase tracking-[0.32em] text-muted-ink">
            —{" "}
            <a
              href="https://www.rovoche.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Rovoche
            </a>
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-muted-ink/70">
            Demo Experience for AUREVA Estates
          </p>
        </div>
        <div className="gold-line" />
      </div>
      <div className="h-16" />
    </section>
  );
}

// --- Floating Pill ---------------------------------------------------------

function FloatingPill() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-700 ease-out md:bottom-6 md:left-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <a
        href="https://www.rovoche.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full border border-warm-black/10 bg-ivory/70 py-2.5 pl-4 pr-2 shadow-[0_10px_40px_-12px_rgba(20,18,15,0.25)] backdrop-blur-xl"
      >
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-charcoal/80">
          Concept By
        </span>
        <span className="text-[11px] font-semibold tracking-[0.14em] text-warm-black">
          ROVOCHÉ
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          aria-label="Dismiss"
          className="ml-1 grid h-6 w-6 place-items-center rounded-full text-charcoal/60 transition-colors hover:bg-warm-black/5 hover:text-charcoal"
        >
          <span className="text-sm leading-none">×</span>
        </button>
      </a>
    </div>
  );
}
