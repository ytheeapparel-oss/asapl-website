export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  websiteUrl: string;
  socialLinks: {
    youtube: string;
    instagram: string;
    facebook: string;
  };
  address: {
    sector: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  pillars: string[];
  admissionsYear: string;
  statsPlaceholders: {
    label: string;
    value: string;
    placeholderNote?: string;
  }[];
}

export const SCHOOL_DATA: SchoolInfo = {
  name: "ASPAL International",
  shortName: "ASPAL",
  tagline: "Little Steps. Big Dreams.",
  subTagline: "A premier primary and early childhood school in Sector 55, Noida, dedicated to nurturing curious minds, stage bravery, and confident futures through experiential learning, synthetic phonics, concrete mathematics, and compassionate 1:12 mentorship.",
  phone: "9873539445",
  displayPhone: "+91 9873539445",
  email: "Rakeshpandey2001@gmail.com",
  websiteUrl: "https://www.aspal.co.in",
  socialLinks: {
    youtube: "https://www.youtube.com/@aspaljuniors",
    instagram: "https://www.instagram.com/aspaljuniors_51",
    facebook: "https://www.facebook.com/aspalinternationalschool",
  },
  address: {
    sector: "Sector 55",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    fullAddress: "ASPAL International, Sector 55, Noida, Uttar Pradesh 201301, India",
  },
  pillars: [
    "Happy Children",
    "Creative Learning",
    "Safe Environment",
    "Caring Teachers",
    "Confident Futures",
  ],
  admissionsYear: "2025-26",
  statsPlaceholders: [
    {
      label: "Student-Teacher Ratio",
      value: "Low & Nurturing",
      placeholderNote: "[ADD CERTIFIED RATIO e.g. 15:1]",
    },
    {
      label: "Campus Security",
      value: "100% CCTV Monitored",
      placeholderNote: "[ADD SAFETY AUDIT DETAILS]",
    },
    {
      label: "Curriculum Approach",
      value: "Experiential & Play-Based",
      placeholderNote: "[ADD AFFILIATION / BOARD DETAILS]",
    },
    {
      label: "Co-Curriculars",
      value: "Arts, Music & STEM",
      placeholderNote: "[ADD FULL ACTIVITY LIST]",
    },
  ],
};

export interface CampusInfo {
  id: string;
  name: string;
  brand: "Aspal International School" | "Aspal Juniors";
  tagline: string;
  type: string;
  ageGroup: string;
  grades: string;
  sector: string;
  fullAddress: string;
  promotedSectors: string[];
  features: string[];
  activities: string[];
  phone: string;
  displayPhone: string;
  email: string;
  badgeColor: string;
  accentBg: string;
  pageUrl: string;
}

