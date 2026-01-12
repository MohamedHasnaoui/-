import { useState } from "react";
import {
  Clock,
  User,
  Filter,
  BookOpen,
  PlayCircle,
  Users,
  Youtube,
  GraduationCap,
  Heart,
  Sparkles,
  Search,
  ChevronLeft,
  Eye,
  ThumbsUp,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { lessons, stats } from "../data/siteData";

const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["الكل", ...new Set(lessons.map((l) => l.category))];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesCategory =
      selectedCategory === "الكل" || lesson.category === selectedCategory;
    const matchesSearch =
      lesson.title.includes(searchQuery) ||
      lesson.scholar.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Youtube className="w-4 h-4" />
            دروس مرئية
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            مكتبة الدروس
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8 animate-fadeInUp delay-200">
            دروس علمية نافعة من المشايخ المدعومين، تم تصويرها بفضل تبرعاتكم
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
            {[
              {
                icon: PlayCircle,
                value: `${stats.lessonsRecorded}+`,
                label: "درس",
              },
              { icon: Users, value: stats.supportedScholars, label: "شيخ" },
              { icon: Eye, value: "50K+", label: "مشاهدة" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                <span className="text-white font-bold text-lg">
                  {stat.value}
                </span>
                <span className="text-emerald-200 mr-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-white border-b shadow-sm sticky top-0 z-30 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن درس أو شيخ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Filter className="w-5 h-5 text-gray-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-bold text-emerald-600">
                {filteredLessons.length}
              </span>{" "}
              درس متاح
              {selectedCategory !== "الكل" && (
                <span className="mr-2">في تصنيف "{selectedCategory}"</span>
              )}
            </p>
            <Link
              to="/scholars"
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1"
            >
              تعرف على المشايخ
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLessons.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredLessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gray-900 relative overflow-hidden">
                    <iframe
                      src={lesson.youtubeUrl}
                      title={lesson.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-mono">
                      {lesson.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                        <BookOpen className="w-3 h-3" />
                        {lesson.category}
                      </span>
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          2.5K
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          320
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {lesson.title}
                    </h3>

                    {/* Scholar Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {lesson.scholar}
                          </p>
                          <p className="text-gray-500 text-xs">
                            من المشايخ المدعومين
                          </p>
                        </div>
                      </div>

                      <a
                        href={lesson.youtubeUrl.replace("embed/", "watch?v=")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        <Youtube className="w-4 h-4" />
                        <span className="hidden sm:inline">يوتيوب</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-gray-600 mb-4">
                جرب البحث بكلمات مختلفة أو اختر تصنيفاً آخر
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("الكل");
                  setSearchQuery("");
                }}
                className="text-emerald-600 font-medium hover:underline"
              >
                عرض جميع الدروس
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Watch on YouTube CTA */}
      <section className="py-16 bg-gradient-to-l from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Youtube className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تابعنا على يوتيوب
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            اشترك في قناتنا لتصلك الدروس الجديدة فور نشرها
          </p>
          <a
            href="https://youtube.com/@alrahma"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-red-600 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-3 hover-lift"
          >
            <Youtube className="w-6 h-6" />
            اشترك في القناة
          </a>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            ساهم في إنتاج المزيد من الدروس
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            بتبرعك نستطيع تجهيز مشايخ أكثر لتسجيل دروس أكثر
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

export default LessonsPage;
