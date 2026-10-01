/**
 * Indian Play School Content & Curriculum Data
 * Modeled after SuperOwly layout structure with rich Indian preschool culture
 */

export const schoolPillars = [
  {
    id: "early-years",
    title: "Holistic Early Learning",
    badge: "Playgroup to UKG",
    color: "#ffbd0a", // Sunshine Yellow
    iconName: "GraduationCap",
    image: "/images/card_storytime.jpg",
    description: "NEP 2020 Panchakosha & Montessori methodology fostering linguistic, cognitive, and social development through joyful hands-on play.",
    buttonText: "Explore Classes"
  },
  {
    id: "satvik-meals",
    title: "Nutritious Satvik Meals",
    badge: "Prepared In-House",
    color: "#a6c437", // Olive Green
    iconName: "Apple",
    image: "/images/card_meals.jpg",
    description: "Pure vegetarian, warm, freshly cooked snacks planned by pediatric nutritionists: fresh fruits, milk, sprouted moong, khichdi & nuts.",
    buttonText: "Meal Timetable"
  },
  {
    id: "safe-daycare",
    title: "Loving Daycare & CCTV",
    badge: "Live Parent Access",
    color: "#f05a21", // Coral Orange
    iconName: "ShieldCheck",
    image: "/images/card_daycare.jpg",
    description: "Full-day & half-day childcare with loving Didis, pediatric first-aid, hygienic air-conditioned nap zones, and mobile CCTV live streaming.",
    buttonText: "Daycare Details"
  }
];

export const programsList = [
  {
    id: "toddlers",
    name: "Toddler Nest & Infant Daycare",
    hindiName: "शिशु गृह (Shishu Griha)",
    age: "1.5 to 2.5 Years",
    timings: "8:30 AM – 12:30 PM / 6:30 PM",
    batchRatio: "1:4 (Educator & Didi)",
    color: "from-amber-400 to-amber-500",
    badgeBg: "bg-amber-100 text-amber-800",
    description: "Gentle motherly transition from home to school. Sensory exploration, tactile toys, music, soft play mats, and language foundation.",
    highlights: ["Sensory motor play", "Potty training support", "Gentle lullaby nap zone", "Daily digital activity log"],
    image: "/images/card_daycare.jpg"
  },
  {
    id: "playgroup",
    name: "Playgroup — Anand Vatika",
    hindiName: "आनंद वाटिका (Anand Vatika)",
    age: "2.0 to 3.0 Years",
    timings: "9:00 AM – 12:00 PM",
    batchRatio: "1:8 Ratio",
    color: "from-emerald-400 to-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-800",
    description: "Interactive social circle, vocabulary building, water & sand play, finger painting, and moral stories from Panchatantra.",
    highlights: ["Rhymes in English & Hindi", "Scribble & clay art", "Outdoor sensory garden", "Sharing & social bonds"],
    image: "/images/card_storytime.jpg"
  },
  {
    id: "nursery",
    name: "Nursery — Bal Vihar",
    hindiName: "बाल विहार (Bal Vihar)",
    age: "3.0 to 4.0 Years",
    timings: "9:00 AM – 12:30 PM",
    batchRatio: "1:10 Ratio",
    color: "from-orange-400 to-orange-500",
    badgeBg: "bg-orange-100 text-orange-800",
    description: "Jolly Phonics, pre-math concepts, pattern writing, nature discovery, and kid yoga for focus and posture.",
    highlights: ["Letter & number phonics", "Panchakosha balance", "Little Yogis sessions", "Stage presentation practice"],
    image: "/images/hero_slide2.jpg"
  },
  {
    id: "lkg",
    name: "Junior KG (LKG)",
    hindiName: "बाल भारती (Bal Bharati)",
    age: "4.0 to 5.0 Years",
    timings: "8:45 AM – 1:00 PM",
    batchRatio: "1:12 Ratio",
    color: "from-sky-400 to-sky-500",
    badgeBg: "bg-sky-100 text-sky-800",
    description: "Early reading, structured writing, bilingual conversational fluency, basic STEM experiments, and creative dramatics.",
    highlights: ["Blends & sight words", "Mental math & logic", "Environmental studies", "Role play & puppetry"],
    image: "/images/hero_slide1.jpg"
  },
  {
    id: "ukg",
    name: "Senior KG (UKG)",
    hindiName: "विद्या प्रवेश (Vidya Pravesh)",
    age: "5.0 to 6.0 Years",
    timings: "8:45 AM – 1:30 PM",
    batchRatio: "1:12 Ratio",
    color: "from-indigo-400 to-indigo-500",
    badgeBg: "bg-indigo-100 text-indigo-800",
    description: "Complete formal primary school readiness (CBSE / ICSE / IB curriculum transition), cursive strokes, public speaking and coding logic.",
    highlights: ["Smooth Grade 1 Transition", "Story writing & comprehension", "Junior Science Tinkering", "Indian cultural heritage"],
    image: "/images/hero_slide3.jpg"
  },
  {
    id: "after-school",
    name: "Sanskar & Activity Club",
    hindiName: "संस्कार एवं कला मंच (Sanskar Manch)",
    age: "3.0 to 10.0 Years",
    timings: "3:30 PM – 6:30 PM",
    batchRatio: "1:10 Ratio",
    color: "from-rose-400 to-rose-500",
    badgeBg: "bg-rose-100 text-rose-800",
    description: "Holistic evening enrichment: Classical dance basics, keyboard/tabla, shloka chanting, chess, robotics, and guided homework support.",
    highlights: ["Shlokas & Gita for kids", "Kathak & Bharatanatyam basics", "Speed Math & Abacus", "Homework assistance"],
    image: "/images/card_storytime.jpg"
  }
];