export const CAMPUSES_DATA: CampusInfo[] = [
  {
    id: "aspal-international-55",
    name: "Aspal International School",
    brand: "Aspal International School",
    tagline: "Premier Primary School till VIth Standard",
    type: "Primary School till Class VI",
    ageGroup: "2 Years – 12 Years",
    grades: "Playgroup, Nursery, LKG, UKG, Grades 1 to 6",
    sector: "Sector 55, Noida",
    fullAddress: "Aspal International School, Sector 55, Noida, Uttar Pradesh 201301",
    promotedSectors: [
      "Sector 55",
      "Sector 56",
      "Sector 21",
      "Sector 22",
      "Sector 12",
      "Sector 26",
      "Sector 31",
      "Sector 34",
      "Sector 36",
      "Sector 19",
      "Rajat Vihar",
      "Mayur Vihar Phase 3"
    ],
    features: [
      "Classes up to VIth Standard (Primary & Upper Primary)",
      "Certified Synthetic Phonics 42+ Sound Lab",
      "Concrete-Pictorial-Abstract (CPA) Mathematics",
      "100% CCTV Monitored Child-Safe Campus",
      "Experiential STEM & Hands-On Science Discovery",
      "Safe GPS-Tracked School Transport Across Noida & Mayur Vihar"
    ],
    activities: [
      "Experiential Science & STEM",
      "Creative Arts, Craft & Pottery",
      "Public Speaking, Drama & Stage Poise",
      "Yoga & Physical Agility Drills",
      "Outdoor Athletics & Team Sports"
    ],
    phone: "9873539445",
    displayPhone: "+91 9873539445",
    email: "Rakeshpandey2001@gmail.com",
    badgeColor: "bg-ocean-100 text-ocean-700 border-ocean-300",
    accentBg: "from-ocean-50 to-blue-50/50",
    pageUrl: "/",
  },
  {
    id: "aspal-juniors-51",
    name: "Aspal Juniors (Sector 51)",
    brand: "Aspal Juniors",
    tagline: "Pre-School, Daycare & Creche with Dance, Music & Skating",
    type: "Pre-School, Daycare & Creche",
    ageGroup: "2 Years – 8 Years",
    grades: "Toddlers, Playgroup, Nursery, LKG, UKG, Daycare & Creche",
    sector: "Sector 51, Noida",
    fullAddress: "Aspal Juniors, Sector 51, Noida, Uttar Pradesh 201301",
    promotedSectors: [
      "Sector 51",
      "Sector 50",
      "Sector 34",
      "Sector 41",
      "Sector 49",
      "Sector 72",
      "Sector 71",
      "Sector 75",
      "Sector 76",
      "Sector 77",
      "Sector 78",
      "Sector 79"
    ],
    features: [
      "Loving Daycare & Full-Day Creche for Working Parents",
      "Dedicated Roller Skating Rink with Professional Coaches",
      "Specialized Dance Academy (Western & Classical)",
      "Vocal & Instrumental Music Studio",
      "Multisensory Play & Soft Toddler Gym",
      "100% CCTV Monitored Child-Safe Environment"
    ],
    activities: [
      "Roller Skating Rink Sessions",
      "Dance Academy (Western, Folk & Classical)",
      "Music, Rhythm & Keyboard / Vocal Lessons",
      "Sensory Water Play & Safe Sandpit",
      "Storytelling, Puppet Theater & Role Play"
    ],
    phone: "9873539445",
    displayPhone: "+91 9873539445",
    email: "Rakeshpandey2001@gmail.com",
    badgeColor: "bg-coral-100 text-coral-700 border-coral-300",
    accentBg: "from-coral-50 to-rose-50/50",
    pageUrl: "/aspal-juniors",
  },
  {
    id: "aspal-juniors-22",
    name: "Aspal Juniors (Sector 22)",
    brand: "Aspal Juniors",
    tagline: "Pre-School & Loving Daycare Sanctuary",
    type: "Pre-School & Daycare",
    ageGroup: "2 Years – 8 Years",
    grades: "Toddlers, Playgroup, Nursery, LKG, UKG & Daycare",
    sector: "Sector 22, Noida",
    fullAddress: "Aspal Juniors, Sector 22, Noida, Uttar Pradesh 201301",
    promotedSectors: [
      "Sector 22",
      "Sector 55",
      "Sector 56",
      "Sector 21",
      "Sector 12",
      "Sector 26",
      "Sector 31",
      "Sector 34",
      "Sector 36",
      "Sector 19",
      "Rajat Vihar",
      "Mayur Vihar Phase 3"
    ],
    features: [
      "Warm & Nurturing Pre-School Early Foundations",
      "Safe, Reliable After-School Daycare Facility",
      "Phonics Sound Lab & Early Number Exploration",
      "Child-Friendly Outdoor & Indoor Play Arenas",
      "Hygienic, Nutritious Meal Times & Nap Quarters",
      "100% CCTV Surveillance & Background-Verified Staff"
    ],
    activities: [
      "Play-Based Phonics & Story Adventures",
      "Art & Craft Finger Painting & Sensory Clay",
      "Gross Motor Play, Tumbling & Balance Drills",
      "Rhythm, Rhymes & Musical Instruments",
      "Social Circle Time & Emotional Resilience Games"
    ],
    phone: "9873539445",
    displayPhone: "+91 9873539445",
    email: "Rakeshpandey2001@gmail.com",
    badgeColor: "bg-sunshine-100 text-amber-800 border-sunshine-300",
    accentBg: "from-sunshine-50 to-amber-50/50",
    pageUrl: "/aspal-juniors",
  },
];

