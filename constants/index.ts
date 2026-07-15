import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, phase1, phase2, phase3, phase4 } from "@/public";

// Navbar
export const navbarItems = [
   {
      id: 4,
      title: "Home",
      href: "/",
   },
   {
      id: 1,
      title: "Services",
      href: "/services",
   },
   {
      id: 2,
      title: "About us",
      href: "/about",
   },
   {
      id: 3,
      title: "Contact us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com/",
   },
   {
      id: 2,
      title: "LinkedIn",
      href: "https://www.linkedin.com/",
   },
   {
      id: 3,
      title: "Facebook",
      href: "https://www.facebook.com/",
   },
   {
      id: 4,
      title: "Gmail",
      href: "mailto:hello@thescalefunnel.com",
   },
];

export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "/services",
   },
   {
      id: 3,
      title: "About us",
      href: "/about",
   },
   {
      id: 4,
      title: "Contact us",
      href: "/contact",
   },
];

// home page — "What We Do" (repurposed from Featured Projects grid)
export const projectItem = [
   {
      id: 1,
      title: "Paid Marketing",
      description: "High-quality leads through Meta ads, built to convert not just click.",
      href: "/services",
      src: capaybilities1,
      links: [
         { id: 1, title: "meta ads", href: "/services" },
         { id: 2, title: "ad creative", href: "/services" },
         { id: 3, title: "audience targeting", href: "/services" },
      ]
   },
   {
      id: 2,
      title: "Landing Pages",
      description: "Every page crafted to turn visitors into booked calls.",
      href: "/services",
      src: capaybilities2,
      links: [
         { id: 1, title: "copywriting", href: "/services" },
         { id: 2, title: "sales pages", href: "/services" },
         { id: 3, title: "booking funnels", href: "/services" },
      ]
   },
   {
      id: 3,
      title: "Automation",
      description: "CRM, email, and WhatsApp systems that nurture leads around the clock.",
      href: "/services",
      src: capaybilities3,
      links: [
         { id: 1, title: "email sequences", href: "/services" },
         { id: 2, title: "whatsapp automation", href: "/services" },
         { id: 3, title: "crm setup", href: "/services" },
      ]
   },
   {
      id: 4,
      title: "Growth Systems",
      description: "Strategy, analytics, and optimization so your growth compounds.",
      href: "/services",
      src: capaybilities4,
      links: [
         { id: 1, title: "kpi dashboards", href: "/services" },
         { id: 2, title: "funnel optimization", href: "/services" },
         { id: 3, title: "a/b testing", href: "/services" },
      ]
   },
];

// home page + services page — Clients' reviews
// Note: illustrative testimonials — swap in real client quotes & photos once available.
export const clientsItem = [
   {
      id: 1,
      website: "Health & Wellness Coaching",
      href: "/contact",
      title: "Client:",
      name: "Ananya S.",
      initials: "AS",
      review: "Before The Scale Funnel, I was posting and hoping. Now I have a real system — ads that bring the right people in, a landing page that actually converts, and follow-ups that happen automatically. My calendar has never been fuller.",
      links: [
         { id: 1, title: "paid marketing", href: "/services" },
         { id: 2, title: "landing pages", href: "/services" },
      ]
   },
   {
      id: 2,
      website: "Business Coaching",
      href: "/contact",
      title: "Client:",
      name: "Rahul M.",
      initials: "RM",
      review: "What stood out was the accountability. This isn't an agency that just runs ads and disappears — they track every number, tell us what's working, and fix what isn't. Our cost per lead dropped within the first month.",
      links: [
         { id: 1, title: "growth systems", href: "/services" },
         { id: 2, title: "automation", href: "/services" },
      ]
   },
   {
      id: 3,
      website: "Mindset Coaching",
      href: "/contact",
      title: "Client:",
      name: "Karan V.",
      initials: "KV",
      review: "I'd worked with generalist marketers before who didn't understand the coaching space. The Scale Funnel actually gets how coaches sell — the messaging, the funnel, the follow-up all finally feel like they fit my business.",
      links: [
         { id: 1, title: "landing pages", href: "/services" },
      ]
   },
   {
      id: 4,
      website: "Relationship Coaching",
      href: "/contact",
      title: "Client:",
      name: "Meera D.",
      initials: "MD",
      review: "The weekly reporting alone was worth it — I finally understood where my leads were coming from and what my calls were actually costing me. Within two months we'd doubled our booked calls.",
      links: [
         { id: 1, title: "paid marketing", href: "/services" },
         { id: 2, title: "growth systems", href: "/services" },
      ]
   },
];

export const serviceClientsItem = clientsItem;

