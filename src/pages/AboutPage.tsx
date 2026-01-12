import {
  Eye,
  Target,
  Heart,
  CheckCircle,
  Users,
  MapPin,
  BookOpen,
  Camera,
  Handshake,
  Shield,
  Sparkles,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { associationInfo, stats } from "../data/siteData";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Sparkles className="w-4 h-4" />
            تعرف علينا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            من نحن
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            جمعية خيرية مغربية تسعى لنشر العلم الشرعي الصحيح في جميع أنحاء
            المملكة
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fadeInRight">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                قصتنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تعريف بـ<span className="text-emerald-600">جمعية الرحمة</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {associationInfo.fullName} هي جمعية خيرية مغربية تأسست عام{" "}
                {associationInfo.foundedYear}، تهدف إلى نشر العلم الشرعي الصحيح
                في جميع أنحاء المغرب.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                نعمل على دعم الدعاة والأساتذة الثقات بتوفير أدوات التصوير والبث
                اللازمة لتسجيل ونشر دروسهم النافعة لتصل للأمة جمعاء.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-2xl p-4 text-center">
                  <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-emerald-800">
                    {stats.supportedScholars}+
                  </p>
                  <p className="text-gray-600 text-sm">شيخ مدعوم</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-amber-800">
                    {stats.citiesCovered}
                  </p>
                  <p className="text-gray-600 text-sm">مدن مغطاة</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fadeInLeft delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-amber-200 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="جمعية الرحمة"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      +{new Date().getFullYear() - associationInfo.foundedYear}
                    </p>
                    <p className="text-gray-600 text-sm">سنوات من العطاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              هويتنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              رؤيتنا ورسالتنا وقيمنا
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center relative overflow-hidden animate-fadeInUp delay-100 hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-emerald-400 to-emerald-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الرؤية</h3>
              <p className="text-gray-600 leading-relaxed">
                {associationInfo.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center relative overflow-hidden animate-fadeInUp delay-200 hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-blue-400 to-blue-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الرسالة</h3>
              <p className="text-gray-600 leading-relaxed">
                {associationInfo.mission}
              </p>
            </div>

            {/* Values */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center relative overflow-hidden animate-fadeInUp delay-300 hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-amber-400 to-amber-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">القيم</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {associationInfo.values.map((value, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              أنشطتنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ماذا نفعل؟
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              نعمل على عدة محاور أساسية لتحقيق رسالتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "تجهيز الدعاة",
                desc: "نوفر أدوات التصوير والبث للدعاة والمشايخ في مختلف المدن المغربية",
                icon: Camera,
              },
              {
                title: "نشر العلم",
                desc: "ندعم تسجيل ونشر الدروس الشرعية عبر منصات التواصل المختلفة",
                icon: BookOpen,
              },
              {
                title: "الحملات الإنسانية",
                desc: "ننظم حملات لدعم إخواننا في فلسطين وغزة والمحتاجين",
                icon: Handshake,
              },
              {
                title: "التوسع والانتشار",
                desc: "نسعى لتغطية جميع مدن المغرب وتوسيع نطاق مبادراتنا",
                icon: Globe,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 animate-fadeInUp hover-lift"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-emerald-900" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-emerald-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              مبادئنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              القيم التي نلتزم بها
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نعمل وفق مجموعة من القيم الراسخة التي توجه كل أعمالنا
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "الأمانة",
                desc: "نحافظ على أموال المتبرعين ونوصلها لمستحقيها",
                icon: Shield,
                color: "emerald",
              },
              {
                title: "الشفافية",
                desc: "ننشر تقاريرنا المالية بشكل دوري ومنتظم",
                icon: Eye,
                color: "blue",
              },
              {
                title: "الإخلاص",
                desc: "نعمل ابتغاء مرضاة الله عز وجل",
                icon: Heart,
                color: "red",
              },
              {
                title: "الإتقان",
                desc: "نسعى للتميز والجودة في كل ما نقدمه",
                icon: Award,
                color: "amber",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div
                  className={`w-20 h-20 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-10 h-10 text-${item.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fadeInUp">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  إنجازاتنا بالأرقام
                </h2>
                <p className="text-emerald-100">
                  أرقام نفتخر بها بفضل الله ثم بفضل دعمكم
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    value: stats.supportedScholars,
                    label: "شيخ مدعوم",
                    icon: Users,
                  },
                  {
                    value: stats.citiesCovered,
                    label: "مدينة مغطاة",
                    icon: MapPin,
                  },
                  {
                    value: `${stats.lessonsRecorded}+`,
                    label: "درس منشور",
                    icon: BookOpen,
                  },
                  {
                    value: `${(stats.beneficiaries / 1000).toFixed(0)}K`,
                    label: "مستفيد",
                    icon: TrendingUp,
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <p className="text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-emerald-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            كن جزءاً من رحلتنا
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            ساهم معنا في نشر العلم الصحيح وكن شريكاً في الأجر
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              ساهم الآن
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