export const upcomingIndianEvents = [
  {
    id: 1,
    title: "Janmashtami Bal Gopal & Radha Utsav",
    date: "AUG 28",
    day: "Wednesday",
    time: "9:30 AM – 12:30 PM",
    location: "Main Courtyard & Stage",
    description: "Fancy dress competition for toddlers, mini hand-painted butter pot decorating, and flower matki-phod celebration.",
    badge: "Festive Celebration"
  },
  {
    id: 2,
    title: "Grandparents' Blessing Day (Matru-Pitru Pujan)",
    date: "SEP 14",
    day: "Saturday",
    time: "10:00 AM – 1:00 PM",
    location: "Campus Amphitheatre",
    description: "Special tea & snack morning where little ones wash feet of elders, present handmade cards, and recite grandfather rhymes.",
    badge: "Sanskar Event"
  },
  {
    id: 3,
    title: "Diwali Diya Mela & Rangoli Carnival",
    date: "OCT 25",
    day: "Friday",
    time: "9:00 AM – 1:30 PM",
    location: "Pre-School Activity Lawn",
    description: "Eco-friendly clay diya painting, organic flower petal rangolis, festive dance performances, and distribution of healthy sweets.",
    badge: "Community Fair"
  },
  {
    id: 4,
    title: "Bal Khel Mahotsav — Annual Little Olympics",
    date: "DEC 07",
    day: "Saturday",
    time: "8:30 AM – 12:30 PM",
    location: "Green Turf & Track",
    description: "Toddler obstacle run, tricycle sprint, sack hopping, parent-child relay races, and medal distribution.",
    badge: "Sports Utsav"
  }
];

