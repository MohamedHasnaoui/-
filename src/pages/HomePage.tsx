import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  BookOpen,
  MapPin,
  ArrowLeft,
  AlertTriangle,
  GraduationCap,
  Camera,
  Play,
  CheckCircle,
  Sparkles,
  Target,
  HandHeart,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { stats, initiatives } from "../data/siteData";

const HomePage = () => {
  // Get ongoing initiatives for the carousel
  const ongoingInitiatives = initiatives
    .filter((i) => i.status === "جارية" || i.status === "قريباً")
    .slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ongoingInitiatives.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ongoingInitiatives.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ongoingInitiatives.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + ongoingInitiatives.length) % ongoingInitiatives.length
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/50 to-emerald-900/30"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30 animate-fadeInDown">
            <Sparkles className="w-4 h-4" />
            <span>تجهيز الدعاة | صدقة جارية في نشر العلم</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fadeInUp">
            في زمن الفتن، كن سبباً
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-yellow-500">
              في نشر العلم الصحيح
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/90 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
            ساهم في تجهيز الدعاة والعلماء بالأدوات اللازمة لتسجيل ونشر دروسهم
            النافعة
            <span className="text-amber-400 font-medium">
              {" "}
              لتصل للأمة جمعاء
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp delay-300">
            <Link
              to="/donate"
              className="group bg-gradient-to-l from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-emerald-900 font-bold px-10 py-4 rounded-full text-lg shadow-2xl shadow-amber-500/25 transform transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40 inline-flex items-center justify-center gap-3"
            >
              <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              ساهم الآن
            </Link>
            <Link
              to="/about"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full text-lg border border-white/30 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              تعرف علينا
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Stats in Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fadeInUp delay-400">
            {[
              {
                value: stats.supportedScholars,
                label: "شيخ مدعوم",
                icon: Users,
              },
              { value: stats.citiesCovered, label: "مدينة", icon: MapPin },
              { value: `${stats.lessonsRecorded}+`, label: "درس", icon: Play },
              {
                value: `${(stats.beneficiaries / 1000).toFixed(0)}K`,
                label: "مستفيد",
                icon: Heart,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-emerald-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section - Why We Exist */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              المشكلة التي نعالجها
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              فجوة يجب أن <span className="text-emerald-600">نملأها</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              في عالم يعج بالمعلومات المغلوطة، يحتاج العلماء الثقات لأدوات
              تساعدهم على إيصال العلم الصحيح
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover-lift animate-fadeInUp">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  انتشار الجهل والشبهات
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  في عصر السرعة، تنتشر المعلومات الخاطئة والشبهات بسرعة البرق
                  عبر وسائل التواصل
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover-lift animate-fadeInUp delay-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  علماء ودعاة متقنون
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  فرَّغوا أنفسهم للعلم ولديهم ما ينفع الأمة من علم شرعي صحيح
                  أصيل
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover-lift animate-fadeInUp delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ينقصهم الدعم التقني
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  لا يملكون الأدوات التقنية اللازمة لتسجيل وإيصال علمهم للأمة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              منهجيتنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              كيف نعمل؟
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              نتبع منهجية واضحة لضمان وصول دعمكم للمستحقين
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                step: "01",
                title: "نستقبل الطلبات",
                desc: "نتلقى طلبات الدعم من المشايخ والدعاة",
                icon: Target,
              },
              {
                step: "02",
                title: "ندرس ونتحقق",
                desc: "نتأكد من أهلية الشيخ وحاجته للدعم",
                icon: CheckCircle,
              },
              {
                step: "03",
                title: "نجهز ونسلم",
                desc: "نوفر الأدوات اللازمة ونسلمها للشيخ",
                icon: Camera,
              },
              {
                step: "04",
                title: "نتابع وننشر",
                desc: "نتابع الدروس المنشورة ونوثق الأثر",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-amber-400 group-hover:text-emerald-900 transition-colors" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 text-emerald-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-emerald-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section - Initiatives Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              المبادرات الحالية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ساهم في إتمام مبادراتنا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر المبادرة التي تريد المساهمة فيها وكن جزءاً من نشر العلم
              الشرعي
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative animate-fadeInUp delay-200">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="المبادرة السابقة"
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all hover:scale-110 border border-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="المبادرة التالية"
              className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all hover:scale-110 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slides */}
            <div className="overflow-hidden rounded-[2.5rem]">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
              >
                {ongoingInitiatives.map((initiative) => {
                  const progressPercentage =
                    (initiative.collectedAmount / initiative.goalAmount) * 100;

                  return (
                    <div key={initiative.id} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-8 md:p-12 shadow-2xl border border-emerald-100 relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-100/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                          {/* Image */}
                          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                            <img
                              src={initiative.image}
                              alt={initiative.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 right-4">
                              <span
                                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                                  initiative.status === "جارية"
                                    ? "bg-blue-500 text-white"
                                    : "bg-amber-500 text-white"
                                }`}
                              >
                                {initiative.status}
                              </span>
                            </div>
                            <div className="absolute bottom-4 right-4 left-4">
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>{initiative.city}</span>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                              {initiative.name}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {initiative.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="mb-6">
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-gray-600 font-medium">
                                  التقدم
                                </span>
                                <span className="text-2xl font-bold text-emerald-700">
                                  {progressPercentage.toFixed(0)}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                                <div
                                  className="bg-gradient-to-l from-emerald-500 to-emerald-600 h-full rounded-full transition-all duration-1000 relative"
                                  style={{ width: `${progressPercentage}%` }}
                                >
                                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-3 text-sm">
                                <span className="text-gray-500">
                                  تم جمع:{" "}
                                  <span className="font-bold text-emerald-600">
                                    {initiative.collectedAmount.toLocaleString(
                                      "ar-MA"
                                    )}{" "}
                                    درهم
                                  </span>
                                </span>
                                <span className="text-gray-500">
                                  الهدف:{" "}
                                  <span className="font-bold text-gray-700">
                                    {initiative.goalAmount.toLocaleString(
                                      "ar-MA"
                                    )}{" "}
                                    درهم
                                  </span>
                                </span>
                              </div>
                            </div>

                            {/* Scholars Count */}
                            <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-gray-100">
                              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-emerald-600" />
                              </div>
                              <div>
                                <p className="text-xl font-bold text-gray-900">
                                  {initiative.scholars}
                                </p>
                                <p className="text-sm text-gray-500">
                                  مشايخ سيستفيدون
                                </p>
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3">
                              <Link
                                to={`/initiatives/${initiative.id}`}
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-emerald-700 font-bold px-6 py-4 rounded-full text-lg border-2 border-emerald-600 transition-all duration-300 hover:scale-105"
                              >
                                التفاصيل
                              </Link>
                              <Link
                                to="/donate"
                                className="flex-1 inline-flex items-center gap-3 bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 justify-center"
                              >
                                <HandHeart className="w-6 h-6" />
                                ساهم في المبادرة
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {ongoingInitiatives.map((initiative, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`الانتقال إلى ${initiative.name}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-10 h-3 bg-emerald-600"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium group"
            >
              عرض جميع المبادرات
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319413/pexels-photo-1319413.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 animate-fadeInUp">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-500/30">
              <BookOpen className="w-10 h-10 text-emerald-900" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              درهمٌ اليوم، <span className="text-amber-400">أجرٌ كل يوم</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fadeInUp delay-200">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-emerald-50">
              كل شخص يشاهد درساً تم تصويره بفضل دعمك،
              <br />
              <span className="text-amber-400 font-bold text-2xl md:text-3xl">
                يُكتب لك أجر علمه إن شاء الله
              </span>
            </p>

            <div className="bg-emerald-800/50 rounded-2xl p-6 md:p-8 border border-emerald-700/50">
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed font-medium">
                عن أبي هريرة رضي الله عنه أن رسول الله ﷺ قال:
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed mt-4 font-bold">
                "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم
                ينتفع به، أو ولد صالح يدعو له"
              </p>
              <p className="text-amber-400 mt-6 font-semibold">رواه مسلم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-l from-amber-400 via-yellow-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            كن شريكاً في نشر العلم الصحيح
          </h2>
          <p className="text-emerald-800 mb-10 text-xl">
            تبرعك اليوم يصنع فرقاً في حياة الآلاف
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="group bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-3 hover-lift"
            >
              <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              تبرع الآن
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-3 hover-lift"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
