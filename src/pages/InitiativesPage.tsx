import { useState } from "react";
import {
  MapPin,
  Users,
  CheckCircle,
  Camera,
  Mic,
  Lightbulb,
  HardDrive,
  Sparkles,
  Filter,
  Clock,
  Award,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { initiatives, supportedCities } from "../data/siteData";

const InitiativesPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("الكل");

  const filters = ["الكل", "مكتملة", "جارية", "قريباً"];

  const filteredInitiatives =
    activeFilter === "الكل"
      ? initiatives
      : initiatives.filter((i) => i.status === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Sparkles className="w-4 h-4" />
            مشاريعنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            مبادراتنا
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            مبادرات دعم الدعاة في مختلف المدن المغربية لنشر العلم الشرعي الصحيح
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "مبادرات مكتملة",
                value: initiatives.filter((i) => i.status === "مكتملة").length,
                icon: CheckCircle,
                color: "emerald",
              },
              {
                label: "مبادرات جارية",
                value: initiatives.filter((i) => i.status === "جارية").length,
                icon: Clock,
                color: "blue",
              },
              {
                label: "مبادرات قادمة",
                value: initiatives.filter((i) => i.status === "قريباً").length,
                icon: Sparkles,
                color: "amber",
              },
              {
                label: "إجمالي المشايخ",
                value: initiatives.reduce((acc, i) => acc + i.scholars, 0),
                icon: Users,
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

      {/* Filter & Initiatives */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fadeInUp">
            <Filter className="w-5 h-5 text-gray-500" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInitiatives.map((initiative, index) => {
              const progressPercentage =
                (initiative.collectedAmount / initiative.goalAmount) * 100;

              return (
                <div
                  key={initiative.id}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                          initiative.status === "مكتملة"
                            ? "bg-green-500 text-white"
                            : initiative.status === "جارية"
                            ? "bg-blue-500 text-white"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {initiative.status === "مكتملة" && (
                          <CheckCircle className="w-3.5 h-3.5" />
                        )}
                        {initiative.status === "جارية" && (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                        {initiative.status === "قريباً" && (
                          <Sparkles className="w-3.5 h-3.5" />
                        )}
                        {initiative.status}
                      </span>
                    </div>

                    {/* Location & Title Overlay */}
                    <div className="absolute bottom-0 right-0 left-0 p-5">
                      <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{initiative.city}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {initiative.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-2">
                      {initiative.description}
                    </p>

                    {/* Donation Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">التقدم</span>
                        <span
                          className={`text-sm font-bold ${
                            progressPercentage >= 100
                              ? "text-green-600"
                              : "text-emerald-600"
                          }`}
                        >
                          {progressPercentage.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 relative ${
                            progressPercentage >= 100
                              ? "bg-gradient-to-l from-green-500 to-green-600"
                              : "bg-gradient-to-l from-emerald-500 to-emerald-600"
                          }`}
                          style={{
                            width: `${Math.min(progressPercentage, 100)}%`,
                          }}
                        >
                          {progressPercentage < 100 && (
                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          <span className="font-semibold text-emerald-600">
                            {initiative.collectedAmount.toLocaleString("ar-MA")}
                          </span>{" "}
                          درهم
                        </span>
                        <span className="text-xs text-gray-500">
                          الهدف:{" "}
                          <span className="font-semibold">
                            {initiative.goalAmount.toLocaleString("ar-MA")}
                          </span>{" "}
                          درهم
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {initiative.scholars}
                          </p>
                          <p className="text-xs text-gray-500">مشايخ</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/initiatives/${initiative.id}`}
                          className="px-4 py-2 rounded-full text-sm font-bold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          التفاصيل
                        </Link>
                        <Link
                          to="/donate"
                          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                            progressPercentage >= 100
                              ? "bg-green-100 text-green-700"
                              : "bg-emerald-600 text-white hover:bg-emerald-700"
                          }`}
                        >
                          {progressPercentage >= 100 ? "مكتمل" : "ساهم"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredInitiatives.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                لا توجد مبادرات في هذا التصنيف
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Morocco Map Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              التغطية الجغرافية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              المدن المدعومة
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              نسعى لتغطية جميع مدن المغرب، وهذه المدن التي نعمل فيها حالياً
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeInUp delay-200">
            {supportedCities.map((city) => (
              <div
                key={city.id}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  city.status === "active"
                    ? "bg-white/10 border-emerald-400/30 hover:bg-white/20"
                    : city.status === "upcoming"
                    ? "bg-amber-400/10 border-amber-400/30 hover:bg-amber-400/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      city.status === "active"
                        ? "bg-emerald-400 animate-pulse"
                        : city.status === "upcoming"
                        ? "bg-amber-400"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <h3 className="text-lg font-bold text-white">{city.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-200 text-sm">
                    {city.status === "active"
                      ? "نشطة"
                      : city.status === "upcoming"
                      ? "قريباً"
                      : "مخططة"}
                  </span>
                  {city.scholars > 0 && (
                    <span className="text-amber-400 text-sm font-medium">
                      {city.scholars} مشايخ
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              التجهيزات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الأدوات التي نوفرها
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نوفر للمشايخ جميع الأدوات اللازمة لتسجيل ونشر دروسهم بجودة عالية
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                name: "كاميرا احترافية",
                desc: "لتصوير الدروس بجودة عالية",
                icon: Camera,
              },
              { name: "ميكروفون", desc: "لتسجيل صوت واضح ونقي", icon: Mic },
              {
                name: "إضاءة",
                desc: "لإضاءة مثالية أثناء التصوير",
                icon: Lightbulb,
              },
              {
                name: "ذاكرة تخزين",
                desc: "لحفظ الدروس والمحاضرات",
                icon: HardDrive,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            ساهم في توسيع مبادراتنا
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            بدعمك نستطيع الوصول لمدن أكثر ودعم مشايخ أكثر
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Award className="w-5 h-5" />
              ساهم الآن
            </Link>
            <Link
              to="/scholars"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              المشايخ المدعومون
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;
