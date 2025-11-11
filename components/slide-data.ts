export type SlideTheme = "emerald" | "aqua" | "sunrise" | "midnight" | "forest";

export interface SlideBullet {
  label: string;
  detail?: string;
}

export interface SlideInsight {
  headline: string;
  highlight: string;
}

export interface SlideContent {
  id: number;
  theme: SlideTheme;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: SlideBullet[];
  insights?: SlideInsight[];
  quote?: {
    text: string;
    source: string;
  };
  image: {
    src: string;
    alt: string;
  };
  metric?: {
    label: string;
    value: string;
  };
  footerNote?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export const slides: SlideContent[] = [
  {
    id: 1,
    theme: "emerald",
    eyebrow: "Investor Narrative · Q3 2024",
    title: "Eco Vibe Bottles",
    subtitle: "Elevating sustainable hydration with self-purifying intelligence",
    description:
      "Inspired by LARQ's pioneering UV-C innovation, Eco Vibe Bottles merges smart sterilization with adaptive wellness insights for modern movers.",
    image: {
      src: "https://images.unsplash.com/photo-1523661149972-0bedfb978287?auto=format&fit=crop&w=1200&q=80",
      alt: "Stylish smart water bottle with glowing UV light"
    },
    metric: {
      label: "Vision",
      value: "Hydration that thinks, learns, & sustains."
    },
    footerNote: "Confidential · Eco Vibe Labs"
  },
  {
    id: 2,
    theme: "aqua",
    eyebrow: "Problem Landscape",
    title: "Urban Hydration is Broken",
    bullets: [
      {
        label: "Contamination Anxiety",
        detail: "72% worry about public water quality; 4 in 5 avoid refilling on-the-go."
      },
      {
        label: "Plastic Persistence",
        detail: "481B single-use bottles sold in 2023; only 30% recycled."
      },
      {
        label: "Wellness Fragmentation",
        detail: "Consumers juggle separate apps for hydration, fitness, and sustainability."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80",
      alt: "Discarded plastic bottles and city skyline"
    },
    insights: [
      {
        headline: "Eco Conscious Growth",
        highlight: "+18% YoY in premium reusable bottle segment."
      },
      {
        headline: "Digital Wellness Spend",
        highlight: "$5.9B projected by 2027 in hydration analytics."
      }
    ]
  },
  {
    id: 3,
    theme: "sunrise",
    eyebrow: "Inspired by LARQ's Momentum",
    title: "Proven Appetite for Self-Cleaning Tech",
    bullets: [
      {
        label: "Category Validation",
        detail: "LARQ scaled to $40M ARR with UV-C self-cleaning core."
      },
      {
        label: "Premium Positioning",
        detail: "Consumers accept $99-$129 price points for design-led sustainability."
      },
      {
        label: "Community Halo",
        detail: "User advocacy thrives when tech & cause intersect."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium self-cleaning bottle in lifestyle setting"
    },
    quote: {
      text: "We are not here to sell bottles; we are here to change behavior.",
      source: "Justin Wang, Co-founder & CEO, LARQ"
    }
  },
  {
    id: 4,
    theme: "midnight",
    eyebrow: "Product Experience",
    title: "How Eco Vibe Bottles Work",
    subtitle: "A holistic system pairing intelligent hardware with a fluid digital layer",
    bullets: [
      {
        label: "Purify Pulse™",
        detail: "UV-C 280 nm array neutralizes 99.99% of bio-contaminants in 60 seconds."
      },
      {
        label: "FlowSense Lid",
        detail: "Sensors map intake rhythm, syncing with the Eco Vibe iOS/Android app."
      },
      {
        label: "Harmonic Halo",
        detail: "Ambient ring communicates hydration status + UV cycle with kinetic light."
      }
    ],
    image: {
      src: "https://cdn.pixabay.com/photo/2020/07/02/09/23/water-bottle-5360416_1280.png",
      alt: "3D render of futuristic smart water bottle"
    },
    footerNote: "FDA-compliant UV-C hardware · BPA-free double wall stainless steel"
  },
  {
    id: 5,
    theme: "forest",
    eyebrow: "Audience Intelligence",
    title: "Tribe of Conscious Explorers",
    description:
      "Early adopters span urban professionals, boutique fitness enthusiasts, and eco-forward travelers seeking tools that reflect their values.",
    bullets: [
      {
        label: "Primary Persona",
        detail: "28-40 y/o hybrid professionals, $95k avg income, digital wellness subscribers."
      },
      {
        label: "Secondary Persona",
        detail: "Premium gym/franchise members tracking biometric health data weekly."
      },
      {
        label: "Tertiary Persona",
        detail: "Eco-travelers & remote workers prioritizing sustainable gear."
      }
    ],
    image: {
      src: "https://images.pexels.com/photos/4397844/pexels-photo-4397844.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Diverse group hiking with reusable bottles"
    },
    insights: [
      {
        headline: "Retention",
        highlight: "Top quartile digital wellness products retain 72% after 6 months."
      }
    ]
  },
  {
    id: 6,
    theme: "emerald",
    eyebrow: "Value Stack",
    title: "Business Model Architecture",
    bullets: [
      {
        label: "Hardware Margin",
        detail: "55% blended gross margin across Classic ($129) and Motion ($159) lines."
      },
      {
        label: "Eco Vibe+ Membership",
        detail: "$7.99/mo unlocking AI hydration coach, refill map, and impact tracker."
      },
      {
        label: "B2B Wellness Pods",
        detail: "Subscription partnerships with co-working & boutique fitness networks."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1610465299996-31c3b78ace26?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern smart bottle with app dashboard"
    },
    metric: {
      label: "LTV / CAC Target",
      value: "3.8x in 24 months"
    }
  },
  {
    id: 7,
    theme: "aqua",
    eyebrow: "Go-To-Market Sprints",
    title: "Layered Launch Strategy",
    bullets: [
      {
        label: "Beta Collective",
        detail: "Invite-only drop with 1,000 wellness micro-influencers & LARQ alumni fans."
      },
      {
        label: "Experiential Pop-ups",
        detail: "UV immersion domes at Soho, Venice, Singapore to demo sterilization waves."
      },
      {
        label: "Impact Loop",
        detail: "Gamified refill challenges with NGOs; 1% revenue to ocean cleanup."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      alt: "Immersive product launch event"
    },
    insights: [
      {
        headline: "Influence ROI",
        highlight: "Nano creators deliver 30% higher conversion vs. paid social."
      }
    ]
  },
  {
    id: 8,
    theme: "sunrise",
    eyebrow: "3-Year Financial Outlook",
    title: "Compelling Path to $75M ARR",
    bullets: [
      {
        label: "Year 1",
        detail: "$6.5M revenue · 18k units · 24% attach rate to Eco Vibe+."
      },
      {
        label: "Year 2",
        detail: "$24M revenue · 60k units · B2B pods contribute 22%."
      },
      {
        label: "Year 3",
        detail: "$75M revenue · 160k units · Membership ARR surpasses hardware."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      alt: "Financial data visualization on digital screen"
    },
    metric: {
      label: "Gross Margin Target",
      value: "62% by FY26"
    }
  },
  {
    id: 9,
    theme: "midnight",
    eyebrow: "Sustainability Flywheel",
    title: "Impact Engine in Motion",
    bullets: [
      {
        label: "Smart Refills",
        detail: "Track and verify plastic offset; users earn carbon-neutral badges."
      },
      {
        label: "Circular Design",
        detail: "Modular cap & sleeve built for refurbish programs, extending lifespan."
      },
      {
        label: "Eco Ledger",
        detail: "Blockchain-backed impact statements co-signed by NGO partners."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1523867578866-1a4bb72c9d8d?auto=format&fit=crop&w=1200&q=80",
      alt: "Lush forest with morning light representing sustainability"
    },
    quote: {
      text: "Every refill triggers data that proves environmental progress.",
      source: "Eco Vibe Impact Lab"
    }
  },
  {
    id: 10,
    theme: "forest",
    eyebrow: "Execution Roadmap",
    title: "Milestones to Scale",
    bullets: [
      {
        label: "Q3 2024",
        detail: "Finalize DFM with LARQ-aligned manufacturing partner; pilot 500 units."
      },
      {
        label: "Q1 2025",
        detail: "Mobile app V1, hydration coach AI, and retail pop-up tour."
      },
      {
        label: "Q4 2025",
        detail: "Series A, APAC expansion, ESG certification, and corporate wellness channel."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Team planning roadmap in modern workspace"
    },
    insights: [
      {
        headline: "Manufacturing Ready",
        highlight: "Tier-1 OEM secured with 15% lower MOQs via strategic alliance."
      }
    ]
  },
  {
    id: 11,
    theme: "emerald",
    eyebrow: "Team & Partners",
    title: "Operators with Purpose",
    bullets: [
      {
        label: "CEO · Maya Chen",
        detail: "Ex-LARQ product lead; scaled UV line from concept to $30M revenue."
      },
      {
        label: "CTO · Diego Martins",
        detail: "MIT materials scientist specializing in photonic sterilization arrays."
      },
      {
        label: "Impact Council",
        detail: "Partnerships with Oceanic Global, 1% for the Planet, and Refill My City."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional team portrait"
    },
    metric: {
      label: "Advisory Board",
      value: "Former LARQ ops, Peloton growth, Patagonia sustainability."
    }
  },
  {
    id: 12,
    theme: "midnight",
    eyebrow: "Investor Call to Action",
    title: "Join the Hydration Renaissance",
    description:
      "We are raising a $12M Seed+ round to accelerate manufacturing, scale Eco Vibe+, and embed impact transparency into every refill.",
    bullets: [
      {
        label: "Use of Funds",
        detail: "40% manufacturing & inventory, 30% product/engineering, 20% GTM, 10% impact initiatives."
      },
      {
        label: "Timeline",
        detail: "18-month runway; Series A readiness by Q1 2026."
      },
      {
        label: "Return Thesis",
        detail: "Dual flywheel of premium hardware and subscription wellness with measurable ESG alpha."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
      alt: "Investor meeting overlooking city skyline"
    },
    ctaLabel: "Schedule Investor Session",
    ctaLink: "mailto:invest@ecovibe.com"
  }
];
