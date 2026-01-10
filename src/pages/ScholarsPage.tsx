import { Link } from "react-router-dom";
import {
  MapPin,
  Youtube,
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  Heart,
  PlayCircle,
  Award,
  ArrowLeft,
  CheckCircle,
  Star,
} from "lucide-react";
import { scholars, stats } from "../data/siteData";

const ScholarsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <GraduationCap className="w-4 h-4" />
            حماة العلم
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            المشايخ المدعومون
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            نفتخر بدعم نخبة من العلماء والدعاة الذين يسعون لنشر العلم الشرعي
            الصحيح في ربوع المغرب
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "شيخ مدعوم",
                value: stats.supportedScholars,
                icon: Users,
                color: "emerald",
              },
              {
                label: "درس مسجل",
                value: `${stats.lessonsRecorded}+`,
                icon: PlayCircle,
                color: "blue",
              },
              {
                label: "مدينة مغطاة",
                value: stats.citiesCovered,
                icon: MapPin,
                color: "amber",
              },
              {
                label: "مستفيد",
                value: `${(stats.beneficiaries / 1000).toFixed(0)}K`,
                icon: Heart,
                color: "purple",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholars Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              تعرف عليهم
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              العلماء والدعاة
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              هؤلاء المشايخ فرَّغوا أنفسهم لنشر العلم الشرعي، وبفضل دعمكم أصبح
              بإمكانهم إيصال علمهم للآلاف
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholars.map((scholar, index) => (
              <div
                key={scholar.id}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Scholar Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={scholar.image}
                    alt={scholar.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      معتمد
                    </span>
                  </div>

                  {/* Scholar Info Overlay */}
                  <div className="absolute bottom-0 right-0 left-0 p-6">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{scholar.city}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {scholar.name}
                    </h3>
                    <p className="text-amber-400 font-medium">
                      {scholar.specialty}
                    </p>
                  </div>
                </div>

                {/* Scholar Details */}
                <div className="p-6">
                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {scholar.lessonsCount}
                        </p>
                        <p className="text-gray-500 text-xs">درس مسجل</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Equipment Provided */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">
                      التجهيزات المقدمة:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["كاميرا", "ميكروفون", "إضاءة"].map((item, i) => (
                        <span
                          key={i}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* YouTube Link */}
                  <a
                    href={scholar.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-l from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    <Youtube className="w-5 h-5" />
                    شاهد الدروس على يوتيوب
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Select Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              معايير الاختيار
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              كيف نختار المشايخ؟
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              نتبع معايير دقيقة لضمان وصول الدعم للمستحقين
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                step: "01",
                title: "العلم الشرعي",
                desc: "التأكد من سلامة المنهج العقدي والفقهي",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "الإجازة العلمية",
                desc: "حصوله على إجازات من علماء معتبرين",
                icon: Award,
              },
              {
                step: "03",
                title: "التفرغ للدعوة",
                desc: "أن يكون متفرغاً لنشر العلم والدعوة",
                icon: GraduationCap,
              },
              {
                step: "04",
                title: "الحاجة للدعم",
                desc: "عدم امتلاكه للأدوات اللازمة للتصوير",
                icon: Sparkles,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group hover-lift">
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

      {/* Become a Scholar CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl animate-fadeInUp">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-emerald-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل أنت شيخ أو داعية؟
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
                إذا كنت عالماً أو داعية وتحتاج لدعم تقني لنشر دروسك، تواصل معنا
                وسنكون سعداء بمساعدتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
                >
                  <Sparkles className="w-5 h-5" />
                  تقدم للدعم
                </Link>
                <Link
                  to="/initiatives"
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  تعرف على مبادراتنا
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            ساهم في دعم المزيد من المشايخ
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            بتبرعك نستطيع الوصول لمشايخ أكثر في مدن أكثر
          </p>
          <Link
            to="/donate"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
          >
            <Heart className="w-5 h-5" />
            تبرع الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ScholarsPage;
