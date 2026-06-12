export const NAV_LINKS = [
  { label: "The Continuum", href: "#continuum" },
  { label: "Domains", href: "#triad" },
  { label: "Economics", href: "#economics" },
  { label: "Audit Shield", href: "#audit" },
  { label: "Contact", href: "#contact" },
];

export const DOMAINS = [
  {
    key: "sky",
    label: "Aviation",
    domain: "Sky",
    icon: "✦",
    tagline: "Air power is only as real as its availability rate.",
    description:
      "A medium-lift fleet that cannot generate sorties because three airframes are grounded for parts is not an air force—it is an inventory. We structure the depot inside your economic zone, your engineers hold the toolchains, and every spare is referenceable on the audit ledger.",
    assets: [
      "Fixed-wing transport aircraft",
      "Multi-role helicopters",
      "Tactical UAV integration",
      "Depot-level in-country MRO",
      "Blockchain-tracked spares pipeline",
    ],
    outcome: "Unconditional air mobility on the nation's schedule — delivered by moving the depot inside your borders, not by promising a faster foreign one.",
    accentColor: "#c9a84c",
  },
  {
    key: "land",
    label: "Army",
    domain: "Land",
    icon: "◈",
    tagline: "Ground forces fail not on the battlefield but on the supply road.",
    description:
      "Armor is the easy part. The hard part is the second winter, when the fleet's availability quietly drops because the overhaul depot is overseas. We structure the program so the overhaul lives where the fleet operates—your economic zone, your trained workforce, your toolchains.",
    assets: [
      "Terrain-matched troop & cargo vehicles",
      "Armored personnel carriers",
      "Military armor systems",
      "Localized spares & overhaul pipeline",
      "Sanctions-clean logistics chain",
    ],
    outcome: "A land force that moves on its own logistics, indefinitely — because the overhaul facility is built where the fleet operates, not where the OEM is headquartered.",
    accentColor: "#7a8a6a",
  },
  {
    key: "sea",
    label: "Navy & Coast Guard",
    domain: "Sea",
    icon: "◉",
    tagline:
      "An archipelagic state holds its waters only with hulls that stay at sea.",
    description:
      "High operational tempo wears patrol fleets fast. A vessel waiting months in a foreign shipyard backlog is a vessel ceding the Exclusive Economic Zone it was bought to assure. We localize the shipyard sustainment through a joint venture inside your economic zone.",
    assets: [
      "Offshore patrol vessels",
      "High-speed interdiction craft",
      "Hydrographic & multi-purpose vessels",
      "Tactical UAV surveillance integration",
      "Domestic shipyard JV lifecycle",
    ],
    outcome: "Persistent maritime presence across every boundary and choke point — secured through a domestic shipyard JV, so 'in for repair' never means 'out of the EEZ.",
    accentColor: "#4a7c9e",
  },
] as const;

export const CONTINUUM_PILLARS = [
  {
    layer: "soft",
    title: "Transaction Governance",
    description:
      "Every peso of the program is signed onto a ledger your comptroller can read the day it's spent — so the Audit Observation Memorandum that freezes other programs never reaches your desk.",
  },
  {
    layer: "soft",
    title: "Cyber-Defense Architecture",
    description:
      "Your fleet's telemetry and your grid's control systems are hardened against intrusion before the first sensor goes live and not patched after a breach makes headlines.",
  },
  {
    layer: "soft",
    title: "Regulatory Compliance",
    description:
      "Offset obligations under RA 12024 and audit requirements under COA Circular 2009-001 are written into the contract structure itself, compliant on the day you sign, not negotiated after.",
  },
  {
    layer: "hard",
    title: "Aerospace MRO",
    description:
      "In-country depot-level maintenance for fixed-wing transport, rotary, and unmanned platforms. Your engineers, your toolchains.",
  },
  {
    layer: "hard",
    title: "Naval Vessel Programs",
    description:
      "Fleet acquisition and domestic shipyard joint ventures delivering continuous maritime presence under PPP availability contracts.",
  },
  {
    layer: "hard",
    title: "Land Mobility & Surveillance",
    description:
      "Terrain-matched armor fleets, surveillance and radar integration, sustained by a localized overhaul infrastructure.",
  },
];

