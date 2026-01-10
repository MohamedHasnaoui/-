import {
  Heart,
  Copy,
  CheckCircle,
  Sparkles,
  BookOpen,
  Users,
  Shield,
  Gift,
  HandHeart,
  TrendingUp,
  Star,
  ArrowLeft,
  Building2,
  CreditCard,
  Globe,
  Banknote,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { donationInfo, stats } from "../data/siteData";

const DonatePage = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const goalAmount = 1500000;
  const currentAmount = 850000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Heart className="w-4 h-4" />
            صدقة جارية
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            ساهم في نشر العلم
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8 animate-fadeInUp delay-200">
            درهمك اليوم قد يكون سبباً في هداية آلاف الناس غداً
          </p>

          {/* Progress Bar in Hero */}
          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fadeInUp delay-300">
            <div className="flex justify-between items-center mb-3">
              <span className="text-emerald-100 font-medium">
                المبادرة الحالية: تجهيز دعاة فاس
              </span>
              <span className="text-2xl font-bold text-amber-400">
                {progressPercentage.toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-l from-amber-400 to-yellow-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-3 text-sm">
              <span className="text-emerald-200">
                تم جمع:{" "}
                <span className="font-bold text-white">
                  {currentAmount.toLocaleString("ar-MA")} درهم
                </span>
              </span>
              <span className="text-emerald-200">
                الهدف:{" "}
                <span className="font-bold text-white">
                  {goalAmount.toLocaleString("ar-MA")} درهم
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "علم ينتفع به",
                desc: "صدقة جارية تستمر حتى بعد الممات",
                color: "emerald",
              },
              {
                icon: Shield,
                title: "شفافية تامة",
                desc: "نوثق كل ريال ونشارك التقارير",
                color: "blue",
              },
              {
                icon: Users,
                title: "وصول واسع",
                desc: "آلاف المستفيدين من الدروس",
                color: "purple",
              },
              {
                icon: Gift,
                title: "أجر مضاعف",
                desc: "الدال على الخير كفاعله",
                color: "amber",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group hover-lift">
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

      {/* Main Donation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              طرق التبرع
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              معلومات التحويل البنكي
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              يمكنك التبرع عبر التحويل البنكي المباشر لحساب الجمعية
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden animate-fadeInUp delay-200">
            {/* Header */}
            <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                الحساب البنكي للجمعية
              </h3>
              <p className="text-emerald-100 mt-2">
                جميع التبرعات تذهب مباشرة لدعم المشايخ
              </p>
            </div>

            {/* Bank Details */}
            <div className="p-8 space-y-6">
              {/* Bank Name & Account Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <label className="text-sm text-gray-500 font-medium">
                      اسم البنك
                    </label>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    {donationInfo.bankName}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <label className="text-sm text-gray-500 font-medium">
                      اسم الحساب
                    </label>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    {donationInfo.accountName}
                  </p>
                </div>
              </div>

              {/* RIB - Main */}
              <div className="bg-gradient-to-l from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-amber-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-lg">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <label className="text-sm text-amber-700 font-medium">
                        رقم الحساب البنكي
                      </label>
                      <p className="text-xs text-amber-600">RIB</p>
                    </div>
                    <div className="mr-auto">
                      <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                        الأكثر استخداماً
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <p
                      className="text-2xl font-bold text-gray-900 font-mono tracking-wider"
                      dir="ltr"
                    >
                      {donationInfo.rib}
                    </p>
                    <button
                      onClick={() => copyToClipboard(donationInfo.rib, "rib")}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        copied === "rib"
                          ? "bg-green-500 text-white"
                          : "bg-amber-500 hover:bg-amber-600 text-white"
                      }`}
                    >
                      {copied === "rib" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                      <span>{copied === "rib" ? "تم النسخ!" : "نسخ"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* IBAN */}
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label className="text-sm text-blue-700 font-medium">
                      رقم الحساب الدولي
                    </label>
                    <p className="text-xs text-blue-600">
                      IBAN - للتحويلات الدولية
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 bg-white rounded-xl p-4">
                  <p
                    className="text-lg font-bold text-gray-900 font-mono"
                    dir="ltr"
                  >
                    {donationInfo.iban}
                  </p>
                  <button
                    onClick={() => copyToClipboard(donationInfo.iban, "iban")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      copied === "iban"
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    {copied === "iban" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>{copied === "iban" ? "تم!" : "نسخ"}</span>
                  </button>
                </div>
              </div>

              {/* SWIFT */}
              <div className="bg-gray-100 rounded-2xl p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 font-medium">
                      رمز السويفت
                    </label>
                    <p className="text-xs text-gray-500">SWIFT Code</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 bg-white rounded-xl p-4">
                  <p
                    className="text-lg font-bold text-gray-900 font-mono"
                    dir="ltr"
                  >
                    {donationInfo.swift}
                  </p>
                  <button
                    onClick={() => copyToClipboard(donationInfo.swift, "swift")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      copied === "swift"
                        ? "bg-green-500 text-white"
                        : "bg-gray-600 hover:bg-gray-700 text-white"
                    }`}
                  >
                    {copied === "swift" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>{copied === "swift" ? "تم!" : "نسخ"}</span>
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">
                    بعد التحويل
                  </h4>
                  <p className="text-emerald-700">
                    يرجى إرسال إشعار التحويل عبر الواتساب أو البريد الإلكتروني
                    لتأكيد استلام تبرعكم وإرسال إيصال لكم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              أثر تبرعك
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ماذا يمكن أن يحقق تبرعك؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp delay-200">
            {[
              {
                amount: "500",
                desc: "ميكروفون احترافي لشيخ واحد",
                icon: HandHeart,
              },
              {
                amount: "2000",
                desc: "كاميرا كاملة مع ملحقاتها",
                icon: TrendingUp,
              },
              { amount: "5000", desc: "تجهيز كامل لشيخ واحد", icon: Star },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover-lift"
              >
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-900" />
                </div>
                <p className="text-3xl font-bold text-white mb-2">
                  {item.amount} <span className="text-lg">درهم</span>
                </p>
                <p className="text-emerald-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hadith Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl animate-fadeInUp">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-amber-400" />
              </div>

              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                قال رسول الله ﷺ:
              </p>
              <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed mb-6">
                "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم
                ينتفع به، أو ولد صالح يدعو له"
              </p>
              <p className="text-amber-400 font-semibold text-lg">رواه مسلم</p>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-emerald-200 text-lg">
                  تبرعك لدعم نشر العلم الشرعي يجمع بين الصدقة الجارية والعلم
                  الذي ينتفع به
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            لديك استفسار حول التبرع؟
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            تواصل معنا وسنرد على جميع استفساراتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Sparkles className="w-5 h-5" />
              تواصل معنا
            </Link>
            <Link
              to="/transparency"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              تقارير الشفافية
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
