// ==========================================
// بيانات موقع جمعية الرحمة
// يمكنك تعديل جميع البيانات من هذا الملف
// ==========================================

// معلومات الجمعية الأساسية
export const associationInfo = {
  name: "جمعية الرحمة",
  fullName: "جمعية الرحمة للتربية والتنمية والأعمال الاجتماعية",
  location: "مكناس، المغرب",
  vision: "تغطية جميع مدن المغرب",
  mission:
    "نشر العلم الشرعي الصحيح عبر دعم الدعاة والأساتذة الثقات وتوفير وسائل التصوير والبث",
  values: ["الأمانة", "الشفافية", "الإخلاص", "نشر العلم الصحيح"],
  foundedYear: 2020,
};

// معلومات التواصل
export const contactInfo = {
  phone: "+212 535 XX XX XX",
  email: "info@alrahma-meknes.org",
  address: "مكناس، المغرب",
  whatsapp: "+212 6XX XX XX XX",
};

// روابط التواصل الاجتماعي
export const socialLinks = {
  facebook: "https://facebook.com/alrahma",
  instagram: "https://instagram.com/alrahma",
  youtube: "https://youtube.com/@alrahma",
};

// معلومات التبرع (RIB)
export const donationInfo = {
  bankName: "البنك الشعبي",
  accountName: "جمعية الرحمة للتربية والتنمية",
  rib: "000 000 0000000000000000 00",
  iban: "MA00 0000 0000 0000 0000 0000 000",
  swift: "XXXXMAXX",
};

// إحصائيات الإنجازات
export const stats = {
  supportedScholars: 15,
  citiesCovered: 8,
  lessonsRecorded: 500,
  beneficiaries: 50000,
};

// المبادرات
export const initiatives = [
  {
    id: 1,
    name: "مبادرة الخميسات",
    city: "الخميسات",
    description:
      "تجهيز المساجد والدعاة بمدينة الخميسات بالأدوات اللازمة لتسجيل ونشر الدروس",
    status: "مكتملة",
    image:
      "https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=600",
    scholars: 3,
    equipment: ["كاميرا", "ميكروفون", "حامل"],
  },
  {
    id: 2,
    name: "مبادرة الصخيرات",
    city: "الصخيرات",
    description: "دعم الدعاة والأساتذة في مدينة الصخيرات لنشر العلم الشرعي",
    status: "جارية",
    image:
      "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600",
    scholars: 2,
    equipment: ["كاميرا", "ميكروفون"],
  },
  {
    id: 3,
    name: "مبادرة مكناس",
    city: "مكناس",
    description: "تجهيز دعاة مدينة مكناس بأحدث الأدوات التقنية للتصوير والبث",
    status: "مكتملة",
    image:
      "https://images.pexels.com/photos/3753993/pexels-photo-3753993.jpeg?auto=compress&cs=tinysrgb&w=600",
    scholars: 5,
    equipment: ["كاميرا احترافية", "ميكروفون", "إضاءة", "حامل"],
  },
  {
    id: 4,
    name: "مبادرة فاس",
    city: "فاس",
    description: "مشروع قادم لدعم الدعاة في العاصمة العلمية فاس",
    status: "قريباً",
    image:
      "https://images.pexels.com/photos/2233418/pexels-photo-2233418.jpeg?auto=compress&cs=tinysrgb&w=600",
    scholars: 0,
    equipment: [],
  },
];

// المشايخ المدعومون
export const scholars = [
  {
    id: 1,
    name: "الشيخ محمد الأمين",
    city: "مكناس",
    specialty: "العقيدة والفقه",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
    youtube: "https://youtube.com/@scholar1",
    lessonsCount: 120,
  },
  {
    id: 2,
    name: "الشيخ عبد الرحمن السعيد",
    city: "الخميسات",
    specialty: "التفسير والحديث",
    image:
      "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=400",
    youtube: "https://youtube.com/@scholar2",
    lessonsCount: 85,
  },
  {
    id: 3,
    name: "الشيخ يوسف البركاني",
    city: "الصخيرات",
    specialty: "الفقه المالكي",
    image:
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
    youtube: "https://youtube.com/@scholar3",
    lessonsCount: 60,
  },
  {
    id: 4,
    name: "الشيخ أحمد الفاسي",
    city: "فاس",
    specialty: "علوم القرآن",
    image:
      "https://images.pexels.com/photos/6647036/pexels-photo-6647036.jpeg?auto=compress&cs=tinysrgb&w=400",
    youtube: "https://youtube.com/@scholar4",
    lessonsCount: 95,
  },
  {
    id: 5,
    name: "الشيخ إبراهيم المكناسي",
    city: "مكناس",
    specialty: "السيرة النبوية",
    image:
      "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400",
    youtube: "https://youtube.com/@scholar5",
    lessonsCount: 70,
  },
];