export const STATS = [
  { value: 5, suffix: "", label: "Continents in network" },
  { value: 6, suffix: "", label: "Advisory pillars" },
  { value: 10, suffix: "+", label: "Years lifecycle custody" },
  { value: 1, suffix: "", label: "Accountable principal" },
];

export const AUDIT_OBJECTIONS = [
  {
    id: "broker",
    tag: "Objection A",
    question: "Are you just a middleman taking a cut on access we could get ourselves?",
    answer:
      "That is the correct question to ask first, and it is the question that should disqualify most of the firms you meet—because most of them are exactly that. A broker takes a margin on access and retains no accountability after the introduction. We hold custody of the program across its entire lifecycle. Consider one pillar: forensic accounting. A broker cannot forensically audit its own transaction; the conflict is absolute. We audit ours, sign it onto a tamper-proof ledger, and hand the record to your comptroller. A firm taking a hidden cut does not build the instrument that would expose a hidden cut. We act as the principal of record—with lifecycle custody and benchmarked, referenceable pricing. The access is the smallest thing we bring. The governance is the largest.",
  },
  {
    id: "breadth",
    tag: "Objection B",
    question:
      "You list defense and a dozen civilian sectors. Can a firm doing this much really do any of it well?",
    answer:
      "Depth, for us, does not live in the sector. It lives in the process—a single, repeatable, six-stage methodology applied identically to every asset, in every domain, without exception: strategic planning, procurement, defense consulting, after-market MRO, contract economics, bid assistance. A patrol vessel and a rail network and a pharmaceutical supply chain do not get three different standards of rigor; they get the same one. The continuum is not a claim to know everything. It is a claim to govern everything the same way—to the same audit standard, the same traceability, the same lifecycle custody. Ask us to walk you through the six stages on the specific asset in front of you. The rigor is identical and it is visible.",
  },
  {
    id: "audit",
    tag: "Objection C",
    question:
      "Does engaging you create political or post-award audit risk for me and my committee?",
    answer:
      "This is the question underneath every other question, and you are right to put it on the table directly. So here is the precise answer: engaging us is structured to reduce your audit risk, not create it. First, the pathway: we structure through G2G channels under Section 53(g) of the RA 9184 IRR, which moves the program out of the public-bidding cycle. Second, offset compliance: under RA 12024, in-country countertrade, technology transfer, and integrated logistics support are pre-structured into the contract—your file is compliant on the day you sign. Third, the audit itself: we give the Commission on Audit a read-only window into a consortium blockchain ledger where every transaction cost and compliance check is cryptographically signed and time-stamped. The official who signs a Perlas-structured program does not inherit audit risk. The official inherits the audit trail that ends the inquiry before it starts.",
  },
];

export const ECONOMICS_SECTORS = [
  {
    icon: "⬡",
    title: "Energy & Grid Integration",
    description:
      "Utility-scale solar and wind grid integrations via PPP, financed through private and multilateral capital. Grid control systems secured against nation-state cyber intrusion.",
  },
  {
    icon: "◈",
    title: "Mining & Resource Extraction",
    description:
      "Heavy mining and aggregates under a strict system integration framework—wrapped in forensic accounting and ledger-based traceability that satisfies a state audit board.",
  },
  {
    icon: "⊕",
    title: "Pharmaceutical Supply Chains",
    description:
      "Compliant, sanctions-clean, traceable pharmaceutical supply. Automated screening at every node. Counterfeit and uncertified inputs designed out at the verification stage.",
  },
  {
    icon: "◎",
    title: "Agriculture & Food Security",
    description:
      "Advanced agriculture programs and palm oil networks as Sovereign Industrial Assets—governed through transaction analytics and positioned within countertrade frameworks.",
  },
];
