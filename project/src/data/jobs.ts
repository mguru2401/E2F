export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  image: string;
  code: string;
  description: string;
  longDescription: string;
  eligibility: string[];
  salary: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  requirements?: string[];
  shifts?: string;
  totalPositions?: string;
}

export const jobs: Job[] = [
  {
    id: "apollo-naps-001",
    title: "NAPS Trainee",
    company: "Apollo Tyres",
    location: "Various Locations",
    image: "/carrers/apollo_tyres_job.png",
    code: "AP-NAPS-001",
    description: "Urgent hiring for NAPS Trainees. Eligibility: ITI, Diploma, Arts. Attractive salary and benefits included.",
    longDescription: "Join Apollo Tyres as a NAPS Trainee and start your career in the tire manufacturing industry. We offer a comprehensive training program with competitive compensation and extensive benefits for dedicated individuals.",
    eligibility: ["ITI", "Diploma", "Arts"],
    salary: [
      { label: "ITI Graduates", value: "₹17,500 Per Month" },
      { label: "Diploma / Arts Graduates", value: "₹18,700 Per Month" }
    ],
    benefits: [
      "Half Yearly Bonus of ₹5,000 + Production Incentives",
      "Free hostel with food at hostel for first 3 months",
      "Subsidized cost for hostel after 3 months",
      "Free Uniform, Shoes, Transportation",
      "Free Food at company",
      "Medical Insurance",
      "Education support in 4th, 5th & 6th year of tenure"
    ]
  },
  {
    id: "ashok-ops-002",
    title: "Assembly Line / Shopfloor Operators",
    company: "Ashok Leyland",
    location: "Ennore, Chennai",
    image: "/carrers/ashok_layland_job.png",
    code: "AL-OPS-002",
    description: "Immediate hiring for 100+ candidates. Department: Truck Chassis Assembly / Engine Shop / Assembly Shop.",
    longDescription: "Ashok Leyland is looking for skilled Assembly Line and Shopfloor Operators for their Ennore plant in Chennai. This is a great opportunity for male candidates with ITI or Diploma backgrounds to work with a leader in commercial vehicles.",
    eligibility: ["ITI", "Diploma (Male candidates only)"],
    salary: [
      { label: "CTC", value: "₹19,700 Per Month" },
      { label: "Take-home", value: "Approx. ₹14,700 Per Month" }
    ],
    requirements: [
      "Age Limit: 18 to 30 years",
      "Ability to read engineering drawings",
      "Basic English reading / writing"
    ],
    shifts: "8-hour shift (A / B / C / General) with weekly off",
    totalPositions: "100+ Candidates",
    benefits: [
      "PF / ESI / PT / Canteen",
      "Canteen during duty hours",
      "Immediate Joining"
    ]
  },
  {
    id: "cat-wld-003",
    title: "Welder - NAPS Trainee",
    company: "Caterpillar",
    location: "Chennai",
    image: "/carrers/Caterpillar_Welder.png",
    code: "CAT-WLD-003",
    description: "Build your career with a Global Manufacturing Leader. Immediate joining for skilled welders.",
    longDescription: "Caterpillar, a global manufacturing leader, is conducting a hiring drive for Welders under the NAPS Trainee program in Chennai. Gain global exposure, advanced skills, and stable earnings while working with world-class machinery.",
    eligibility: ["Open to Candidates from All ITI Trades"],
    salary: [
      { label: "1st Year Total Monthly", value: "₹22,250 (Stipend + Food + Attendance)" },
      { label: "2nd Year Total Monthly", value: "₹23,250 (Stipend + Food + Attendance + Skill Allowance)" }
    ],
    benefits: [
      "Global Manufacturing Exposure",
      "Advanced Skill Training",
      "Stable Earnings & Growth",
      "Attendance Bonus",
      "Food Allowance"
    ],
    totalPositions: "30 Skilled Welders",
    requirements: [
      "Immediate Joining"
    ]
  }
];
