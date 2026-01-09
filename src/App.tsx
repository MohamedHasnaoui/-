import { useState } from 'react';
import logo from './images/association_logo.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const goalAmount = 1500000;
  const currentAmount = 850000;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-emerald-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-emerald-700 hover:text-amber-500 font-medium transition">عن المشروع</a>
            <a href="#equipment" className="text-emerald-700 hover:text-amber-500 font-medium transition">الأدوات</a>
            <a href="#impact" className="text-emerald-700 hover:text-amber-500 font-medium transition">الأثر</a>
            <a href="#contact" className="text-emerald-700 hover:text-amber-500 font-medium transition">تواصل معنا</a>
          </nav>

          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h1 className="text-xl font-bold text-emerald-800">جمعية الرحمة</h1>
              <p className="text-sm text-emerald-600 hidden sm:block">للتربية والتنمية والأعمال الاجتماعية</p>
            </div>
            <img src={logo} alt="شعار جمعية الرحمة" className="w-16 h-16 object-contain" />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-emerald-100 px-4 py-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className="text-emerald-700 hover:text-amber-500 font-medium transition py-2 border-b border-emerald-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                عن المشروع
              </a>
              <a 
                href="#equipment" 
                className="text-emerald-700 hover:text-amber-500 font-medium transition py-2 border-b border-emerald-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأدوات
              </a>
              <a 
                href="#impact" 
                className="text-emerald-700 hover:text-amber-500 font-medium transition py-2 border-b border-emerald-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأثر
              </a>
              <a 
                href="#contact" 
                className="text-emerald-700 hover:text-amber-500 font-medium transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="mb-8 inline-block">
            <span className="bg-amber-400/20 text-amber-300 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
              تجهيز الدعاة | صدقة جارية في نشر العلم
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            في زمن الفتن، كن سبباً<br />
            <span className="text-amber-400">في نشر العلم</span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            ساهم في تجهيز الدعاة والعلماء بالأدوات اللازمة لتسجيل ونشر دروسهم النافعة لتصل للأمة
          </p>

          <a
            href="#about"
            className="group bg-gradient-to-l from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold px-12 py-5 rounded-full text-xl shadow-2xl transform transition hover:scale-105 inline-flex items-center gap-3"
          >
            تعرف على المشروع
          </a>
        </div>
      </section>

      <section id="about" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              فجوة يجب أن نملأها
            </h2>
            <div className="w-24 h-1 bg-gradient-to-l from-amber-400 to-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-red-50 to-white border-2 border-red-100 hover:shadow-xl transition">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">انتشار الجهل والشبهات</h3>
              <p className="text-gray-700 leading-relaxed">
                في عصر السرعة، تنتشر المعلومات الخاطئة والشبهات بسرعة البرق
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-200 hover:shadow-xl transition">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">علماء ودعاة متقنون</h3>
              <p className="text-gray-700 leading-relaxed">
                فرَّغوا أنفسهم للعلم ولديهم ما ينفع الأمة من علم صحيح أصيل
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 hover:shadow-xl transition">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📷</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">ينقصهم الدعم التقني</h3>
              <p className="text-gray-700 leading-relaxed">
                لا يملكون الأدوات التقنية اللازمة لإيصال علمهم للأمة
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 bg-gradient-to-b from-emerald-50 to-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              تبرعك يترجم إلى هذه الأدوات
            </h2>
            <p className="text-xl text-gray-700 mb-2">المبادرة الواحدة تتضمن:</p>
            <div className="w-24 h-1 bg-gradient-to-l from-amber-400 to-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="كاميرا احترافية" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">كاميرا احترافية</h3>
                <p className="text-gray-600">لتصوير الدروس بجودة عالية وواضحة</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="حامل كاميرا" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">حامل كاميرا</h3>
                <p className="text-gray-600">لضمان ثبات وجودة الصورة أثناء التصوير</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="ميكروفون" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">ميكروفون</h3>
                <p className="text-gray-600">لتسجيل الصوت بوضوح ونقاء تام</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="ذاكرة تخزين" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">ذاكرة تخزين</h3>
                <p className="text-gray-600">لحفظ الدروس والمحاضرات بأمان</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-amber-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-emerald-900">المبادرة القادمة</span>
              <span className="text-3xl font-bold text-amber-600">
                {currentAmount.toLocaleString('ar-MA')} / {goalAmount.toLocaleString('ar-MA')} درهم
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-l from-amber-400 to-yellow-500 h-full rounded-full transition-all duration-500 flex items-center justify-end px-3"
                style={{ width: `${progressPercentage}%` }}
              >
                <span className="text-white text-sm font-bold">{progressPercentage.toFixed(0)}%</span>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-4">
              متبقي: <span className="font-bold text-emerald-700">{(goalAmount - currentAmount).toLocaleString('ar-MA')} درهم</span>
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319413/pexels-photo-1319413.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border-2 border-amber-400/30">
              <span className="text-4xl">📖</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              درهمٌ اليوم، أجرٌ كل يوم
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
            <p className="text-2xl md:text-3xl leading-relaxed mb-6 text-emerald-50">
              كل شخص يشاهد درساً تم تصويره بفضل دعمك،
              <br />
              <span className="text-amber-400 font-bold">يُكتب لك أجر علمه إن شاء الله</span>
            </p>

            <div className="bg-emerald-800/50 rounded-2xl p-8 border border-emerald-700/50">
              <p className="text-xl text-emerald-100 leading-relaxed">
                عن أبي هريرة رضي الله عنه أن رسول الله ﷺ قال: "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له"
              </p>
              <p className="text-amber-300 mt-4 font-semibold">رواه مسلم</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={logo} alt="شعار جمعية الرحمة" className="w-20 h-20 object-contain" />
              <div className="text-right">
                <h3 className="text-2xl font-bold">جمعية الرحمة</h3>
                <p className="text-emerald-300">للتربية والتنمية والأعمال الاجتماعية بمكناس</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold mb-4 text-amber-400">تواصل معنا</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {/* <Phone className="w-5 h-5 text-emerald-400" /> */}
                  <span className="text-emerald-200">+212 535 XX XX XX</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {/* <Mail className="w-5 h-5 text-emerald-400" /> */}
                  <span className="text-emerald-200">info@alrahma-meknes.org</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4 text-amber-400">روابط مهمة</h4>
              <ul className="space-y-2 text-emerald-200">
                <li><a href="#" className="hover:text-amber-400 transition">الموقع الرئيسي</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">مشاريعنا</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">تقارير الشفافية</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-8 text-center">
            <p className="text-emerald-300">
              © 2026 جمعية الرحمة للتربية والتنمية والأعمال الاجتماعية بمكناس. جميع الحقوق محفوظة.
            </p>
            <p className="text-emerald-400 mt-2 text-sm">
              "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
