export const SITE = {
  name: "Varthamaan Yoga",
  logo: "https://varthamaanyoga.com/wp-content/uploads/2025/02/Add-a-heading-5.png",
  logoRemote: "https://varthamaanyoga.com/wp-content/uploads/2025/02/Add-a-heading-5.png",
  admissionsPhone: "+91 63033 06297",
  admissionsTel: "+916303306297",
  whatsapp: "https://wa.me/916303306297",
  whatsappText: (topic: string) =>
    `https://api.whatsapp.com/send?phone=916303306297&text=${encodeURIComponent(
      `Hi Varthamaan Yoga, I am looking for ${topic}`,
    )}`,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61569151134758",
    instagram: "https://www.instagram.com/varthamaanyoga/",
    youtube: "https://www.youtube.com/channel/UC4fcmWWceTdxI9hbP-Wr9Zw",
    linkedin: "https://www.linkedin.com/company/varthamaan-yoga",
  },
};

export type Branch = {
  slug: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  map: string;
  intro: string;
  offers: string[];
  courseSlugs: string[];
  image: string;
};

export const BRANCHES: Branch[] = [
  {
    slug: "hyderabad",
    city: "Hyderabad",
    area: "Jubilee Hills",
    address:
      "3rd floor, Varthamaan Yoga, Road Number 5, Women's Welfare Housing Society, Jubilee Hills, Hyderabad, Telangana 500033",
    phone: "8686886108",
    map: "https://maps.app.goo.gl/JYRn2P7pkXTewyQ68",
    intro:
      "Our home studio in the heart of Hyderabad. Spacious, well-ventilated practice rooms with quality yoga props, premium aerial hammocks and sturdy rigging, where Adi Master leads the flagship teacher trainings.",
    offers: [
      "Regular offline classes: Aerial Yoga and Asana Practice",
      "300 Hour Ashtanga Vinyasa/Hatha TTC (offline, Jubilee Hills Road No. 5)",
      "50 Hour Aerial Yoga TTC (Jubilee Hills)",
      "50 Hour Yin Yoga TTC (offline)",
      "Multi Style, Pregnancy and Yoga Therapy trainings",
    ],
    courseSlugs: [
      "300-hour-yoga-teacher-training",
      "aerial-yoga-teacher-training",
      "yin-yoga-teacher-training",
      "multi-style-yoga-teacher-training",
      "pregnancy-yoga-teacher-training-course",
      "yoga-therapy-teacher-training",
    ],
    image: "https://varthamaanyoga.com/wp-content/uploads/2025/06/varthamaanyoga.com-200-hour-yoga-ttc-200-hour-yoga-ttc.jpg",
  },
  {
    slug: "khammam",
    city: "Khammam",
    area: "Munawwarpet",
    address:
      "3-7-161/3/1, Sundaraya Nagar, near Darga, Munawwarpet, Yedulapuram, Khammam, Telangana 507003",
    phone: "6303306297",
    map: "https://maps.app.goo.gl/QFFQgfZF1x2Xqd3y5",
    intro:
      "Varthamaan Yoga's Khammam centre brings the same research-based teaching and small batches to eastern Telangana. Its number, 6303306297, is also our main admissions line.",
    offers: [
      "200 Hour Ashtanga Vinyasa/Hatha TTC (offline, Khammam and Guntur)",
      "50 Hour Yin Yoga TTC (Hyderabad and Khammam)",
      "50 Hour Aerial Yoga TTC",
      "Multi Style Yoga Teacher Training",
    ],
    courseSlugs: [
      "200-hour-yoga-teacher-training",
      "yin-yoga-teacher-training",
      "aerial-yoga-teacher-training",
      "multi-style-yoga-teacher-training",
    ],
    image: "https://varthamaanyoga.com/wp-content/uploads/2025/06/Untitled-design-29-1024x536.jpg",
  },
  {
    slug: "warangal",
    city: "Warangal",
    area: "Azam Jahi Mills Colony",
    address: "11-14-41, O City, Azam Jahi Mills Colony, Warangal, Telangana 506002",
    phone: "9491348547",
    map: "https://maps.app.goo.gl/v49wFM3x8ktzoJtt7",
    intro:
      "Our Warangal centre serves practitioners and aspiring teachers across the region, with the same Yoga Alliance accredited curriculum taught at every Varthamaan Yoga branch.",
    offers: [
      "Aerial Yoga Teacher Training sessions",
      "Multi Style Yoga Teacher Training (offline and online)",
    ],
    courseSlugs: [
      "aerial-yoga-teacher-training",
      "multi-style-yoga-teacher-training",
    ],
    image: "https://varthamaanyoga.com/wp-content/uploads/2025/06/Untitled-design-35-1024x536.jpg",
  },
  {
    slug: "guntur",
    city: "Guntur",
    area: "Rajendra Nagar South",
    address:
      "Kalyana Mandapam, Rajendra Nagar South, Stambalagaruvu, Guntur, Andhra Pradesh 522006",
    phone: "9392187954",
    map: "https://maps.app.goo.gl/xV6oKMyU5LnpPwkC6",
    intro:
      "Our Andhra Pradesh centre in Guntur. Call 9392187954 for class fees and the next teacher training batch, the same number listed for online and offline class enquiries.",
    offers: [
      "200 Hour Ashtanga Vinyasa/Hatha TTC (offline, Khammam and Guntur)",
      "Aerial Yoga Teacher Training",
      "Multi Style Yoga Teacher Training",
      "Online and offline practice sessions",
    ],
    courseSlugs: [
      "200-hour-yoga-teacher-training",
      "aerial-yoga-teacher-training",
      "multi-style-yoga-teacher-training",
    ],
    image: "https://varthamaanyoga.com/wp-content/uploads/2025/06/Untitled-design-27-945x1024.jpg",
  },
];