export interface ProgramItem {
  id: string;
  title: string;
  ageGroup: string;
  category: string;
  themeColor: "sunshine" | "ocean" | "coral" | "mint" | "purple" | "bubblegum";
  shortDesc: string;
  whatTheyLearn: string[];
  howTheyLearn: string[];
  keyBenefits: string[];
  sampleActivities: string[];
  image: string;
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "early-foundations",
    title: "Early Foundations & Play-Based Learning",
    ageGroup: "Ages 2.5 – 4 Years (Toddler / Nursery)",
    category: "Early Childhood",
    themeColor: "sunshine",
    shortDesc: "A warm, sensory-rich introduction to school life where learning happens naturally through guided play, exploration, and emotional security.",
    whatTheyLearn: [
      "Sensory awareness and fine motor manipulation",
      "Early conversational vocabulary and receptive listening",
      "Social sharing, taking turns, and classroom routines",
      "Self-expression through colorful sensory mediums",
    ],
    howTheyLearn: [
      "Hands-on manipulative discovery stations (blocks, dough, sand)",
      "Daily interactive circle time and nursery rhythms",
      "Guided role-play corners (kitchen, grocery, story corner)",
      "Gentle outdoor nature strolls and sensory garden visits",
    ],
    keyBenefits: [
      "Smooth emotional transition from home to school",
      "Confident peer socialization without separation anxiety",
      "Strong fine-motor grip and finger dexterity",
      "Joyful eagerness to attend school every morning",
    ],
    sampleActivities: [
      "Finger painting rainbows and sensory texture boards",
      "Puppet storytelling and musical freeze dance",
      "Water play with pouring and measuring cups",
      "Sorting colorful wooden fruits and wooden animal puzzles",
    ],
    image: "/images/toddler-play.jpg",
  },
  {
    id: "literacy-language",
    title: "Foundational Literacy & Phonics",
    ageGroup: "Ages 3.5 – 7 Years (LKG, UKG & Primary)",
    category: "Communication",
    themeColor: "ocean",
    shortDesc: "Igniting a lifelong love for reading through synthetic phonics, interactive storytelling, sight words, and expressive conversation.",
    whatTheyLearn: [
      "Letter-sound correspondence (Synthetic Phonics 42+ sounds)",
      "Blending and segmenting sounds for early independent reading",
      "Rich expressive vocabulary and sentence construction",
      "Creative drawing-to-writing expression and neat pencil grip",
    ],
    howTheyLearn: [
      "Multisensory letter tracing in salt trays and sandpaper letters",
      "High-engagement big-book read-alouds with open-ended discussions",
      "Phonics jingles, alliteration games, and sound scavenger hunts",
      "Show-and-Tell speaking sessions to develop public poise",
    ],
    keyBenefits: [
      "Fluent, joyful reading ability without rote memorization",
      "High comprehension and confident spoken English expression",
      "Clear articulation and active listening habits",
      "Inquisitive imagination sparked by diverse picture books",
    ],
    sampleActivities: [
      "Mystery Sound Box: Guess the object by its beginning phoneme",
      "Buddy Reading Under the Story Tree in the library",
      "Building 3-letter CVC words using magnetic alphabet tiles",
      "Creating their own miniature illustrated picture book",
    ],
    image: "/images/reading-library.jpg",
  },
  {
    id: "numbers-mathematics",
    title: "Numeracy & Concrete Mathematics",
    ageGroup: "Ages 3 – 8 Years (Kindergarten & Primary)",
    category: "STEM & Logic",
    themeColor: "coral",
    shortDesc: "Transforming numbers from abstract symbols into tangible, exciting puzzles through the Concrete-Pictorial-Abstract (CPA) approach.",
    whatTheyLearn: [
      "Number sense, counting with one-to-one correspondence",
      "Pattern recognition, sequencing, and classification",
      "Shapes, spatial reasoning, measurement, and symmetry",
      "Early addition, subtraction, and practical problem solving",
    ],
    howTheyLearn: [
      "Concrete manipulatives: abacus beads, ten-frames, Unifix cubes",
      "Everyday math applications: measuring classroom furniture, pretend shopping",
      "Puzzles, board games, and pattern-building blocks",
      "Outdoor shape scavenger hunts and step-counting games",
    ],
    keyBenefits: [
      "Eliminates fear of math early by building intuitive conceptual grasp",
      "Strengthens logical deduction and spatial reasoning",
      "Promotes systematic thinking and persistence in problem-solving",
      "Connects mathematical thinking directly to real-life situations",
    ],
    sampleActivities: [
      "The ASPAL Fruit Market: weighing apples with balance scales",
      "Giant floor number-line hopping to add and subtract",
      "Creating 2D and 3D geometric creations using craft sticks and clay",
      "Sorting buttons by color, size, and number of holes",
    ],
    image: "/images/math-abacus.jpg",
  },
  {
    id: "creative-arts",
    title: "Creative Arts, Expression & Craft",
    ageGroup: "Ages 3 – 10 Years (All Primary Grades)",
    category: "Creativity",
    themeColor: "purple",
    shortDesc: "Unlocking boundless young imaginations through drawing, painting, clay modeling, collage, and sustainable recycled crafting.",
    whatTheyLearn: [
      "Color theory (primary, secondary, mixing, warm and cool tones)",
      "Textures, proportions, and artistic observation",
      "Patience, design thinking, and original visual expression",
      "Appreciation for cultural art styles and folk heritage",
    ],
    howTheyLearn: [
      "Process-oriented open art studios where creativity has no 'wrong answers'",
      "Exploration of diverse mediums: watercolors, oil pastels, terracotta clay",
      "Collaborative class murals celebrating seasons and festivals",
      "Crafting functional items from eco-friendly recycled materials",
    ],
    keyBenefits: [
      "Deep emotional outlet and stress release for young minds",
      "Refined fine-motor control and bilateral hand coordination",
      "Confidence in expressing unique personal viewpoints",
      "Pride in presenting finished creations in school art displays",
    ],
    sampleActivities: [
      "Clay pottery modeling with natural non-toxic clay",
      "Leaf and vegetable block-printing on organic cotton flags",
      "Collaborative wall mural of a magical underwater ecosystem",
      "Upcycled cardboard architectural sculpture projects",
    ],
    image: "/images/art-creative.jpg",
  },
  {
    id: "music-movement",
    title: "Music, Rhythm & Performing Arts",
    ageGroup: "Ages 2.5 – 10 Years",
    category: "Performing Arts",
    themeColor: "bubblegum",
    shortDesc: "Fostering joyful rhythm, vocal pitch, dramatic play, and bodily coordination through musical instruments and stage confidence.",
    whatTheyLearn: [
      "Beat, tempo, rhythm, and pitch discrimination",
      "Percussion instrument basics (tambourines, xylophones, maracas)",
      "Vocal projection, speech clarity, and expressive roleplay",
      "Stage confidence, body language, and collaborative performance",
    ],
    howTheyLearn: [
      "Orff-inspired interactive music circles and body percussion",
      "Dramatic storytelling where children portray fairy tales and real-world heroes",
      "Bilingual rhymes and traditional Indian and international folk melodies",
      "Creative movement games synchronizing rhythm with body agility",
    ],
    keyBenefits: [
      "Enhances neural pathways linking language, math, and motor skills",
      "Overcomes shyness and nurtures radiant self-confidence",
      "Teens and children develop empathy through role-playing diverse characters",
      "High physical energy channeled into constructive, artistic poise",
    ],
    sampleActivities: [
      "Classroom percussion orchestra conducting and tempo shifts",
      "Puppet theatre presentations created and voiced by students",
      "Yoga and mindful animal stretches set to soothing acoustic melodies",
      "Annual celebration musical plays and rhyming skits",
    ],
    image: "/images/music-class.jpg",
  },
  {
    id: "physical-sports",
    title: "Physical Agility, Sports & Yoga",
    ageGroup: "Ages 3 – 10 Years",
    category: "Health & Fitness",
    themeColor: "mint",
    shortDesc: "Cultivating energetic fitness, balance, sportsmanship, and mindful health habits on safe, child-friendly sports playfields.",
    whatTheyLearn: [
      "Gross motor coordination, balance, and spatial awareness",
      "Team sports fundamentals, healthy rules, and fair play",
      "Age-adapted yoga postures (asanas) for posture and focus",
      "Nutritional awareness and the value of active outdoor play",
    ],
    howTheyLearn: [
      "Specialized obstacle courses designed for agility and confidence",
      "Fun non-competitive mini-games (tag, relay, ball control)",
      "Daily morning energizer drills and guided breathing techniques",
      "Structured free-play sessions in padded and grass play areas",
    ],
    keyBenefits: [
      "Strong cardiovascular health, stamina, and muscular development",
      "Resilience in handling wins, losses, and teamwork with peers",
      "Better sleep quality and heightened classroom focus",
      "Instills lifelong love for outdoor physical activity over screens",
    ],
    sampleActivities: [
      "Mini agility hurdles, balance beams, and tunnel crawling",
      "Kids' Surya Namaskar and fun animal-pose stretching routines",
      "Catching, kicking, and bounce-pass drills with soft balls",
      "Annual Fun & Fitness Sports Carnival with parent-child events",
    ],
    image: "/images/sports-activity.jpg",
  },
  {
    id: "daycare-creche",
    title: "Loving Daycare & Full-Day Creche",
    ageGroup: "Ages 2 – 8 Years (Aspal Juniors Sec 51 & Sec 22)",
    category: "Childcare & Early Wellness",
    themeColor: "bubblegum",
    shortDesc: "A safe, home-like daycare sanctuary providing gentle care, nutritious meal assistance, nap quarters, and engaging developmental activities for working parents.",
    whatTheyLearn: [
      "Healthy daily routines, self-care and hygiene etiquette",
      "Social interaction, cooperative play, and empathy",
      "Language enrichment through storytelling and audiobooks",
      "Restful afternoon rejuvenation and healthy nutrition habits",
    ],
    howTheyLearn: [
      "Dedicated infant & toddler nap beds in quiet, air-conditioned rooms",
      "Nutritious snack schedule supervised by trained female caregivers",
      "Structured evening play, phonics reinforcement and quiet reading",
      "Live CCTV transparency and continuous caregiver attention",
    ],
    keyBenefits: [
      "100% peace of mind for working parents across Noida & NCR",
      "Emotional security with warm, motherly childcare attendants",
      "Smooth blend of afternoon relaxation and productive learning",
      "Flexible hourly, half-day, and full-day daycare options",
    ],
    sampleActivities: [
      "Post-nap storybook reading and finger puppet performances",
      "Free drawing and playdough shape creations",
      "Outdoor sensory grass play and gentle evening swings",
      "Structured homework support and reading buddy sessions",
    ],
    image: "/images/hero-indian-kids.jpg",
  },
  {
    id: "dance-music-skating",
    title: "Dance, Music & Roller Skating Academy",
    ageGroup: "Ages 3 – 10 Years (Aspal Juniors Sec 51)",
    category: "Performing Arts & Agility",
    themeColor: "sunshine",
    shortDesc: "Igniting stage confidence, bodily rhythm, balance, and musicality with specialized skating coaches and certified music & dance instructors in Sector 51.",
    whatTheyLearn: [
      "Roller skating balance, braking, turning, and speed control",
      "Western, folk, and classical dance choreography & stage poise",
      "Vocal pitch, nursery rhythms, and basic musical keyboard notes",
      "Overcoming performance fear and expressing joyful creativity",
    ],
    howTheyLearn: [
      "Dedicated smooth skating rink with certified safety helmets & pads",
      "Acoustically sound music room with mini synthesizers and percussion",
      "Mirrored dance studio with energetic instructors and happy beats",
      "Frequent campus recitals and festive stage celebrations",
    ],
    keyBenefits: [
      "Superior balance, core strength, and ankle-foot agility",
      "High self-esteem and stage bravery in public presentations",
      "Refined auditory rhythm, emotional expression, and focus",
      "Direct pathway to inter-school sports & cultural competitions",
    ],
    sampleActivities: [
      "Roller skate zigzag obstacle courses and sprint drills",
      "Choreographed group dance routines for Annual Concerts",
      "Keyboard note-matching games and vocal singing warm-ups",
      "Skating badge challenges celebrating personal milestones",
    ],
    image: "/images/music-class.jpg",
  },
  {
    id: "upper-primary-grade6",
    title: "Primary & Upper Primary Education (Till Class VI)",
    ageGroup: "Ages 6 – 12 Years (Aspal International School Sec 55)",
    category: "Primary & Middle Prep",
    themeColor: "ocean",
    shortDesc: "A rigorous, inquiry-led primary schooling curriculum taking students seamlessly through Grade 6 with strong conceptual mastery across CBSE foundations.",
    whatTheyLearn: [
      "Advanced reading comprehension, creative writing & grammar",
      "Analytical mathematics, fractions, geometry & logical reasoning",
      "Environmental science, experimental STEM, and digital literacy",
      "Critical thinking, leadership, project research & presentation",
    ],
    howTheyLearn: [
      "Interactive smart classroom modules and experiential science lab sets",
      "Collaborative team projects, debates, and public speaking assemblies",
      "Personalized 1:12 teacher mentoring and continuous diagnostic feedback",
      "Integration of co-curricular sports, art, and moral value education",
    ],
    keyBenefits: [
      "Flawless readiness for CBSE, ICSE & international middle school boards",
      "Deep conceptual clarity avoiding reliance on rote tuition",
      "Responsible digital awareness and inquisitive scientific temperament",
      "Strong character building, ethical values, and empathetic leadership",
    ],
    sampleActivities: [
      "Science Fair: Building working circuits and water filtration models",
      "Junior Model United Nations and Class Debate tournaments",
      "Math Olympiad problem-solving challenge circles",
      "Environmental green club tree-planting and recycling drives",
    ],
    image: "/images/classroom-learning.jpg",
  },
];