export const curriculumPillars = [
  {
    id: 1,
    title: "Linguistic & Phonics Mastery",
    iconName: "BookOpen",
    color: "#ffbd0a",
    description: "Jolly Phonics blends, story circles, plus conversational Hindi/regional mother tongues to build natural multilingual confidence."
  },
  {
    id: 2,
    title: "Sanskar, Morals & Shlokas",
    iconName: "HeartHandshake",
    color: "#f05a21",
    description: "Daily morning Gayatri/Saraswati Vandana, Panchatantra wisdom tales, gratitude practices, and respect for nature and elders."
  },
  {
    id: 3,
    title: "Little Yogis & Gross Motor Fitness",
    iconName: "Activity",
    color: "#a6c437",
    description: "Playful animal asanas (Cat-Cow, Cobra, Tree pose), pranayama breathing bubbles, and balance beams for core motor balance."
  },
  {
    id: 4,
    title: "STEM Tinkering & Nature Lab",
    iconName: "Sparkles",
    color: "#0ea5e9",
    description: "Planting organic seeds in our sensory garden, magnet mazes, floating-sinking water tubs, and child-safe microscope discovery."
  },
  {
    id: 5,
    title: "Folk Art, Clay & Rangoli",
    iconName: "Palette",
    color: "#ec4899",
    description: "Natural non-toxic clay pottery, Warli stamp art, vegetable printing, and vibrant finger crafts to stimulate fine motor creativity."
  },
  {
    id: 6,
    title: "Music, Taal & Natya (Drama)",
    iconName: "Music",
    color: "#8b5cf6",
    description: "Indian percussion instruments (mini dholaks, manjira, shakers), classical swar sargam, rhyme enactments, and puppet theatres."
  }
];

export const dailyRoutineSchedule = [
  {
    time: "8:30 AM - 9:00 AM",
    title: "Joyful Welcome & Health Check",
    details: "Gentle temperature screening, warm hugs by Didis, changing shoes, free hand greeting."
  },
  {
    time: "9:00 AM - 9:30 AM",
    title: "Morning Assembly & Little Yogis",
    details: "Saraswati Vandana, Gayatri Shloka, animal yoga stretches, good morning circle rhyme."
  },
  {
    time: "9:30 AM - 10:30 AM",
    title: "Core Cognitive & Phonics Fun",
    details: "Montessori sensorial apparatus, letter sounds, flashcards, number counting beads."
  },
  {
    time: "10:30 AM - 11:00 AM",
    title: "Satvik Refreshment & Snack Time",
    details: "Fresh organic seasonal fruits, warm milk/almond shake, steamed idli or poha with table manners."
  },
  {
    time: "11:00 AM - 11:45 AM",
    title: "Outdoor Splash, Sand & Gross Motor Play",
    details: "Sandcastle building, splash pool, slides, tricycle track, balance beams under green shade."
  },
  {
    time: "11:45 AM - 12:30 PM",
    title: "Story Weaver & Folk Art Corner",
    details: "Panchatantra puppet show, finger painting, Warli patterns, clay moulding."
  },
  {
    time: "12:30 PM - 1:00 PM",
    title: "Wind Down & Half-Day Dispersal",
    details: "Review of the day, thank you song, safe hand-over to parents/authorized guardian via OTP/RFID."
  },
  {
    time: "1:00 PM - 6:30 PM",
    title: "Daycare: Warm Lunch, Snooze & Hobby Club",
    details: "Warm freshly prepared lunch, cozy AC nap time with Didis, evening milk & cookie, dance/music/chess classes."
  }
];

export const testimonialsList = [
  {
    id: 1,
    parentName: "Dr. Ananya Iyer & Dr. R. Iyer",
    relation: "Parents of Aarav (Age 3.5 - Nursery)",
    avatar: "/images/parent_avatar_1.jpg",
    quote: "As medical professionals, safety, cleanliness, and emotional security were our highest priorities. The live CCTV access gives us complete peace of mind during our hospital rounds. Aarav now chants the Gayatri mantra every morning before his breakfast!",
    rating: 5,
    tag: "Doctor Parents"
  },
  {
    id: 2,
    parentName: "Vikram & Priya Malhotra",
    relation: "Parents of Samaira (Age 2.5 - Playgroup)",
    avatar: "/images/parent_avatar_2.jpg",
    quote: "The warmth of the Didis and teachers is incredible. Samaira used to be extremely shy, but within 2 months of joining Anand Vatika, she sings nursery rhymes in both English and Hindi and eagerly packs her school bag every morning.",
    rating: 5,
    tag: "Tech Professional Parents"
  },
  {
    id: 3,
    parentName: "Sunita & Rajesh Aggarwal",
    relation: "Parents of Dhruv (Age 5 - UKG)",
    avatar: "/images/parent_avatar_3.jpg",
    quote: "Dhruv cleared the admission interviews of three of the top CBSE schools effortlessly! The school's Vidya Pravesh program gave him remarkable phonics reading speed, math intuition, and courteous stage presence.",
    rating: 5,
    tag: "Primary School Transition"
  }
];

