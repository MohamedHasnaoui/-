import {
  Heart,
  CheckCircle,
  Users,
  Package,
  Truck,
  HandHeart,
  Shield,
  ArrowLeft,
  Sparkles,
  Globe,
  Calendar,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { palestineCampaign } from "../data/siteData";

const PalestinePage = () => {
  const progressPercentage =
    (palestineCampaign.currentAmount / palestineCampaign.goalAmount) * 100;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={palestineCampaign.image}
            alt="فلسطين"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 animate-fadeInDown">
            <span className="text-2xl">🇵🇸</span>
            <span className="font-semibold">حملة نصرة فلسطين</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
            {palestineCampaign.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            {palestineCampaign.subtitle}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-green-400 font-bold text-lg">
                {progressPercentage.toFixed(0)}%
              </span>
              <span className="text-gray-300 mr-2">مكتمل</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-bold text-lg">
                {palestineCampaign.currentAmount.toLocaleString("ar-MA")}
              </span>
              <span className="text-gray-300 mr-2">درهم</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Campaign Card */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden -mt-24 relative z-20 animate-fadeInUp">
            {/* Card Header */}
            <div className="bg-gradient-to-l from-green-600 to-green-700 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <HandHeart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      حملة الإغاثة العاجلة
                    </h2>
                    <p className="text-green-100">معاً لنصرة إخواننا في غزة</p>
                  </div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-white font-bold">🇵🇸 فلسطين</span>
                </div>
              </div>
            </div>

            {/* Campaign Content */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {palestineCampaign.description}
                </p>
              </div>

              {/* Progress Section */}
              <div className="bg-gradient-to-l from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">الهدف</p>
                      <p className="text-xl font-bold text-gray-900">
                        {palestineCampaign.goalAmount.toLocaleString("ar-MA")}{" "}
                        درهم
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">تم جمع</p>
                      <p className="text-xl font-bold text-green-600">
                        {palestineCampaign.currentAmount.toLocaleString(
                          "ar-MA"
                        )}{" "}
                        درهم
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-l from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000 relative"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-green-600 shadow-sm">
                      {progressPercentage.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    آخر المستجدات
                  </h3>
                </div>
                <div className="space-y-3">
                  {palestineCampaign.updates.map((update, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100 hover:bg-green-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-green-800 font-medium">{update}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-3 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-5 rounded-full text-xl shadow-xl shadow-green-500/30 transition-all duration-300 transform hover:scale-105 hover-lift"
                >
                  <Heart className="w-6 h-6" />
                  ساهم في الحملة الآن
                </Link>
                <p className="text-gray-500 mt-4 text-sm">
                  كل درهم يصنع فرقاً في حياة أخ أو أخت في غزة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              مجالات الدعم
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كيف نساعد إخواننا؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نعمل على توفير الدعم الإنساني العاجل في عدة مجالات حيوية
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                icon: Package,
                title: "مواد غذائية",
                desc: "توفير سلات غذائية للعائلات المحتاجة",
                color: "green",
              },
              {
                icon: Heart,
                title: "دعم طبي",
                desc: "توفير الأدوية والمستلزمات الطبية",
                color: "red",
              },
              {
                icon: Users,
                title: "رعاية الأيتام",
                desc: "كفالة الأطفال الذين فقدوا ذويهم",
                color: "blue",
              },
              {
                icon: Shield,
                title: "مأوى آمن",
                desc: "توفير المأوى للعائلات النازحة",
                color: "amber",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div
                  className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden animate-fadeInUp">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield className="w-4 h-4" />
                    شفافية كاملة
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    أموالكم أمانة
                  </h2>
                  <p className="text-green-100 text-lg mb-6 leading-relaxed">
                    نحرص على الشفافية التامة في التعامل مع تبرعاتكم. كل درهم
                    يُوثق ويُصرف في مكانه الصحيح مع تقارير دورية.
                  </p>
                  <Link
                    to="/transparency"
                    className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-6 py-3 rounded-full transition-all duration-300 hover:bg-green-50 hover-lift"
                  >
                    اطلع على التقارير
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100%", label: "شفافية" },
                    { value: "0%", label: "مصاريف إدارية" },
                    { value: "24/7", label: "متابعة مستمرة" },
                    { value: "تقارير", label: "شهرية" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
                    >
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-green-200 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dua Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            اللهم انصر إخواننا في فلسطين
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            اللهم فرج همهم، ونفس كربهم، وارحم شهداءهم، واشف جرحاهم، واحفظ
            أطفالهم ونساءهم، واجعل لهم من كل ضيق مخرجاً، ومن كل هم فرجاً
          </p>
          <p className="text-green-600 font-bold text-xl">آمين 🤲</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-l from-green-500 to-green-600 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            لا تبخل على إخوانك بالدعم
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            كل مساهمة مهما كانت صغيرة تصنع فرقاً كبيراً
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white hover:bg-gray-50 text-green-700 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              تبرع الآن
            </Link>
            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-800 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 border border-green-400 hover-lift"
            >
              <Sparkles className="w-5 h-5" />
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalestinePage;
