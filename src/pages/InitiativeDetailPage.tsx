import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  CheckCircle,
  Camera,
  Mic,
  Lightbulb,
  HardDrive,
  Sparkles,
  Clock,
  ArrowRight,
  Heart,
  Share2,
  Target,
  TrendingUp,
  Youtube,
  BookOpen,
  Shield,
  Award,
  ChevronLeft,
} from "lucide-react";
import { initiatives, scholars } from "../data/siteData";

const InitiativeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initiative = initiatives.find((i) => i.id === Number(id));

  // Get scholars for this city
  const cityScholars = scholars.filter((s) => s.city === initiative?.city);

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center animate-fadeInUp">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            المبادرة غير موجودة
          </h1>
          <p className="text-gray-600 mb-8">
            عذراً، لم نتمكن من العثور على هذه المبادرة
          </p>
          <Link
            to="/initiatives"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-all inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للمبادرات
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage =
    (initiative.collectedAmount / initiative.goalAmount) * 100;
  const remainingAmount = initiative.goalAmount - initiative.collectedAmount;

  // Equipment details
  const equipmentDetails = [
    {
      name: "كاميرا",
      icon: Camera,
      desc: "كاميرا احترافية للتصوير بجودة عالية",
      price: 15000,
    },
    {
      name: "كاميرا احترافية",
      icon: Camera,
      desc: "كاميرا DSLR أو Mirrorless للتصوير الاحترافي",
      price: 25000,
    },
    {
      name: "ميكروفون",
      icon: Mic,
      desc: "ميكروفون لاسلكي لتسجيل صوت واضح",
      price: 3000,
    },
    {
      name: "إضاءة",
      icon: Lightbulb,
      desc: "نظام إضاءة LED للتصوير المثالي",
      price: 5000,
    },
    {
      name: "حامل",
      icon: HardDrive,
      desc: "حامل ثلاثي متين للكاميرا",
      price: 2000,
    },
  ];

  const getEquipmentDetail = (name: string) => {
    return equipmentDetails.find(
      (e) => e.name === name || name.includes(e.name.split(" ")[0])
    );
  };

  const getStatusInfo = () => {
    switch (initiative.status) {
      case "مكتملة":
        return {
          color: "green",
          bg: "bg-green-500",
          text: "text-green-700",
          bgLight: "bg-green-100",
          icon: CheckCircle,
        };
      case "جارية":
        return {
          color: "blue",
          bg: "bg-blue-500",
          text: "text-blue-700",
          bgLight: "bg-blue-100",
          icon: Clock,
        };
      default:
        return {
          color: "amber",
          bg: "bg-amber-500",
          text: "text-amber-700",
          bgLight: "bg-amber-100",
          icon: Sparkles,
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={initiative.image}
            alt={initiative.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2 border border-white/20"
          >
            <ArrowRight className="w-5 h-5" />
            رجوع
          </button>
        </div>

        {/* Share Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() =>
              navigator.share?.({
                url: window.location.href,
                title: initiative.name,
              })
            }
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20"
            aria-label="مشاركة"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            {/* Status Badge */}
            <span
              className={`inline-flex items-center gap-2 ${statusInfo.bg} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-fadeInDown`}
            >
              <StatusIcon className="w-4 h-4" />
              {initiative.status}
            </span>

            {/* Title & Location */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
              {initiative.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90 animate-fadeInUp delay-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{initiative.city}</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-lg">{initiative.scholars} مشايخ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "المبلغ المستهدف",
                value: `${initiative.goalAmount.toLocaleString("ar-MA")} درهم`,
                icon: Target,
                color: "emerald",
              },
              {
                label: "تم جمعه",
                value: `${initiative.collectedAmount.toLocaleString(
                  "ar-MA"
                )} درهم`,
                icon: TrendingUp,
                color: "blue",
              },
              {
                label: "المتبقي",
                value: `${remainingAmount.toLocaleString("ar-MA")} درهم`,
                icon: Clock,
                color: "amber",
              },
              {
                label: "نسبة الإنجاز",
                value: `${progressPercentage.toFixed(0)}%`,
                icon: Award,
                color: "purple",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Initiative */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 animate-fadeInUp">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  عن المبادرة
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {initiative.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  تهدف هذه المبادرة إلى دعم الدعاة والمشايخ في مدينة{" "}
                  {initiative.city} من خلال توفير الأدوات التقنية اللازمة لتسجيل
                  ونشر دروسهم العلمية. نسعى من خلال هذه المبادرة إلى إيصال العلم
                  الشرعي الصحيح لأكبر عدد ممكن من المستفيدين.
                </p>
              </div>

              {/* Progress Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 animate-fadeInUp delay-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  تقدم التبرعات
                </h2>

                {/* Large Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">التقدم الحالي</span>
                    <span
                      className={`text-3xl font-bold ${
                        progressPercentage >= 100
                          ? "text-green-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {progressPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 relative ${
                        progressPercentage >= 100
                          ? "bg-gradient-to-l from-green-500 to-green-600"
                          : "bg-gradient-to-l from-emerald-500 to-emerald-600"
                      }`}
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    >
                      {progressPercentage < 100 && (
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Amount Details */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-emerald-50 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-700">
                      {initiative.collectedAmount.toLocaleString("ar-MA")}
                    </p>
                    <p className="text-emerald-600 text-sm">درهم تم جمعه</p>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-amber-700">
                      {remainingAmount.toLocaleString("ar-MA")}
                    </p>
                    <p className="text-amber-600 text-sm">درهم متبقي</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-blue-700">
                      {initiative.goalAmount.toLocaleString("ar-MA")}
                    </p>
                    <p className="text-blue-600 text-sm">درهم الهدف</p>
                  </div>
                </div>
              </div>

              {/* Equipment Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 animate-fadeInUp delay-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-amber-600" />
                  </div>
                  التجهيزات المطلوبة
                </h2>

                {initiative.equipment.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {initiative.equipment.map((eq, index) => {
                      const detail = getEquipmentDetail(eq);
                      const Icon = detail?.icon || Camera;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group"
                        >
                          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <Icon className="w-7 h-7 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{eq}</h4>
                            <p className="text-gray-600 text-sm">
                              {detail?.desc || "تجهيز تقني للتصوير"}
                            </p>
                            {detail?.price && (
                              <p className="text-emerald-600 font-medium text-sm mt-1">
                                ~{detail.price.toLocaleString("ar-MA")} درهم
                              </p>
                            )}
                          </div>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-2xl">
                    <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      سيتم تحديد التجهيزات المطلوبة قريباً
                    </p>
                  </div>
                )}

                {/* Equipment Summary */}
                {initiative.equipment.length > 0 && (
                  <div className="mt-6 p-4 bg-emerald-50 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-emerald-800 font-bold">
                        إجمالي التجهيزات
                      </p>
                      <p className="text-emerald-600 text-sm">
                        {initiative.equipment.length} تجهيزات لـ{" "}
                        {initiative.scholars} مشايخ
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold text-emerald-700">
                        {(
                          initiative.equipment.length * initiative.scholars
                        ).toLocaleString("ar-MA")}
                      </p>
                      <p className="text-emerald-600 text-sm">وحدة إجمالية</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Scholars Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 animate-fadeInUp delay-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  المشايخ المستفيدون
                  <span className="text-sm font-normal text-gray-500 mr-2">
                    ({cityScholars.length} شيخ)
                  </span>
                </h2>

                {cityScholars.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {cityScholars.map((scholar) => (
                      <div
                        key={scholar.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors group"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                          <img
                            src={scholar.image}
                            alt={scholar.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">
                            {scholar.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {scholar.specialty}
                          </p>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                            <BookOpen className="w-4 h-4" />
                            <span>{scholar.lessonsCount} درس</span>
                          </div>
                        </div>
                        {scholar.youtube && (
                          <a
                            href={scholar.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`قناة يوتيوب ${scholar.name}`}
                            className="w-10 h-10 bg-red-100 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors group/yt"
                          >
                            <Youtube className="w-5 h-5 text-red-600 group-hover/yt:text-white" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-2xl">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      سيتم تحديد المشايخ المستفيدين قريباً
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      المبادرة في مرحلة التخطيط
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-2xl p-8 text-white top-24 animate-fadeInLeft">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ساهم في المبادرة</h3>
                  <p className="text-emerald-100 text-sm">
                    كل درهم يقربنا من تحقيق الهدف
                  </p>
                </div>

                {/* Mini Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-emerald-200">التقدم</span>
                    <span className="font-bold">
                      {progressPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-white h-full rounded-full transition-all"
                      style={{
                        width: `${Math.min(progressPercentage, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Amount Needed */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                  <p className="text-emerald-200 text-sm mb-1">
                    المبلغ المتبقي
                  </p>
                  <p className="text-3xl font-bold">
                    {remainingAmount.toLocaleString("ar-MA")} درهم
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  to="/donate"
                  className="block w-full bg-white hover:bg-gray-50 text-emerald-700 font-bold py-4 rounded-2xl text-center text-lg transition-all hover:scale-105 shadow-xl"
                >
                  تبرع الآن
                </Link>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-emerald-200 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>آمن</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-200 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>موثوق</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 animate-fadeInLeft delay-100">
                <h3 className="font-bold text-gray-900 mb-4">معلومات سريعة</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">الحالة</span>
                    <span
                      className={`${statusInfo.bgLight} ${statusInfo.text} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {initiative.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">المدينة</span>
                    <span className="font-medium text-gray-900">
                      {initiative.city}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">عدد المشايخ</span>
                    <span className="font-medium text-gray-900">
                      {initiative.scholars}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">التجهيزات</span>
                    <span className="font-medium text-gray-900">
                      {initiative.equipment.length || "قريباً"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 animate-fadeInLeft delay-200">
                <h3 className="font-bold text-amber-900 mb-3">شارك المبادرة</h3>
                <p className="text-amber-700 text-sm mb-4">
                  ساعدنا في نشر المبادرة ليصل الخير للجميع
                </p>
                <button
                  onClick={() =>
                    navigator.share?.({
                      url: window.location.href,
                      title: initiative.name,
                      text: initiative.description,
                    })
                  }
                  className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  مشاركة
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              مبادرات أخرى
            </h2>
            <p className="text-gray-600">استكشف المزيد من مبادراتنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp delay-200">
            {initiatives
              .filter((i) => i.id !== initiative.id)
              .slice(0, 3)
              .map((item) => {
                const progress = (item.collectedAmount / item.goalAmount) * 100;
                return (
                  <Link
                    key={item.id}
                    to={`/initiatives/${item.id}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover-lift"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 right-3 left-3">
                        <h3 className="text-white font-bold">{item.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">التقدم</span>
                        <span className="text-sm font-bold text-emerald-600">
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-l from-amber-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            كن شريكاً في نشر العلم
          </h2>
          <p className="text-emerald-800 mb-8">
            تبرعك يساهم في دعم العلماء ونشر العلم الشرعي الصحيح
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 hover-lift"
            >
              <Heart className="w-5 h-5" />
              تبرع الآن
            </Link>
            <Link
              to="/initiatives"
              className="bg-white hover:bg-gray-50 text-emerald-800 font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg inline-flex items-center justify-center gap-2 hover-lift"
            >
              جميع المبادرات
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativeDetailPage;