// services page — service process / breakdown (repurposed accordion)
export const serviceProcessItems = [
   {
      id: 1,
      phase: "01. Service",
      name: "Paid Marketing",
      src: phase1,
      review: "The right people. The right message. The right moment. We run Meta ad campaigns engineered for one thing — getting your ideal coaching clientele into your funnel. What's included: Meta Ads (Facebook & Instagram) strategy and execution • ad creative direction and copywriting • audience research and targeting • campaign setup, monitoring, and optimization • CAC, CPL and ROAS tracking • A/B testing on creatives and copy • weekly and monthly performance reports.",
      button: "read"
   },
   {
      id: 2,
      phase: "02. Service",
      name: "Landing Pages",
      src: phase2,
      review: "Your page should do the selling before you say a word. We design and write conversion-focused landing pages and sales pages that move visitors from curious to committed. What's included: landing page copywriting and structure • sales page optimization • call booking funnel setup • webinar and masterclass registration pages • consultation funnel design • testimonial and social proof strategy • conversion tracking and fixes.",
      button: "read"
   },
   {
      id: 3,
      phase: "03. Service",
      name: "Automation",
      src: phase3,
      review: "Your business should be working even when you're not. We build the backend systems that keep leads warm, move them through your funnel, and free you from manual follow-up — permanently. What's included: email sequence setup and copywriting • WhatsApp sequence and automation • CRM setup and management • lead qualification workflows • webinar show-up optimization sequences • pipeline automation • integration across your entire tech stack.",
      button: "read"
   },
   {
      id: 4,
      phase: "04. Service",
      name: "Growth Systems",
      src: phase4,
      review: "Strategy, data, and relentless optimization — so your growth compounds. This is the engine behind everything. We don't just run campaigns and hope — we track, analyze, test, and refine every part of your funnel. What's included: KPI dashboard setup and tracking • ad performance analysis • funnel optimization • conversion rate, CAC, and lead cost analysis • A/B testing across funnel stages • competitor and market intelligence • weekly and monthly strategy reporting • offer positioning and pricing strategy.",
      button: "read"
   },
];

// services page — Who We Help (repurposed "Our Capabilities")
export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      src2: capaybilities2,
      title1: "COACHES & CONSULTANTS:",
      links1: [
         { id: 1, title: "health coaches", href: "/services" },
         { id: 2, title: "business coaches", href: "/services" },
         { id: 3, title: "mindset coaches", href: "/services" },
         { id: 4, title: "relationship coaches", href: "/services" },
      ],
      title2: "COURSE CREATORS:",
      links2: [
         { id: 1, title: "masterclasses", href: "/services" },
         { id: 2, title: "group programs", href: "/services" },
         { id: 3, title: "membership offers", href: "/services" },
         { id: 4, title: "digital courses", href: "/services" },
      ]
   },
];

// services page — Why Choose Us (repurposed "Expectations")
export const expectationsItems = [
   {
      id: 1,
      title1: "01",
      subTitle1: "Niche-Specific",
      btn: "read",
      para1: "We only work with coaches, consultants, and course creators. That means no generic messaging and no funnel templates borrowed from unrelated industries — every system we build is designed around how coaching businesses actually sell.",
   },
   {
      id: 2,
      title1: "02",
      subTitle1: "Founder-Led",
      btn: "read",
      para1: "Every account is run directly by our three specialists, not junior account managers. You get a Meta ads expert, a content and creative lead, and a tech & analytics specialist working on your account from day one.",
   },
   {
      id: 3,
      title1: "03",
      subTitle1: "End-to-End Systems",
      btn: "read",
      para1: "We don't just run ads. We build the complete growth system behind your coaching business — Meta ads, landing pages, automation, and the analytics that tie it all together — so nothing gets left to chance.",
   },
   {
      id: 4,
      title1: "04",
      subTitle1: "Data-Driven Optimization",
      btn: "read",
      para1: "We track, analyze, test, and refine every part of your funnel — CAC, CPL, ROAS, conversion rate. Weekly and monthly reporting means you always know exactly what's working and why.",
   },
   {
      id: 5,
      title1: "05",
      subTitle1: "Full Accountability",
      btn: "read",
      para1: "We show up with complete ownership of every result. When something isn't working, we say so and fix it. When something is working, we double down. Either way, you're never left guessing.",
   },
   {
      id: 6,
      title1: "06",
      subTitle1: "Guaranteed Response",
      btn: "read",
      para1: "We guarantee a response within 24 hours, every time. Whether you're just launching or ready to scale, you always have a clear starting point and a team that's easy to reach.",
   },
];

// services page — The Scale Funnel in numbers (repurposed "Archive")
// Note: structural facts about the team/offering, not fabricated performance metrics.
export const achiveItems = [
   {
      id: 1,
      title1: ["3"],
      title2: ["24hr"],
      subTitle1: "Specialists. One shared goal.",
      subTitle2: "Guaranteed response time",
   },
   {
      id: 2,
      title1: ["4"],
      title2: ["3"],
      subTitle1: "Core services, one outcome",
      subTitle2: "Phases: Foundation, Build, Scale",
   },
];