export interface DayStep {
  time: string;
  title: string;
  desc: string;
  color: string;
  icon: string;
}

export const DAY_DISCOVERY_STEPS: DayStep[] = [
  {
    time: "08:30 AM",
    title: "Joyful Welcome & Morning Circle",
    desc: "Warm greetings from caring teachers, emotional check-in, weather discovery, and an energizing action song.",
    color: "bg-sunshine-500",
    icon: "Sun",
  },
  {
    time: "09:15 AM",
    title: "Literacy & Phonics Adventures",
    desc: "Multisensory sound games, interactive big-book storytelling, and guided vocabulary exploration in small groups.",
    color: "bg-ocean-500",
    icon: "BookOpen",
  },
  {
    time: "10:30 AM",
    title: "Mindful Snack & Social Etiquette",
    desc: "Wholesome tiffin time where children learn table manners, hand-washing hygiene, sharing, and mindful eating habits.",
    color: "bg-mint-500",
    icon: "Apple",
  },
  {
    time: "11:15 AM",
    title: "Concrete Numeracy & STEM Discovery",
    desc: "Manipulating blocks, puzzles, scales, and nature samples to uncover math and scientific wonders through play.",
    color: "bg-coral-500",
    icon: "Boxes",
  },
  {
    time: "12:00 PM",
    title: "Creative Arts, Music & Expressive Drama",
    desc: "Painting on easels, clay sculpting, xylophone rhythms, or putting on character costumes in the dramatic play corner.",
    color: "bg-purple-500",
    icon: "Palette",
  },
  {
    time: "12:45 PM",
    title: "Outdoor Play, Nature Walk & Farewell",
    desc: "Running in the fresh air, jungle gym coordination, peaceful reflection circle, and cheerful goodbyes until tomorrow!",
    color: "bg-bubblegum-500",
    icon: "Smile",
  },
];