export const statisticsList = [
  {
    id: 1,
    value: 15,
    suffix: "+",
    label: "Years of Trust & Excellence",
    sublabel: "Est. 2010"
  },
  {
    id: 2,
    value: 2800,
    suffix: "+",
    label: "Happy Children Graduated",
    sublabel: "To Top CBSE/ICSE/IB Schools"
  },
  {
    id: 3,
    value: 36,
    suffix: "+",
    label: "Certified Early Edu-Carers",
    sublabel: "Montessori & ECCE Certified"
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "CCTV & GPS Van Coverage",
    sublabel: "Full Safety Guarantee"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Janmashtami Kanha Fancy Dress & Utsav",
    category: "Festivals",
    image: "/images/gallery_festival.jpg"
  },
  {
    id: 2,
    title: "Montessori Math & Wooden Block Learning",
    category: "Classroom",
    image: "/images/hero_slide2.jpg"
  },
  {
    id: 3,
    title: "Little Yogis Morning Breathing & Namaste",
    category: "Sensory & Yoga",
    image: "/images/gallery_yoga.jpg"
  },
  {
    id: 4,
    title: "Outdoor Playground Slides & Garden Fun",
    category: "Outdoors",
    image: "/images/gallery_outdoor.jpg"
  },
  {
    id: 5,
    title: "Creative Finger Painting & Art Expression",
    category: "Classroom",
    image: "/images/hero_slide3.jpg"
  },
  {
    id: 6,
    title: "Heritage Panchatantra Story Circle",
    category: "Sensory & Yoga",
    image: "/images/card_storytime.jpg"
  }
];

export const faqsList = [
  {
    question: "What is the age criteria for admission to Playgroup & Nursery for 2027-28?",
    answer: "As per the NEP 2020 guidelines: For Playgroup, child should be 2 years complete as of June 1st. For Nursery, child should be 3 years complete. For LKG and UKG, 4 and 5 years respectively."
  },
  {
    question: "How can parents access the live CCTV cameras?",
    answer: "Every enrolled parent receives secure credentials on our Mobile App with encrypted live video feeds covering classroom activity areas, dining room, nap room, and play arena during school hours."
  },
  {
    question: "Does my child need to be completely toilet trained before joining?",
    answer: "No, toilet training is a natural developmental milestone. Our gentle female attendants (Didis) guide toddlers with loving patience and help instill regular washroom habits with hygienic child-sized toilets."
  },
  {
    question: "What meals are provided at school?",
    answer: "We serve freshly cooked 100% vegetarian satvik meals: morning fruit break (seasonal papayas, bananas, apples), mid-day warm snack (poha, idli-sambar, vegetable suji upma, paneer sandwiches), and evening milk with dry fruits for daycare children."
  },
  {
    question: "Is school transport available and is it safe?",
    answer: "Yes, we operate GPS-tracked, speed-governed air-conditioned school vans. Every van has an experienced verified driver, a caring female Didi attendant, a first aid box, and real-time parent tracking via WhatsApp/SMS alerts."
  }
];