// الأخبار
export const news = [
  {
    id: 1,
    title: "إطلاق مبادرة جديدة في مدينة فاس",
    date: "2026-01-05",
    summary:
      "تستعد جمعية الرحمة لإطلاق مبادرة جديدة لدعم الدعاة في مدينة فاس العريقة",
    image:
      "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
  {
    id: 2,
    title: "اكتمال تجهيز 5 مشايخ في مكناس",
    date: "2025-12-20",
    summary:
      "بفضل الله ثم بفضل تبرعاتكم، تم تجهيز 5 مشايخ في مدينة مكناس بالكامل",
    image:
      "https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
  {
    id: 3,
    title: "تقرير الشفافية السنوي 2025",
    date: "2025-12-15",
    summary: "نشر التقرير السنوي للشفافية والمحاسبة لعام 2025",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
];

// الدروس (مكتبة الدروس)
export const lessons = [
  {
    id: 1,
    title: "شرح كتاب التوحيد - الدرس الأول",
    scholar: "الشيخ محمد الأمين",
    category: "العقيدة",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "45:30",
    date: "2025-12-01",
  },
  {
    id: 2,
    title: "تفسير سورة الفاتحة",
    scholar: "الشيخ عبد الرحمن السعيد",
    category: "التفسير",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "60:00",
    date: "2025-11-25",
  },
  {
    id: 3,
    title: "أحكام الصلاة في المذهب المالكي",
    scholar: "الشيخ يوسف البركاني",
    category: "الفقه",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "55:20",
    date: "2025-11-20",
  },
  {
    id: 4,
    title: "السيرة النبوية - المرحلة المكية",
    scholar: "الشيخ إبراهيم المكناسي",
    category: "السيرة",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "70:00",
    date: "2025-11-15",
  },
];

// الشهادات والتزكيات
export const testimonials = [
  {
    id: 1,
    name: "الشيخ محمد الأمين",
    role: "داعية مدعوم",
    text: "بفضل الله ثم بفضل جمعية الرحمة، أصبح بإمكاني نشر دروسي لآلاف المسلمين عبر الإنترنت. جزاهم الله خيراً على هذا العمل المبارك.",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "أحمد المتبرع",
    role: "متبرع منتظم",
    text: "أشعر بالفخر لمساهمتي في هذا المشروع العظيم. الشفافية والأمانة التي تتمتع بها الجمعية تجعلني أثق في وصول تبرعاتي.",
    image:
      "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "فاطمة الزهراء",
    role: "مستفيدة",
    text: "استفدت كثيراً من الدروس المنشورة. أصبح العلم الشرعي متاحاً للجميع بفضل هذه الجهود المباركة.",
    image:
      "https://images.pexels.com/photos/6647010/pexels-photo-6647010.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

// الأسئلة الشائعة
export const faqItems = [
  {
    id: 1,
    question: "ما هي جمعية الرحمة؟",
    answer:
      "جمعية الرحمة هي جمعية خيرية مغربية تهدف إلى نشر العلم الشرعي الصحيح عبر دعم الدعاة والأساتذة الثقات وتوفير وسائل التصوير والبث.",
  },
  {
    id: 2,
    question: "كيف يمكنني التبرع للجمعية؟",
    answer:
      "يمكنك التبرع عبر التحويل البنكي باستخدام معلومات الحساب الموجودة في صفحة 'ساهم معنا'.",
  },
  {
    id: 3,
    question: "هل تبرعاتي تصل كاملة للمستفيدين؟",
    answer:
      "نعم، نحرص على الشفافية الكاملة. جميع التبرعات توجه مباشرة لدعم المشايخ وتوفير الأدوات. يمكنك الاطلاع على تقاريرنا المالية في صفحة الشفافية.",
  },
  {
    id: 4,
    question: "كيف يمكن للشيخ أن يطلب الدعم؟",
    answer:
      "يمكن للمشايخ والدعاة تقديم طلب دعم عبر النموذج الموجود في صفحة 'تواصل معنا'. سنتواصل معهم لدراسة الطلب.",
  },
  {
    id: 5,
    question: "ما هي المدن التي تغطيها الجمعية؟",
    answer:
      "حالياً نغطي: مكناس، الخميسات، الصخيرات، وقريباً فاس. هدفنا تغطية جميع مدن المغرب.",
  },
  {
    id: 6,
    question: "هل يمكنني التطوع مع الجمعية؟",
    answer:
      "نعم! نرحب بالمتطوعين. تواصل معنا عبر صفحة 'تواصل معنا' وأخبرنا بمهاراتك وكيف يمكنك المساعدة.",
  },
];

// حملة فلسطين
export const palestineCampaign = {
  title: "حملة نصرة فلسطين وغزة",
  subtitle: "لن ننساكم يا غزة",
  description:
    "حملة إنسانية لدعم إخواننا في فلسطين وغزة المحاصرة. ساهم معنا في تخفيف معاناتهم.",
  goalAmount: 500000,
  currentAmount: 320000,
  image:
    "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
  updates: [
    "تم إرسال الدفعة الأولى من المساعدات",
    "التنسيق مع الجمعيات الشريكة في غزة",
    "استمرار جمع التبرعات",
  ],
};

// التقارير المالية
export const financialReports = [
  {
    id: 1,
    year: 2025,
    quarter: "الربع الرابع",
    totalDonations: 450000,
    totalExpenses: 420000,
    beneficiaries: 12,
    downloadUrl: "#",
  },
  {
    id: 2,
    year: 2025,
    quarter: "الربع الثالث",
    totalDonations: 380000,
    totalExpenses: 350000,
    beneficiaries: 10,
    downloadUrl: "#",
  },
  {
    id: 3,
    year: 2025,
    quarter: "الربع الثاني",
    totalDonations: 320000,
    totalExpenses: 300000,
    beneficiaries: 8,
    downloadUrl: "#",
  },
];

// المدن المدعومة (للخريطة)
export const supportedCities = [
  {
    id: 1,
    name: "مكناس",
    lat: 33.8935,
    lng: -5.5473,
    scholars: 5,
    status: "active",
  },
  {
    id: 2,
    name: "الخميسات",
    lat: 33.8167,
    lng: -6.0667,
    scholars: 3,
    status: "active",
  },
  {
    id: 3,
    name: "الصخيرات",
    lat: 33.85,
    lng: -7.1167,
    scholars: 2,
    status: "active",
  },
  {
    id: 4,
    name: "فاس",
    lat: 34.0331,
    lng: -5.0003,
    scholars: 0,
    status: "upcoming",
  },
  {
    id: 5,
    name: "الرباط",
    lat: 34.0209,
    lng: -6.8416,
    scholars: 0,
    status: "upcoming",
  },
  {
    id: 6,
    name: "الدار البيضاء",
    lat: 33.5731,
    lng: -7.5898,
    scholars: 0,
    status: "planned",
  },
  {
    id: 7,
    name: "مراكش",
    lat: 31.6295,
    lng: -7.9811,
    scholars: 0,
    status: "planned",
  },
  {
    id: 8,
    name: "طنجة",
    lat: 35.7595,
    lng: -5.834,
    scholars: 0,
    status: "planned",
  },
];

// روابط التنقل
export const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "مبادراتنا", path: "/initiatives" },
  { name: "المشايخ", path: "/scholars" },
  { name: "ساهم معنا", path: "/donate" },
  { name: "حملة فلسطين", path: "/palestine" },
  { name: "الشفافية", path: "/transparency" },
  { name: "الأخبار", path: "/news" },
  { name: "مكتبة الدروس", path: "/lessons" },
  { name: "شهادات", path: "/testimonials" },
  { name: "أسئلة شائعة", path: "/faq" },
  { name: "تواصل معنا", path: "/contact" },
];
