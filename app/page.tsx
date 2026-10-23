import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(905) 518-1811";
const TEL = "tel:+19055181811";
const SMS = "sms:+19055181811";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Ambient%20HVAC&query_place_id=ChIJn-oBAsKV7YwRcd4mBnZhFhk";
const IG = "https://www.instagram.com/ambienthvacinc";

const services = [
  { icon: "flame", title: "Furnace Repair", text: "Leaking furnace, no heat, strange noises. We find the cause, like a failed condensate pump, replace the part, clean up and explain what happened." },
  { icon: "snow", title: "AC Repair & Installation", text: "We get older air conditioners running again when they can be saved, and install new systems when they can't. You get an honest call either way." },
  { icon: "wrench", title: "Furnace Maintenance & Inspection", text: "A thorough yearly tune-up and safety check, plus straight advice on filter changes so your furnace lasts longer and runs cleaner." },
  { icon: "drop", title: "Condensate Pump Replacement", text: "Water pooling around the furnace is often a failed condensate pump. We replace it the same visit and make sure the drain runs clear." },
  { icon: "search", title: "HVAC Inspections", text: "Buying a home or worried about an older system? We inspect your heating and cooling equipment and tell you plainly what shape it's in." },
];

const reviews = [
  { name: "Leonardo G.", job: "Furnace leak", text: "Mustafa diagnosed a failed pump, replaced it, cleaned everything up and explained exactly what had gone wrong." },
  { name: "Baadi A.", job: "Furnace maintenance", text: "A really thorough inspection, with honest tips on how often to change the filter." },
  { name: "Ali I.", job: "Service for my dad", text: "Kind, fast and professional help for my father. Exactly who you want in your parents' home." },
  { name: "Abdula A.", job: "Old AC repair", text: "Got our long-dead old AC running again, at a great price." },
  { name: "Melissa K.", job: "Repeat customer", text: "Efficient, on time and always friendly. This is the first number I call." },
];

const steps = [
  { title: "Call, day or night", text: "Our line is open 24 hours. Tell us what's happening and how urgent it is." },
  { title: "We come out fast", text: "Emergencies like a gas shut-off get treated as emergencies, not booked for next week." },
  { title: "Diagnose and explain", text: "We find the real cause and walk you through it in plain terms before fixing anything." },
  { title: "Fix and tidy up", text: "Repair done, area cleaned, and simple tips so it doesn't happen again." },
];

const faqs = [
  { q: "Are you really available 24/7?", a: "Yes. Our phone line is open 24 hours a day, 7 days a week. Call " + PHONE + " any time, including nights and weekends." },
  { q: "Enbridge shut off my gas. Can you help?", a: "Yes. After a gas shut-off or a leak finding, call us right away. One customer was told help would come at 9 or 10 p.m., and we arrived much sooner. We find and fix the problem so your gas can be turned back on." },
  { q: "What areas do you serve?", a: "We're based on the Stoney Creek side of Hamilton and serve Hamilton and Stoney Creek homes. If you're nearby and not sure, just call and ask." },
  { q: "My furnace is leaking water. What's wrong?", a: "Often it's a failed condensate pump or a blocked drain. It's a common, fixable problem. Turn off the furnace if water is near anything electrical, and call us." },
  { q: "Can you fix an old air conditioner, or do I need a new one?", a: "We'll always look at a repair first. We've brought long-dead older units back to life. If replacement makes more sense, we'll tell you honestly and explain why." },
  { q: "Who will come to my home?", a: "Most jobs are led by our technician Mustafa, who customers describe as fast, honest and great at explaining things." },
  { q: "How often should I change my furnace filter?", a: "It depends on the filter and your home. We'll give you a schedule that suits your system during a maintenance visit." },
];

