import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Heart,
  Shield,
  Users,
  BookOpen,
  CreditCard,
  FileText,
  ArrowLeft,
  Lightbulb,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { faqItems } from "../data/siteData";

const FaqPage = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "الكل", icon: HelpCircle },
    { id: "donation", label: "التبرع", icon: Heart },
    { id: "scholars", label: "المشايخ", icon: BookOpen },
    { id: "transparency", label: "الشفافية", icon: Shield },
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch =
      faq.question.includes(searchQuery) || faq.answer.includes(searchQuery);
    // For demo, all items match all categories
    return matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <HelpCircle className="w-4 h-4" />
            نجيب عن تساؤلاتكم
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8 animate-fadeInUp delay-200">
            إجابات واضحة وشفافة عن كل ما يخص الجمعية وخدماتها
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto animate-fadeInUp delay-300">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن سؤالك..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "سؤال متاح",
                value: faqItems.length,
                icon: HelpCircle,
                color: "emerald",
              },
              { label: "فئة", value: "4", icon: FileText, color: "blue" },
              {
                label: "إجابة فورية",
                value: "100%",
                icon: Lightbulb,
                color: "amber",
              },
              { label: "دعم مباشر", value: "24/7", icon: Phone, color: "red" },
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

      {/* Categories */}
      <section className="py-8 bg-gray-50 sticky top-0 z-20 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                    : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-right hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        openId === faq.id
                          ? "bg-emerald-500 text-white"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      <span className="font-bold text-sm">{faq.id}</span>
                    </div>
                    <span
                      className={`font-bold text-lg transition-colors ${
                        openId === faq.id ? "text-emerald-700" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openId === faq.id
                        ? "bg-emerald-500 rotate-180"
                        : "bg-gray-100"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        openId === faq.id ? "text-white" : "text-gray-500"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pr-20">
                    <div className="bg-emerald-50 rounded-xl p-6 border-r-4 border-emerald-500">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                لم نجد نتائج
              </h3>
              <p className="text-gray-600">جرب البحث بكلمات أخرى</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 text-center animate-fadeInUp">
            <div className="w-20 h-20 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              تواصل معنا مباشرة وسنرد عليك في أقرب وقت ممكن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا
              </Link>
              <a
                href="tel:+212600000000"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900">
              روابط سريعة قد تفيدك
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                title: "كيفية التبرع",
                desc: "تعرف على طرق التبرع المتاحة",
                icon: CreditCard,
                link: "/donate",
                color: "emerald",
              },
              {
                title: "المشايخ المدعومون",
                desc: "تعرف على العلماء المستفيدين",
                icon: Users,
                link: "/scholars",
                color: "blue",
              },
              {
                title: "الشفافية المالية",
                desc: "اطلع على تقاريرنا المالية",
                icon: Shield,
                link: "/transparency",
                color: "amber",
              },
              {
                title: "من نحن",
                desc: "تعرف على الجمعية ورسالتها",
                icon: BookOpen,
                link: "/about",
                color: "purple",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift text-center"
              >
                <div
                  className={`w-14 h-14 bg-${item.color}-100 group-hover:bg-${item.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors`}
                >
                  <item.icon
                    className={`w-7 h-7 text-${item.color}-600 group-hover:text-white transition-colors`}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            ساهم معنا في دعم العلماء
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            تبرعك يصنع فرقاً في حياة العلماء ومجتمعاتهم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              تبرع الآن
            </Link>
            <Link
              to="/initiatives"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              تعرف على مبادراتنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
