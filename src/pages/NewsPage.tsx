import {
  Calendar,
  ArrowLeft,
  Newspaper,
  Clock,
  Eye,
  Tag,
  TrendingUp,
  Sparkles,
  Heart,
  Bell,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { news } from "../data/siteData";

const NewsPage = () => {
  // Featured news (first item)
  const featuredNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Newspaper className="w-4 h-4" />
            آخر المستجدات
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            أخبار الجمعية
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            تابع آخر أنشطتنا وإنجازاتنا في دعم العلماء والدعاة
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden -mt-20 relative z-20 animate-fadeInUp">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-l"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      خبر مميز
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredNews.date).toLocaleDateString("ar-MA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />5 دقائق للقراءة
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredNews.summary}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                      اقرأ المزيد
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Tag className="w-5 h-5 text-gray-400" />
            {["الكل", "مبادرات", "إنجازات", "فعاليات", "تحديثات"].map(
              (category, index) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">جميع الأخبار</h2>
              <p className="text-gray-500 mt-1">{news.length} خبر متاح</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">ترتيب حسب الأحدث</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString("ar-MA", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      مبادرات
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition group-hover:gap-3">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="flex items-center gap-1 text-xs">
                        <Eye className="w-4 h-4" />
                        120
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-8 py-4 rounded-xl transition-all duration-300">
              عرض المزيد من الأخبار
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bell className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ابق على اطلاع
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            اشترك في نشرتنا البريدية لتصلك آخر الأخبار والتحديثات
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              dir="ltr"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
              اشترك الآن
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            كن جزءاً من أخبارنا القادمة
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            ساهم معنا واصنع الأثر الذي نكتب عنه
          </p>
          <Link
            to="/donate"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
          >
            <Heart className="w-5 h-5" />
            ساهم الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