const gallery = [
  { src: "/images/p7.jpg", alt: "Ductless mini-split outdoor unit mounted on a white wall" },
  { src: "/images/p3.jpg", alt: "Wall-mounted tankless unit with copper piping" },
  { src: "/images/p5.jpg", alt: "Central air conditioner among ferns in a side yard" },
  { src: "/images/p15.jpg", alt: "Inside a furnace during a repair" },
  { src: "/images/p9.jpg", alt: "A. O. Smith tank checked with a level after install" },
  { src: "/images/p10.jpg", alt: "Mechanical room in a garage with new gas and water piping" },
  { src: "/images/p8.jpg", alt: "Gas line run along a stone wall" },
  { src: "/images/p13.jpg", alt: "Gas fireplace in a stone surround" },
  { src: "/images/p12.jpg", alt: "Outdoor heat pump unit beside a fence" },
  { src: "/images/p4.jpg", alt: "Older air conditioner condenser being serviced" },
  { src: "/images/p14.jpg", alt: "Exterior vent termination on siding" },
  { src: "/images/p11.jpg", alt: "Window unit opening on a brick wall during a job" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Ambient HVAC Inc.",
  telephone: "+1-905-518-1811",
  image: "/images/p2.jpg",
  areaServed: ["Hamilton, ON", "Stoney Creek, ON"],
  address: { "@type": "PostalAddress", addressLocality: "Hamilton", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 19 },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [IG],
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="bg-navy text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 md:justify-start md:px-6">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" /></span>
          <span>Open 24 hours, 7 days a week · Emergency gas service</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Ambient HVAC home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="flame" className="h-5 w-5" /></span>
            <span className="font-heading text-xl font-extrabold text-navy">Ambient <span className="text-brand">HVAC</span></span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 text-[15px] font-semibold lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <a href={TEL} className="ml-auto hidden font-bold text-navy md:inline lg:ml-0">{PHONE}</a>
          <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="h-4 w-4" /> Call 24/7</a>
          <a href={TEL} className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-brand text-white md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-navy">24/7 Furnace, AC &amp; Gas Repair in Hamilton and Stoney Creek</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">When the heat quits or the gas gets shut off, Ambient HVAC treats your emergency like one. Fast, honest heating and cooling help, explained in plain terms.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn btn-ghost"><Icon name="chat" className="h-5 w-5" /> Text us</a>
            </div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-muted hover:text-ink">
              <Stars className="h-5 w-5" />
              <span><strong className="text-ink">5.0</strong> from 19 Google reviews</span>
              <span aria-hidden="true">·</span><span>Open 24/7</span>
              <span aria-hidden="true">·</span><span>Same-day emergency help</span>
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <img src="/images/p2.jpg" alt="Ambient HVAC technician working on a furnace" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-xl" />
            <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-line">
              <Stars className="h-4 w-4" />
              <p className="mt-1.5 text-[15px] leading-snug">&ldquo;Treated our gas leak as an emergency and came far sooner than we were told.&rdquo;</p>
              <p className="mt-1 text-sm font-semibold text-muted">Katie-Lynn M. · Google</p>
            </div>
          </div>
        </section>

        <section aria-label="Why choose Ambient HVAC" className="bg-tint">
          <ul className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-8 gap-y-5 px-5 py-8 md:px-6">
            {[
              ["clock", "Open 24 hours", "Every day of the week"],
              ["thumb", "5.0 Google rating", "19 reviews"],
              ["bolt", "Emergency response", "Gas shut-offs and no heat"],
              ["chat", "Plain explanations", "No jargon, no pressure"],
            ].map(([i, t, s]) => (
              <li key={t} className="flex items-center gap-3">
                <Icon name={i} className="h-7 w-7 shrink-0 text-brand" />
                <span><span className="block font-bold">{t}</span><span className="block text-sm text-muted">{s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-3xl text-navy md:text-4xl">Heating, cooling and gas services</h2>
              <p className="mt-4 text-muted">Repairs, installs and maintenance for Hamilton homes, with emergency help any hour.</p>
              <div className="mt-8 rounded-3xl bg-brand p-7 text-white">
                <Icon name="bolt" className="h-8 w-8" />
                <h3 className="mt-4 text-2xl">Emergency gas service</h3>
                <p className="mt-3 text-white/90">Enbridge found a leak and shut off your gas? Call us right away. We respond the same day, find the leak, repair it and get your heat and hot water back.</p>
                <a href={TEL} className="btn mt-6 bg-white text-brand-deep hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              </div>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {services.map((s) => (
                <li key={s.title} className="reveal flex gap-5 py-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <div>
                    <h3 className="text-xl text-navy">{s.title}</h3>
                    <p className="mt-2 text-[17px] text-muted">{s.text}</p>
                    <a href={TEL} className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl text-navy md:text-4xl">Rated 5.0 from 19 Google reviews</h2>
                <p className="mt-3 text-muted">Hamilton families on what it's like to call Ambient.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <figure className="reveal rounded-3xl bg-navy p-8 text-white lg:row-span-2">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-5 font-heading text-2xl font-bold leading-snug">&ldquo;Enbridge found two leaks and shut off our gas. We were told help would come around 9 or 10 p.m. Ambient treated it as the emergency it was and got here far sooner.&rdquo;</blockquote>
                <figcaption className="mt-6 text-white/75">Katie-Lynn M. · Emergency gas leak</figcaption>
              </figure>
              {reviews.map((r) => (
                <figure key={r.name} className="reveal lift rounded-2xl bg-white p-6 ring-1 ring-line">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 text-[16px]">{r.text}</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="font-bold">{r.name}</span> <span className="text-muted">· {r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <img src="/images/p6.jpg" alt="Ambient HVAC service truck parked at a job" className="reveal aspect-[4/5] w-full rounded-3xl object-cover lg:order-2" />
            <div className="reveal">
              <h2 className="text-3xl text-navy md:text-4xl">Fast, honest, and clear about what's wrong</h2>
              <p className="mt-5">Ambient HVAC Inc. is a Hamilton heating and cooling company built around one idea: when your heat, air or gas stops working, you shouldn't have to wait until next week. Our phone is answered 24 hours a day.</p>
              <p className="mt-4">Most jobs are led by our technician Mustafa. Customers describe him the same way again and again: fast, honest, and patient enough to explain everything in plain terms. He'll show you the failed part, tell you why it failed, and leave the area clean.</p>
              <p className="mt-4">We look after a lot of repeat customers and their families, from first-time homeowners to people calling on behalf of an aging parent. Being kind and respectful in someone's home matters to us as much as the repair.</p>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-brand"><Icon name="instagram" className="h-5 w-5" /> See our latest jobs on Instagram</a>
            </div>
          </div>
        </section>

        <section id="process" className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal text-3xl md:text-4xl">What happens when you call</h2>
            <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-heading text-xl font-extrabold">{i + 1}</span>
                  <div><h3 className="text-xl">{s.title}</h3><p className="mt-1.5 text-white/75">{s.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal text-3xl text-navy md:text-4xl">Recent jobs</h2>
            <p className="reveal mt-4 max-w-2xl text-muted">Real photos from Ambient HVAC service calls and installs around Hamilton.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((g, i) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className={`w-full rounded-2xl object-cover ${i === 5 ? "aspect-[4/5] md:col-span-2 md:aspect-auto md:h-full" : "aspect-[4/5]"}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="text-3xl text-navy md:text-4xl">Serving Hamilton and Stoney Creek</h2>
              <p className="mt-4">We're based on the Stoney Creek side of Hamilton and work across the city. Not sure if we reach you? Call or text, day or night.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Hamilton", "Stoney Creek", "Hamilton Mountain"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[15px] font-semibold ring-1 ring-line"><Icon name="pin" className="h-4 w-4 text-brand" /> {a}</li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 font-semibold"><Icon name="clock" className="h-5 w-5 text-brand" /> Open 24 hours, Monday to Sunday</p>
            </div>
            <iframe title="Map of Stoney Creek and Hamilton, Ontario" src="https://maps.google.com/maps?q=Stoney%20Creek%2C%20Hamilton%2C%20Ontario&z=11&output=embed" className="h-96 w-full rounded-3xl border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal text-3xl text-navy md:text-4xl">Questions we get a lot</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-14 text-white md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl">No heat, no AC, no gas? Call now.</h2>
              <p className="mt-2 text-white/90">{PHONE} · Answered 24 hours a day</p>
            </div>
            <a href={TEL} className="btn bg-white text-lg text-brand-deep hover:bg-brand-soft"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-28 pt-14 text-white/80 md:pb-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div>
            <p className="font-heading text-xl font-extrabold text-white">Ambient HVAC Inc.</p>
            <p className="mt-3 text-[15px]">24/7 heating, cooling and gas service for Hamilton and Stoney Creek.</p>
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mt-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Icon name="instagram" className="h-5 w-5" /></a>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li><a href={TEL} className="hover:text-white">{PHONE}</a></li>
              <li>Hamilton &amp; Stoney Creek, Ontario</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google reviews</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Hours</p>
            <p className="mt-3 text-[15px]">Open 24 hours<br />Monday to Sunday</p>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              <li><a href="#services" className="hover:text-white">Emergency Gas Service</a></li>
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-5 pt-6 text-sm text-white/60 md:px-6">© {new Date().getFullYear()} Ambient HVAC Inc.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call 24/7</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="chat" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
