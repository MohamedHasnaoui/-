import {
  Download,
  TrendingUp,
  Users,
  Wallet,
  Shield,
  FileText,
  Eye,
  CheckCircle,
  PieChart,
  BarChart3,
  ArrowLeft,
  Sparkles,
  Heart,
  Calendar,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { financialReports, stats } from "../data/siteData";

const TransparencyPage = () => {
  // Calculate totals
  const totalDonations = financialReports.reduce(
    (acc, r) => acc + r.totalDonations,
    0
  );
  const totalExpenses = financialReports.reduce(
    (acc, r) => acc + r.totalExpenses,
    0
  );
  const totalBeneficiaries = financialReports.reduce(
    (acc, r) => acc + r.beneficiaries,
    0
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            <Shield className="w-4 h-4" />
            أموالكم أمانة
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            الشفافية والتقارير
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            نؤمن بأن الشفافية أساس الثقة. لذلك ننشر تقاريرنا المالية بشكل دوري
            ليطمئن المتبرعون على أموالهم
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "إجمالي التبرعات",
                value: `${(totalDonations / 1000000).toFixed(1)}M`,
                icon: TrendingUp,
                color: "emerald",
              },
              {
                label: "إجمالي المصروفات",
                value: `${(totalExpenses / 1000000).toFixed(1)}M`,
                icon: Wallet,
                color: "blue",
              },
              {
                label: "المشايخ المدعومون",
                value: totalBeneficiaries,
                icon: Users,
                color: "amber",
              },
              {
                label: "تقارير منشورة",
                value: financialReports.length,
                icon: FileText,
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

      {/* Our Commitment Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              التزامنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا نحن شفافون؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp delay-200">
            {[
              {
                icon: Eye,
                title: "الوضوح التام",
                desc: "ننشر جميع التفاصيل المالية بدون إخفاء أي شيء",
                color: "emerald",
              },
              {
                icon: CheckCircle,
                title: "المحاسبة الدقيقة",
                desc: "نتبع معايير محاسبية صارمة ودقيقة في التوثيق",
                color: "blue",
              },
              {
                icon: Shield,
                title: "الأمانة في الصرف",
                desc: "كل درهم يُصرف في مكانه الصحيح وللغرض المخصص له",
                color: "amber",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <div
                  className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              التقارير الدورية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              التقارير المالية
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              تقارير ربع سنوية مفصلة توضح أوجه صرف التبرعات
            </p>
          </div>

          <div className="space-y-6 animate-fadeInUp delay-200">
            {financialReports.map((report, index) => (
              <div
                key={report.id}
                className="bg-gradient-to-l from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Report Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          تقرير {report.quarter} - {report.year}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>نُشر في {report.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-3 bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-100">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">التبرعات</p>
                          <p className="font-bold text-emerald-700">
                            {report.totalDonations.toLocaleString("ar-MA")} درهم
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Wallet className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">المصروفات</p>
                          <p className="font-bold text-blue-700">
                            {report.totalExpenses.toLocaleString("ar-MA")} درهم
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-amber-50 px-5 py-3 rounded-xl border border-amber-100">
                        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">المستفيدون</p>
                          <p className="font-bold text-amber-700">
                            {report.beneficiaries} شيخ
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30">
                      <Download className="w-5 h-5" />
                      تحميل PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expense Breakdown */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              توزيع الميزانية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              أين تذهب أموالكم؟
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              نحرص على صرف أكبر نسبة من التبرعات مباشرة للمستفيدين
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp delay-200">
            {[
              {
                percent: "85%",
                label: "تجهيزات المشايخ",
                desc: "كاميرات ومعدات تصوير",
                icon: Award,
              },
              {
                percent: "8%",
                label: "الدعم التقني",
                desc: "صيانة وتحديث المعدات",
                icon: Sparkles,
              },
              {
                percent: "5%",
                label: "النقل والتوصيل",
                desc: "إيصال المعدات للمشايخ",
                icon: TrendingUp,
              },
              {
                percent: "2%",
                label: "إدارية",
                desc: "مصاريف تشغيلية بسيطة",
                icon: PieChart,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover-lift"
              >
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-emerald-900" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">
                  {item.percent}
                </p>
                <p className="text-amber-400 font-bold mb-1">{item.label}</p>
                <p className="text-emerald-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-emerald-100 animate-fadeInUp">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ثقتكم مسؤوليتنا
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                نحن ملتزمون بأعلى معايير الشفافية والأمانة. إذا كان لديك أي
                استفسار حول أي بند في تقاريرنا، لا تتردد في التواصل معنا وسنرد
                على جميع تساؤلاتك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
                >
                  <Sparkles className="w-5 h-5" />
                  تواصل معنا
                </Link>
                <Link
                  to="/faq"
                  className="bg-white hover:bg-gray-50 text-emerald-700 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg border border-emerald-200 inline-flex items-center justify-center gap-2 hover-lift"
                >
                  الأسئلة الشائعة
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500 animate-fadeInUp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            اطمأننت؟ ساهم معنا الآن
          </h2>
          <p className="text-emerald-800 mb-8 text-lg">
            تبرعك في أيدٍ أمينة وسيصل للمستحقين بإذن الله
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

export default TransparencyPage;