export const TEAM = [
  { name: "Adi Narayana", role: "Founder, PGDYT (S-Vyasa), E-RYT 500, RPYS, RCYS, YACEP", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design.jpg" },
  { name: "Prathibha Vadlamani", role: "PGDYT (S-Vyasa), Yoga Therapist, Pre & Postnatal", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-4.jpg" },
  { name: "Sandhya Miryala", role: "MSc Yoga (S-Vyasa), RYT 200, Aerial Yoga, Pre & Postnatal", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-1.jpg" },
  { name: "Sahaja", role: "MSc Yoga (S-Vyasa), RYT 200, Aerial Yoga", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-6.jpg" },
  { name: "Samatha Ravuri", role: "MSc Yoga, Yoga Therapist, RYT 200, Pre & Postnatal", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-3.jpg" },
  { name: "Ramya Velluri", role: "YIC, Yoga Therapy, MSc Yoga", img: "https://varthamaanyoga.com/wp-content/uploads/2025/08/varthamaanyoga.com-home-ramya-velluri.jpg" },
  { name: "Pravalika", role: "YIC, Pre & Postnatal", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-7.jpg" },
  { name: "Amulya Yalamaddi", role: "YIC, Yoga Therapist, Yin Yoga, RYT 200", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-2.jpg" },
  { name: "Sumalatha A", role: "YIC, Yoga Therapist, RYT 200", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-8.jpg" },
  { name: "Kusuma Gowrisetty", role: "MSc Yoga, Yoga Therapist, RYT 200, Pre & Postnatal", img: "https://varthamaanyoga.com/wp-content/uploads/2025/04/Untitled-design-5.jpg" },
];

export const HOME_FAQS = [
  { q: "How long does 300 Hours teachers training last?", a: "4 weeks" },
  { q: "Can I teach Yoga after 200 hours yoga teacher training?", a: "Yes. It offers a wide source of opportunities." },
  { q: "What is RYT?", a: "RYT stands for Registered Yoga School under Yoga Alliance." },
  { q: "Does Varthamaan Yoga offer continuous education through Yoga Alliance?", a: "All our courses are accredited with Yoga Alliance." },
  { q: "What Yoga certifications are best?", a: "RYT 200, RYT 300 are some of the best certifications in yoga." },
  { q: "Which country is best for Yoga Teacher Training?", a: "India" },
  { q: "Should I get a 200 hours or 300 hours yoga teacher training?", a: "A 200 hours is a prerequisite for 300 hours teacher training." },
  { q: "Where is your Yoga teacher training course located?", a: "In Hyderabad, Khammam, Warangal, Guntur." },
  { q: "What is the age limit for Yoga course?", a: "There is no age limit unless the person is medically fit." },
  { q: "What programs are offered at Varthamaan Yoga?", a: "We offer RYT 200, RYT 300, Aerial yoga, YIN yoga." },
];

export const WORKSHOPS = [
  { title: "Aerial yoga", text: "A dynamic practice using silk hammocks to enhance flexibility, strength, and spinal decompression while deepening yoga postures.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/i-2.png" },
  { title: "Yin Yoga", text: "A meditative practice focusing on deep, long-held stretches that improve joint mobility, release tension.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/i-1-1.png" },
  { title: "Advanced Asanas", text: "Designed for experienced practitioners to refine challenging postures, build strength, and improve endurance in yoga practice.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/G-3-1.jpg" },
  { title: "Pranayamas & Relaxation techniques", text: "Breath control exercises combined with guided relaxation to enhance mental clarity, reduce stress, and improve overall well-being.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/i-4.png" },
  { title: "Kids & prenatal yoga", text: "Specially crafted sessions that support growing children and expecting mothers with gentle movements, breathwork, and mindfulness.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/i-3.png" },
  { title: "Yoga classes", text: "Expert-led sessions catering to all levels, focusing on strength, flexibility, relaxation, and overall wellness through holistic yoga practices.", img: "https://varthamaanyoga.com/wp-content/uploads/2025/03/multi-style-yoga-teacher-training-1.png" },
];

export const OFFLINE_HOME = [
  { title: "Ashtanga vinyasa", text: "Build strong foundations in Ashtanga Vinyasa/Hatha Yoga with deep practice in asana techniques, philosophy, and teaching methodology.", img: "https://varthamaanyoga.com/wp-content/uploads/elementor/thumbs/barefoot-sporty-senior-couple-practicing-yoga-at-h-GCRR59Q-r3dh60vilulwb7or7uw373fc4rtbdo6627nmbqd89c.jpg" },
  { title: "Hatha Flow", text: "Experience Mysore-style guided self-practice, learning structured sequences like Aarogya Beginner, Aarogya Pro and the Primary Series.", img: "https://varthamaanyoga.com/wp-content/uploads/elementor/thumbs/yoga-practicing-HSCDRZM-r3dh60vilulwb7or7uw373fc4rtbdo6627nmbqd89c.jpg" },
  { title: "Aerial yoga", text: "Enhance your inner peace with key shlokas, pranayama techniques, and deep insights into Raja Yoga, Karma Yoga, and Bhakti Yoga.", img: "https://varthamaanyoga.com/wp-content/uploads/elementor/thumbs/woman-doing-yoga-and-meditating-practicing-yoga-a-5SK76MP-1-r3dh60vilulwb7or7uw373fc4rtbdo6627nmbqd89c.jpg" },
  { title: "Yin Yoga", text: "Learn anatomy-based asana corrections, self-practice, and yoga sutras for a holistic teaching approach and mindful relaxation.", img: "https://varthamaanyoga.com/wp-content/uploads/elementor/thumbs/yoga-QPRE97T-r3dh60vilulwb7or7uw373fc4rtbdo6627nmbqd89c.jpg" },
];

export const ONLINE_SESSIONS = [
  { title: "Aarogya", text: "A foundational yoga program promoting physical health, mental clarity, and inner harmony." },
  { title: "Aarogya Pro", text: "A dedicated practice that cultivates consistency, discipline, and deeper self-awareness through yoga." },
  { title: "Abhyasa", text: "A dedicated practice that cultivates consistency, discipline, and deeper self-awareness through yoga." },
  { title: "YIN Sessions", text: "Yin Yoga is a restorative journey that takes you through blissful, long-held postures designed to nurture your body and soul." },
  { title: "Iyengar Yoga", text: "Iyengar Yoga is a form of Hatha Yoga that emphasizes precision, alignment, and the use of props to achieve balance." },
  { title: "Multi Style Yoga", text: "A dedicated practice that cultivates consistency, discipline, and deeper self-awareness through yoga." },
];

export const YOGA_ALLIANCE = {
  history:
    "Yoga Alliance USA was established to create a unified standard for the teaching community of yoga. Its mission is to inspire and support the integrity and diversity of yoga practice.",
  values:
    "The core values of Yoga Alliance encompass inclusivity, integrity, and continuous learning. They strive to honor the rich traditions of yoga while embracing contemporary needs and practices.",
  membership:
    "Yoga Alliance presents a range of membership options, including Registered Yoga Teacher (RYT) and Registered Yoga School (RYS), each defined by specific criteria and rewarding benefits. There are various membership opportunities available through Yoga Alliance, designed to empower and enrich your journey in the yoga community.",
  advantages: [
    { title: "Global Recognition", text: "Achieving certification from Yoga Alliance USA guarantees you global recognition, significantly boosting your credibility as a qualified yoga teacher." },
    { title: "Credibility and Trust", text: "A certification from Yoga Alliance USA is proof that you've met rigorous standards, establishing trust and goodwill with both students and employers." },
    { title: "Networking Opportunities", text: "Membership with Yoga Alliance connects you to an extensive network of yoga professionals, fostering collaboration and growth." },
    { title: "Continuing Education", text: "Yoga Alliance provides abundant resources for continuing education, ensuring you remain at the forefront of yoga teaching." },
    { title: "Legal Benefits", text: "Being affiliated with a recognized organization delivers essential legal protection and support in your yoga career." },
    { title: "Enhanced Career Prospects", text: "A Yoga Alliance USA certification elevates your career prospects, opening doors to numerous teaching positions both domestically and internationally." },
  ],
};