// about page — Our Story (repurposed "Principles")
export const ourStoryItems = [
   {
      id: 1,
      heading: "How we started",
      para: "The Scale Funnel wasn't built in a boardroom. It was built from years of first-hand experience watching talented coaches struggle with the one thing they shouldn't have to worry about — getting clients. We came together because our skills fit together perfectly.",
   },
   {
      id: 2,
      heading: "Why we exist",
      para: "We are three specialists who decided that coaching businesses deserve an agency that truly understands their world. One that doesn't just run campaigns — but builds complete growth systems. And one that shows up with full accountability for every result. That's what The Scale Funnel exists to do.",
   },
];

// about page — Meet the Founders
export const teamItems = [
   {
      id: 1,
      name: "Rohini Shende",
      initials: "RS",
      role: "The Strategist — Meta Ads Expert",
      bio: "With 13+ years of industry experience, Rohini is a Meta ads expert who has worked with renowned brands and coaches, building a razor-sharp instinct for what makes a campaign perform. At The Scale Funnel, she leads client onboarding and drives the ad strategy behind every account, making sure your campaigns are built to convert from day one.",
   },
   {
      id: 2,
      name: "Mishthi Bundiwal",
      initials: "MB",
      role: "The Creative — Content & Creative",
      bio: "5+ years in content and copywriting; words are Mishthi's weapon. Across five years and multiple niches, she has refined the craft of writing content that doesn't just sound good — it converts. From ad copy to landing pages to email sequences, she ensures your message reaches the right person and resonates at exactly the right moment.",
   },
   {
      id: 3,
      name: "Utkarsh Soni",
      initials: "US",
      role: "The Analyst — Tech & Analytics",
      bio: "Bringing 5+ years in tech and Meta analytics, Utkarsh is the engine room of The Scale Funnel. He manages the technical infrastructure behind every campaign — from CRM setup and automation to deep-diving into Meta trends and performance data. If something can be optimized, he'll find it.",
   },
];

// about page — Who We Work With (repurposed "Partners", no borrowed brand logos)
export const aboutPartberItems = [
   {
      id: 1,
      title: "Health Coaches",
      para: "Funnels built to fill your calendar with clients ready to invest in their wellbeing.",
   },
   {
      id: 2,
      title: "Business Coaches",
      para: "Growth systems that turn cold audiences into booked strategy calls, consistently.",
   },
   {
      id: 3,
      title: "Mindset Coaches",
      para: "Messaging and creative that connects with the exact audience you're trying to reach.",
   },
   {
      id: 4,
      title: "Relationship Coaches",
      para: "Automation and follow-up systems so no lead goes cold while you're doing the work you love.",
   },
];

// contact page constants
export const FaqItems = [
   {
      id: 1,
      question: "How quickly can we get started?",
      title: "Description",
      description: "Once you book a strategy call, we map out your niche, offer, and current funnel gaps. Most clients are live with campaigns and landing pages within 2–3 weeks of onboarding.",
      links: [
         { id: 1, title: 1, description: "We guarantee a response to every inquiry within 24 hours." },
      ],
      button: "read"
   },
   {
      id: 2,
      question: "Do you only work with coaches?",
      title: "Description",
      description: "Yes — we work exclusively with coaches, consultants, and course creators across health, business, mindset, and relationship niches. That focus is what lets us build systems specific to how coaching businesses actually sell.",
      links: [
         { id: 1, title: 1, description: "If your business doesn't fit this niche, we'll tell you honestly rather than take on a mismatched project." },
      ],
      button: "read"
   },
   {
      id: 3,
      question: "What's included in a growth system?",
      title: "Description",
      description: "Paid marketing (Meta ads), landing pages, automation (CRM, email, WhatsApp), and growth systems (analytics, optimization, strategy) — all four work together rather than as separate one-off services.",
      links: [
         { id: 1, title: 1, description: "You can start with one service and expand as your funnel matures." },
      ],
      button: "read"
   },
   {
      id: 4,
      question: "How do you report on performance?",
      title: "Description",
      description: "You'll get weekly and monthly performance reports covering CAC, CPL, ROAS, and conversion rates, plus a KPI dashboard so you can check in anytime.",
      links: [
         { id: 1, title: 1, description: "We flag what's working and what needs to change — no vanity metrics." },
      ],
      button: "read"
   },
   {
      id: 5,
      question: "What if I'm just starting out?",
      title: "Description",
      description: "Whether you're just launching or ready to scale, we have a starting point for you. We'll recommend a phase that matches where your coaching business actually is today.",
      links: [
         { id: 1, title: 1, description: "Book a strategy call and we'll map out the right first step together." },
      ],
      button: "read"
   },
   {
      id: 6,
      question: "How do I book a strategy call?",
      title: "Description",
      description: "Use the form on this page or reach out directly by email — we'll follow up within 24 hours to schedule your call.",
      links: [
         { id: 1, title: 1, description: "There's no obligation — it's a conversation about your growth, not a sales pitch." },
      ],
      button: "read"
   },
];