export interface WhyChooseItem {
  title: string;
  desc: string;
  color: string;
  borderColor: string;
  icon: string;
}

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    title: "Caring & Dedicated Teachers",
    desc: "Warm, certified educators trained in modern child psychology who treat every child with patience, dignity, and personal warmth.",
    color: "bg-sunshine-50 text-sunshine-600",
    borderColor: "border-sunshine-200",
    icon: "HeartHandshake",
  },
  {
    title: "Child-Centered Creative Learning",
    desc: "Curriculum designed around natural curiosity, active exploration, and joyful hands-on projects rather than dull passive lecturing.",
    color: "bg-ocean-50 text-ocean-600",
    borderColor: "border-ocean-200",
    icon: "Sparkles",
  },
  {
    title: "Safe, Secure & Loving Campus",
    desc: "Comprehensive CCTV coverage, monitored entry/exit, child-safe rounded furniture, and rigorous hygiene protocols.",
    color: "bg-mint-50 text-mint-600",
    borderColor: "border-mint-200",
    icon: "ShieldCheck",
  },
  {
    title: "Individual Attention & Small Batches",
    desc: "Intentionally balanced student-teacher ratios ensure every child is heard, celebrated, and guided at their own developmental pace.",
    color: "bg-coral-50 text-coral-600",
    borderColor: "border-coral-200",
    icon: "Users",
  },
  {
    title: "Solid Foundations for Higher Schooling",
    desc: "Mastery of essential language, mathematical logic, and emotional resilience prepares children effortlessly for formal schooling.",
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200",
    icon: "GraduationCap",
  },
  {
    title: "Active Parent-School Partnership",
    desc: "Transparent regular communication, developmental updates, parenting workshops, and an open-door policy for all families.",
    color: "bg-bubblegum-50 text-bubblegum-600",
    borderColor: "border-bubblegum-200",
    icon: "SmilePlus",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "admissions" | "campus" | "curriculum" | "safety";
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Where is ASPAL International located in Noida?",
    answer: "ASPAL International is conveniently located in Sector 55, Noida, Uttar Pradesh, offering easy accessibility for families living across Sector 55, Sector 56, Sector 62, Sector 12, Sector 22, and surrounding Noida localities.",
    category: "campus",
  },
  {
    question: "What grades and age groups are eligible for admission?",
    answer: "We welcome children from ages 2.5 to 10 years across Early Years (Playgroup, Nursery, LKG, UKG) and Primary School (Grades 1 to 5). Exact age eligibility guidelines follow local educational department norms; please see our Admissions page for detailed criteria.",
    category: "admissions",
  },
  {
    question: "How do I schedule a school visit or campus tour?",
    answer: "You can book a school visit online through our 'Book a School Visit' form, call our admissions helpline directly at +91 9873539445, or email Rakeshpandey2001@gmail.com. We schedule tours during school hours so you can witness our vibrant learning environment in action.",
    category: "admissions",
  },
  {
    question: "What safety and security measures are in place?",
    answer: "Child safety is our highest commitment. The campus features continuous CCTV surveillance across all classrooms and play zones, verified security guards at gates, strict visitor logging, child-safe non-toxic infrastructure, and thorough background checks for all teaching and support staff.",
    category: "safety",
  },
  {
    question: "What is your teaching methodology?",
    answer: "We practice an experiential, inquiry-driven, and play-based curriculum. Rather than rote memorization, children engage with concrete manipulatives, phonic storytelling, scientific discovery, and creative arts that instill genuine understanding and joyful confidence.",
    category: "curriculum",
  },
  {
    question: "Are meals / snacks provided, or do children bring their own tiffin?",
    answer: "[ADD SCHOOL TIFFIN / CAFETERIA POLICY: Currently parents are guided with healthy nutrition plans for homemade tiffins. Inquire during campus visit for specifics].",
    category: "campus",
  },
  {
    question: "Why is ASPAL International considered the best kids school and play school in Sector 55, Noida?",
    answer: "ASPAL International is trusted as a top kids school and primary school in Sector 55, Noida due to our 100% CCTV-monitored child-safe campus, 1:12 low student-teacher ratio, certified 42+ Synthetic Phonics lab, concrete CPA math curriculum, and joyful, activity-based learning environment for young learners.",
    category: "curriculum",
  },
  {
    question: "Which sectors in Noida are covered by your school transport and van facility?",
    answer: "Our GPS-tracked, verified school transport service covers families living in Sector 55, Sector 56, Sector 62, Sector 12, Sector 22, Sector 51, Sector 50, Sector 34, Sector 53, and Sector 57 Noida.",
    category: "campus",
  },
  {
    question: "What documents are required for admission enrolment?",
    answer: "Standard required documents include the child's birth certificate, 4 passport-size photographs, proof of residence in Noida/NCR, immunization record card, and previous school report card/transfer certificate (for Grade 1 and above).",
    category: "admissions",
  },
];