export const weeklySatvikMenu = [
  {
    day: "Monday",
    morningSnack: "Fresh Papaya & Sweet Apple slices + Warm Gir Cow Milk",
    lunch: "Soft Moong Dal Khichdi with A2 Cow Ghee & Cucumber sticks",
    eveningSnack: "Lightly Roasted Rock Salt Makhana & Elaichi Milk",
    tag: "Energy & Digestibility"
  },
  {
    day: "Tuesday",
    morningSnack: "Steamed Vegetable Idlis with Coconut Chutney + Sweet Lime Juice",
    lunch: "Mild Paneer & Matar Bhurji with Soft Whole Wheat Phulkas & Curd",
    eveningSnack: "Steamed Sweet Corn & Carrot Fingers + Coconut Water",
    tag: "High Protein & Calcium"
  },
  {
    day: "Wednesday",
    morningSnack: "Sprouted Moong & Pomegranate Chaat + Homemade Banana Almond Shake",
    lunch: "Vegetable Dalia Pulao with Sprouted Moong Dal & Tomato Soup",
    eveningSnack: "Whole Wheat Jaggery Cookies + Seasonal Chikoo Smoothie",
    tag: "Immunity & Fiber"
  },
  {
    day: "Thursday",
    morningSnack: "Soft Vegetable Poha with Fresh Peas & Melons",
    lunch: "Traditional Gujarati Kadi with Steamed Rice & Methi Thepla",
    eveningSnack: "Sprouted Black Chana Sundal & Warm Milk with Cardamom",
    tag: "Gut Health & Iron"
  },
  {
    day: "Friday",
    morningSnack: "Organic Ragi & Oats Sheera (Jaggery) + Crunchy Roasted Makhana",
    lunch: "Palak & Sweet Corn Pulao with Yellow Tadka Dal & Soft Curd",
    eveningSnack: "Handmade Fig & Dry Fruit Laddoo + Cut Fruit Chunks",
    tag: "Bone Density & Strength"
  },
  {
    day: "Saturday",
    morningSnack: "Mixed Vegetable Suji Upma with Coconut + Fresh Orange Wedges",
    lunch: "Panchmel Dal Khichdi with Fresh White Makkhan & Mint Chaas",
    eveningSnack: "Steamed Khaman Dhokla with Mint Dip + Warm Milk",
    tag: "Weekend Nourishment"
  }
];

export const satvikNutritionPrinciples = [
  {
    title: "100% Pure Satvik",
    description: "Pure vegetarian, zero onion, zero garlic, prepared with calm, positive mindfulness.",
    icon: "Apple"
  },
  {
    title: "Desi Gir Cow A2 Ghee",
    description: "Cooked in traditional bilona A2 Desi cow ghee to nourish healthy brain and neurological development.",
    icon: "Sparkles"
  },
  {
    title: "Zero Refined Sugar",
    description: "Sweetened naturally with organic jaggery, figs, and dates. Strictly no white sugar or chemicals.",
    icon: "Heart"
  },
  {
    title: "RO + UV Purified Water",
    description: "All ingredients washed and prepared with multi-stage mineral-safe sterilized water.",
    icon: "ShieldCheck"
  }
];

export const daycareDetailsData = {
  timings: [
    { type: "Half-Day Daycare", time: "8:30 AM – 12:30 PM", badge: "Morning Batch", desc: "Includes morning shlokas, sensory play, fruit break & preschool circle." },
    { type: "Full-Day Daycare", time: "8:30 AM – 6:30 PM", badge: "Popular Choice", desc: "Includes lunch, AC cot nap time, evening hobby club, milk & snack." },
    { type: "After-School Care", time: "1:30 PM – 6:30 PM", badge: "Primary Kids", desc: "Guided homework, classical music, dance, chess & cognitive games." }
  ],
  features: [
    { title: "1:4 Motherly Ratio", desc: "Every 4 toddlers have a dedicated loving female attendant (Didi) for personalized maternal care." },
    { title: "Air-Conditioned Nap Zone", desc: "Hygienic individual wooden cots, organic washed cotton sheets, and soothing lullabies." },
    { title: "Live CCTV Access", desc: "Encrypted HD mobile feed on iOS/Android for complete peace of mind while at work." },
    { title: "Satvik Hot Meals", desc: "Warm pediatrician-curated meals, morning fruit break, and evening organic milk." },
    { title: "Pediatric First-Aid", desc: "Trained nursing assistance, child-safe rounded furniture, and on-call doctor visits." },
    { title: "Digital WhatsApp Diary", desc: "Real-time updates on meal intake, diaper changes, nap duration, and joyful milestone photos." }
  ]
};

