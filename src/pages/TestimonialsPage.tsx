import {
  Quote,
  MessageCircle,
  Star,
  Heart,
  Users,
  GraduationCap,
  MapPin,
  Sparkles,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { testimonials, stats } from "../data/siteData";

const TestimonialsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <MessageCircle className="w-4 h-4" />
            قالوا عنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            شهادات وتزكيات
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            كلمات صادقة من المشايخ المدعومين والمستفيدين من خدماتنا
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
                icon: GraduationCap,
                color: "emerald",
              },
              {
                label: "شهادة موثقة",
                value: testimonials.length * 10,
                icon: MessageCircle,
                color: "blue",
              },
              { label: "تقييم", value: "5/5", icon: Star, color: "amber" },
              { label: "رضا تام", value: "100%", icon: Heart, color: "red" },
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

      {/* Featured Testimonial */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl animate-fadeInUp">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
            <Quote className="absolute top-8 left-8 w-20 h-20 text-white/10" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                    <img
                      src={
                        testimonials[0]?.image ||
                        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      }
                      alt={testimonials[0]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-right flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                    "
                    {testimonials[0]?.text ||
                      "تجربة رائعة مع الجمعية، دعم حقيقي ومتابعة مستمرة"}
                    "
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {testimonials[0]?.name || "شيخ محمد"}
                    </h3>
                    <p className="text-emerald-200">
                      {testimonials[0]?.role || "شيخ مدعوم"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              المزيد من الشهادات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ماذا قالوا عنا؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              شهادات حقيقية من المشايخ والمستفيدين الذين تعاملوا معنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group bg-white rounded-2xl shadow-lg p-8 relative border border-gray-100 hover:shadow-2xl transition-all duration-500 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                  <Quote className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-emerald-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-emerald-600">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900">
              شهادات من مختلف الفئات
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp delay-200">
            {[
              {
                title: "المشايخ المدعومون",
                desc: "شهادات من العلماء الذين حصلوا على الدعم",
                icon: GraduationCap,
                count: 15,
                color: "emerald",
              },
              {
                title: "المتبرعون",
                desc: "آراء المتبرعين حول شفافية الجمعية",
                icon: Heart,
                count: 50,
                color: "red",
              },
              {
                title: "طلبة العلم",
                desc: "شهادات المستفيدين من الدروس المنشورة",
                icon: Users,
                count: 200,
                color: "blue",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift text-center"
              >
                <div
                  className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon
                    className={`w-8 h-8 text-${category.color}-600`}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
                <span
                  className={`inline-block bg-${category.color}-100 text-${category.color}-700 px-4 py-2 rounded-full text-sm font-bold`}
                >
                  {category.count}+ شهادة
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            شاركنا تجربتك
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            إذا كنت من المستفيدين من خدماتنا، شاركنا تجربتك لتشجيع الآخرين على
            المساهمة
          </p>
          <Link
            to="/contact"
            className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
          >
            <MessageCircle className="w-5 h-5" />
            أرسل شهادتك
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            كن جزءاً من قصة نجاحنا
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            ساهم معنا واصنع أثراً يشهد لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              ساهم الآن
            </Link>
            <Link
              to="/scholars"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              تعرف على المشايخ
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
