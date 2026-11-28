/* =====================================================================
 * app/lumise/page.tsx  (یا app/page.tsx)
 * لندینگ فارسی و راست‌چین افزونه Lumise — Next.js App Router + Tailwind
 * سبک: Material Design 3 (سطوح tonal، گوشه‌های 28px، دکمه‌های Filled/Tonal/Outlined)
 *
 * سرعت و کش:
 *  - کل صفحه Server Component است و صفر جاوااسکریپت سمت کلاینت دارد.
 *  - force-static + revalidate روزانه => صفحه یک‌بار ساخته و از CDN سرو می‌شود (ISR).
 *  - همه انیمیشن‌ها CSS خالص هستند (scroll-driven، شمارنده با @property، marquee).
 *  - تصاویر با next/image (AVIF/WebP، lazy، sizes دقیق) و فقط تصویر Hero با priority.
 *
 * نیازمندی: در next.config دامنه‌های تصاویر را اضافه کنید (پایین همین پاسخ آمده).
 * ===================================================================== */

import type { Metadata } from "next";
import Image from "next/image";
import { Vazirmatn } from "next/font/google";

/* ---------------------------- تنظیمات کش ---------------------------- */
export const dynamic = "force-static";
export const revalidate = 86400; // هر ۲۴ ساعت بازسازی

/* ---------------------------- فونت فارسی ---------------------------- */
const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

/* ------------------------------- SEO -------------------------------- */
export const metadata: Metadata = {
  title: "Lumise | طراح آنلاین محصول برای ووکامرس و وردپرس",
  description:
    "Lumise افزونه طراحی آنلاین محصول برای ووکامرس است؛ مشتری تیشرت، ماگ، قاب موبایل و هر محصول قابل چاپی را خودش طراحی می‌کند و شما فایل آماده چاپ ۳۰۰ DPI تحویل می‌گیرید. بیش از ۱۳٬۵۰۰ فروش در CodeCanyon.",
  openGraph: {
    title: "Lumise | طراح آنلاین محصول",
    description: "بیش از ۱۳٬۵۰۰ فروش و ۶٬۵۰۰ مشتری در بازار بین‌المللی",
    images: ["https://lumise.com/wp-content/themes/lumise/assets/img/brand/lumise-share-v2.png"],
    locale: "fa_IR",
    type: "website",
  },
};

/* =====================================================================
 * داده‌ها (برگرفته از lumise.com/classic و صفحه CodeCanyon — نوامبر ۲۰۲۶)
 * ===================================================================== */
const IMG = {
  logo: "/lumxxx/img/landing/lumise-logo-light-v1.webp",
  hero: "/lumxxx/img/landing/hero3.jpg",
  products: "/lumxxx/img/landing/product.jpg",
  devices: "/lumxxx/img/landing/apple-decives.jpg",
  export: "/lumxxx/img/landing/export.jpg",
  preview:
    "/lumxxx/img/landing/export.jpg",
};

const SCREENSHOTS = Array.from(
  { length: 10 },
  (_, i) => `/lumxxx/img/landing/screenshot-1.png`
);

const STATS = [
  { value: 13522, suffix: "", label: "فروش در CodeCanyon", icon: "🛒" },
  { value: 6500, suffix: "+", label: "مشتری در سراسر جهان", icon: "🌍" },
  { value: 1000, suffix: "+", label: "سفارش روزانه ساخته‌شده", icon: "📦" },
  { value: 907, suffix: "", label: "نقد با امتیاز ۴٫۷۹ از ۵", icon: "⭐" },
];

const BRANDS = ["KOKO SHIRT", "overflow", "T-Shirt Pros", "iTee Design & Print", "HUES HIVE", "MUNCHMAKERS", "YOUR STYLE"];

const PRINT_TECH = [
  { en: "DTG", fa: "چاپ مستقیم روی پارچه" },
  { en: "Silk", fa: "چاپ سیلک" },
  { en: "Sublimation", fa: "چاپ سابلیمیشن" },
  { en: "Screen", fa: "چاپ اسکرین" },
  { en: "Digital", fa: "چاپ دیجیتال" },
  { en: "Embroidery", fa: "گلدوزی" },
];

const FEATURES = [
  { icon: "✨", title: "رابط کاربری حرفه‌ای", text: "مثل یک اپلیکیشن واقعی کار می‌کند؛ ساده، روان و لذت‌بخش برای مشتری." },
  { icon: "🧩", title: "قالب‌های آماده طراحی", text: "قالب بسازید، قیمت بگذارید و مشتری با یک کلیک از آن استفاده کند." },
  { icon: "🖼️", title: "کلیپ‌آرت نامحدود", text: "دسترسی به بیش از ۱۲۰ هزار کلیپ‌آرت از Pixabay و Openclipart." },
  { icon: "🔁", title: "خروجی/ورودی طرح", text: "طرح را روی یک دستگاه ذخیره و روی دستگاه دیگر ادامه دهید." },
  { icon: "🌐", title: "چندزبانه", text: "ترجمه کامل از پنل مدیریت؛ فارسی هم به‌راحتی قابل پیاده‌سازی است." },
  { icon: "📱", title: "موبایل و تبلت", text: "تجربه‌ای شبیه اپ بومی روی هر دستگاه؛ سفارش از هر جا." },
  { icon: "🖨️", title: "آماده چاپ پس از پرداخت", text: "خروجی PDF، SVG، PNG و JSON با کیفیت بالا برای همه دستگاه‌های چاپ." },
  { icon: "📸", title: "شبکه‌های اجتماعی", text: "مشتری عکس‌هایش را مستقیم از فیسبوک و اینستاگرام وارد می‌کند." },
  { icon: "🧺", title: "سبد خرید مستقل", text: "افزودن و ویرایش آیتم‌ها؛ باقی مراحل پرداخت را ووکامرس انجام می‌دهد." },
  { icon: "↩️", title: "Undo / Redo", text: "برگرداندن و تکرار همه اقدامات، درست مثل نرم‌افزار دسکتاپ." },
  { icon: "🔤", title: "افکت متن", text: "متن منحنی، فیش‌آی، مایل و محدب‌مقعر برای طرح‌های خلاقانه." },
  { icon: "🎨", title: "فیلترهای تصویر", text: "تنظیمات موضعی و فیلترهای متنوع برای عکس‌ها." },
  { icon: "✂️", title: "برش و ویرایش عکس", text: "کراپ، فیلتر رنگ و حتی حذف پس‌زمینه تصاویر." },
  { icon: "🎭", title: "لایه ماسک", text: "نمایش هوشمند متن و تصویر درون ماسک‌های دلخواه." },
  { icon: "🔳", title: "کیو‌آر کد", text: "افزودن QR Code شخصی‌سازی‌شده به طرح." },
  { icon: "🧲", title: "چسبندگی خودکار", text: "تراز خودکار لایه‌ها با خطوط مرکزی و سایر اجزا." },
  { icon: "📐", title: "ناحیه ویرایش منعطف", text: "تعیین ناحیه چاپ با ماوس، همراه با شعاع گوشه." },
  { icon: "🧮", title: "محاسبه قیمت چاپ", text: "قیمت‌گذاری بر اساس تعداد متن، رنگ و کلیپ‌آرت؛ کاملاً قابل تنظیم." },
];

const PACKAGES = [
  {
    badge: "پرفروش",
    name: "Lumise Classic",
    desc: "طراح محصول کامل برای فروشگاه ووکامرسی شما + پشتیبانی چت ۲۴/۷",
    old: "$69",
    price: "$48.30",
    sales: "13,479",
    rating: "889",
    img: "https://lumise.com/wp-content/uploads/2026/08/unnamed-150x150.png",
    href: "https://lumise.com/products/lumise-product-designer-for-wordpress-woocommerce/",
    highlight: true,
  },
  {
    badge: "همه‌چیز در یک‌جا",
    name: "Classic Bundle",
    desc: "Classic + بسته افزودنی‌ها + اتصال Printful + ادیتور MONO",
    old: "$186",
    price: "$148.80",
    sales: "728",
    rating: "98",
    img: "https://lumise.com/wp-content/uploads/2026/09/3af95c188c49dd77f99d6c3d65bee6c9.png",
    href: "https://lumise.com/products/lumise-classic-bundle/",
  },
  {
    badge: "افزودنی",
    name: "Addons Bundle",
    desc: "بیش از ۱۰ ابزار برای راه‌اندازی محصول و مدیریت روزانه فروشگاه",
    old: "$69.99",
    price: "$48.99",
    sales: "2,254",
    rating: "81",
    img: "https://lumise.com/wp-content/uploads/2026/09/lumise_vendors_thumbnail.png",
    href: "https://lumise.com/products/bundle-addons-for-lumise-classic/",
  },
  {
    badge: "جدید",
    name: "MONO Editor",
    desc: "ادیتور مدرن سیاه‌وسفید با ویرایش روان‌تر روی موبایل",
    old: "$49.99",
    price: "$34.99",
    sales: "168",
    rating: "28",
    img: "https://lumise.com/wp-content/uploads/2026/09/exec-438a078e-9cab-4cbd-aa43-2dbb3d1d4339-1024x522-1-150x150.png",
    href: "https://lumise.com/products/lumise-mono-editor-theme/",
  },
];

const TESTIMONIALS = [
  { user: "mygiftstory", text: "محصولی کاملاً حساب‌شده با تمرکز بر تجربه کاربر؛ بیشتر نیازهایم را برطرف کرد و پشتیبانی سریع و مفید بود." },
  { user: "Terrance007", text: "پشتیبانی فوق‌العاده سریع و دوستانه. به هر کسی که کسب‌وکار تازه راه می‌اندازد پیشنهادش می‌کنم." },
  { user: "freecee", text: "طراح‌های زیادی امتحان کردم، این یکی برای من بهترین بود؛ رابط روشن، قیمت مناسب و پشتیبانی خوب." },
  { user: "Samcefforts", text: "در طراحی، سهولت استفاده، شخصی‌سازی و انعطاف، نمره ۱۰ از ۱۰ می‌دهم." },
  { user: "Milad02", text: "امکانات کامل، UI و UX عالی و کار با آن از همه ادیتورهایی که امتحان کردم ساده‌تر است." },
  { user: "GavinTheFirst", text: "دقیقاً همان چیزی بود که برای سایت لباس سفارشی‌ام لازم داشتم." },
];

const FAQ = [
  {
    q: "Lumise با چه نسخه‌هایی سازگار است؟",
    a: "با وردپرس ۴٫۹ تا ۶٫۹ و ووکامرس ۵ تا ۹، و مرورگرهای Chrome، Firefox، Safari، Edge و Opera.",
  },
  {
    q: "سرور من به چه چیزهایی نیاز دارد؟",
    a: "ZipArchive، allow_url_fopen، توابع file_get_contents و file_put_contents، افزونه Imagick، حداقل memory_limit برابر 256MB و post_max_size برابر 800MB.",
  },
  {
    q: "چه محصولاتی را می‌توان طراحی کرد؟",
    a: "هر محصولی که ناحیه چاپ داشته باشد: تیشرت، ماگ، قاب موبایل، استیکر، پوستر، کارت ویزیت، کفش و…",
  },
  {
    q: "قالب‌ها و کلیپ‌آرت‌ها داخل بسته هستند؟",
    a: "به دلیل حق نشر، قالب‌ها و کلیپ‌آرت‌ها در فایل دانلودی نیستند؛ اما اتصال به منابع Pixabay و Openclipart وجود دارد.",
  },
  {
    q: "تفاوت لایسنس Regular و Extended چیست؟",
    a: "Regular برای یک محصول نهایی که کاربرانش برای آن هزینه نمی‌پردازند و Extended برای محصولی که از کاربر نهایی هزینه گرفته می‌شود.",
  },
];

/* =====================================================================
 * استایل‌های سراسری انیمیشن (CSS خالص — بدون JS)
 * ===================================================================== */
const GLOBAL_CSS = `
:root{
  --md-primary:#7c4dff; --md-on-primary:#fff;
  --md-primary-container:#ece3ff; --md-on-primary-container:#25005a;
  --md-tertiary:#ff5ca8; --md-surface:#fdf8ff; --md-surface-2:#f4edfb;
}
@property --n { syntax:'<integer>'; initial-value:0; inherits:false; }
.count{ animation:count 2.4s cubic-bezier(.2,0,0,1) forwards; counter-reset:n var(--n); }
.count::after{ content:counter(n, persian); }
@keyframes count{ to{ --n:var(--to); } }

@keyframes shine{ to{ background-position:200% center; } }
.shine{ background-size:200% auto; animation:shine 6s linear infinite; }

@keyframes float{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-14px) } }
.float{ animation:float 6s ease-in-out infinite; }
.float-delay{ animation:float 7s ease-in-out 1.2s infinite; }

@keyframes blob{ 0%,100%{ border-radius:42% 58% 63% 37%/41% 44% 56% 59%; transform:rotate(0) }
                 50%{ border-radius:63% 37% 38% 62%/58% 63% 37% 42%; transform:rotate(180deg) } }
.blob{ animation:blob 18s ease-in-out infinite; }

@keyframes marquee{ to{ transform:translateX(50%); } }
.marquee{ animation:marquee 28s linear infinite; }
.marquee:hover{ animation-play-state:paused; }

@keyframes rise{ from{ opacity:0; transform:translateY(32px) scale(.98) } to{ opacity:1; transform:none } }
.rise{ animation:rise .9s cubic-bezier(.2,0,0,1) both; }

@supports (animation-timeline: view()){
  .reveal{ animation:rise linear both; animation-timeline:view(); animation-range:entry 0% cover 28%; }
}
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{ animation:none !important; transition:none !important; }
  .count{ counter-reset:n var(--to); }
}
`;

/* =====================================================================
 * کامپوننت: TopAppBar
 * نوار بالای چسبان M3 با پس‌زمینه شیشه‌ای و دکمه FAB-مانند خرید
 * ===================================================================== */
function TopAppBar() {
  const links = [
    ["امکانات", "#features"],
    ["تصاویر", "#gallery"],
    ["بسته‌ها", "#packages"],
    ["نظرات", "#reviews"],
    ["سوالات", "#faq"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#16072f]/70 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Lumise">
          <Image src={IMG.logo} alt="لوگوی Lumise" width={110} height={28} className="h-7 w-auto" priority />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([t, h]) => (
            <li key={h}>
              <a href={h} className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                {t}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#pricing"
          className="rounded-full bg-[var(--md-primary)] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-900/40 transition hover:scale-105 hover:shadow-lg active:scale-95"
        >
          خرید Lumise
        </a>
      </nav>
    </header>
  );
}

/* =====================================================================
 * کامپوننت: Hero
 * عنوان بزرگ LUMISE با گرادیان متحرک، شیپ‌های blob، تصویر ادیتور
 * و کارت‌های شناور (سفارش جدید / فایل آماده چاپ)
 * ===================================================================== */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#16072f] pb-24 pt-32 text-white md:pt-40">
      {/* پس‌زمینه تزئینی */}
      <div aria-hidden className="blob absolute -top-40 start-[-10%] -z-10 h-[34rem] w-[34rem] bg-violet-600/40 blur-3xl" />
      <div aria-hidden className="blob absolute bottom-[-12rem] end-[-8%] -z-10 h-[30rem] w-[30rem] bg-pink-500/30 blur-3xl" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="mx-auto max-w-6xl px-5 text-center">
        <span className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-violet-200 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          طراح محصول شماره ۱ برای فروشگاه‌های شخصی‌سازی
        </span>

        {/* LUMISE بزرگ */}
        <h1 className="rise mt-6 select-none font-black leading-none tracking-tight [animation-delay:.1s]" dir="ltr">
          <span className="shine block bg-gradient-to-r from-violet-300 via-pink-300 via-50% to-violet-300 bg-clip-text text-[22vw] text-transparent md:text-[11rem] lg:text-[13rem]">
            LUMISE
          </span>
        </h1>

        <p className="rise mx-auto mt-4 max-w-2xl text-xl font-bold text-white md:text-3xl [animation-delay:.2s]">
          طراح آنلاین محصول برای ووکامرس و وردپرس
        </p>
        <p className="rise mx-auto mt-4 max-w-2xl leading-8 text-white/70 [animation-delay:.3s]">
          به مشتری‌هایتان اجازه دهید تیشرت، ماگ، قاب موبایل و هر محصول قابل چاپی را خودشان طراحی کنند؛
          شما فقط فایل آماده چاپ ۳۰۰ DPI را تحویل می‌گیرید و تولید می‌کنید.
        </p>

        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3 [animation-delay:.4s]">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#16072f] shadow-xl shadow-violet-950/50 transition hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0"
          >
            همین حالا شروع کنید
            <span className="transition group-hover:-translate-x-1">←</span>
          </a>
          <a
            href="https://demo.lumise.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-medium text-white transition hover:bg-white/10"
          >
            ▶ مشاهده دمو زنده
          </a>
        </div>

        {/* چیپ‌های اعتماد */}
        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-2 text-sm [animation-delay:.5s]">
          <Chip>⭐ ۴٫۷۹ از ۵ در CodeCanyon</Chip>
          <Chip>💬 ۴٫۹۲ از ۵ رضایت از پشتیبانی</Chip>
          <Chip>🏆 نویسنده Power Elite در Envato</Chip>
        </div>

        {/* تصویر ادیتور + کارت‌های شناور */}
        <div className="rise relative mx-auto mt-16 max-w-5xl [animation-delay:.6s]">
          <div className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-tr from-violet-500/40 to-pink-500/30 blur-2xl" />
          <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur">
            <Image
              src={IMG.hero}
              alt="رابط ادیتور Lumise در حال طراحی تیشرت"
              width={1600}
              height={900}
              priority
              sizes="(min-width:1024px) 1000px, 100vw"
              className="h-auto w-full rounded-[22px]"
            />
          </div>

          <div className="float absolute -start-4 top-10 hidden rounded-3xl bg-white p-4 text-start text-[#16072f] shadow-2xl md:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-lg">$</span>
              <div>
                <p className="text-xs text-slate-500">فعالیت فروش</p>
                <p className="font-bold">سفارش شخصی‌سازی جدید</p>
              </div>
            </div>
          </div>
          <div className="float-delay absolute -end-4 bottom-10 hidden rounded-3xl bg-white p-4 text-start text-[#16072f] shadow-2xl md:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-100 text-lg">✓</span>
              <div>
                <p className="text-xs text-slate-500">خودکار آماده شد</p>
                <p className="font-bold">فایل‌های آماده چاپ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* کامپوننت کوچک: Chip — چیپ Assist در M3 */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/85 backdrop-blur">{children}</span>
  );
}

/* =====================================================================
 * کامپوننت: TrustStats
 * آمار اعتماد بین‌المللی با شمارنده متحرک (CSS @property) و ارقام فارسی
 * ===================================================================== */
function TrustStats() {
  return (
    <section className="relative z-10 -mt-12 px-5" aria-label="آمار Lumise">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 rounded-[32px] bg-white p-3 shadow-xl shadow-violet-200/60 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="reveal rounded-[24px] bg-[var(--md-surface-2)] p-6 text-center transition hover:bg-[var(--md-primary-container)]"
          >
            <div className="text-3xl">{s.icon}</div>
            <p
              className="mt-2 text-3xl font-black text-[var(--md-primary)] md:text-4xl"
              aria-label={`${s.value.toLocaleString("fa-IR")}${s.suffix}`}
            >
              <span className="count" style={{ ["--to" as string]: s.value } as React.CSSProperties} />
              {s.suffix}
            </p>
            <p className="mt-1 text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-500">
        بیش از ۹ سال حضور مداوم در بازار بین‌المللی Envato، آخرین به‌روزرسانی: ۲۵ نوامبر ۲۰۲۶ — ساخته‌شده توسط King-Theme
        با بیش از ۱ میلیون دلار فروش در Envato.
      </p>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: BrandMarquee
 * نوار متحرک برندهای مشتری (دو نسخه پشت‌سرهم برای حلقه بی‌پایان)
 * ===================================================================== */
function BrandMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="overflow-hidden py-14" aria-label="مشتریان Lumise">
      <p className="mb-6 text-center text-sm font-medium text-slate-500">مورد اعتماد فروشگاه‌ها و چاپخانه‌ها در سراسر جهان</p>
      <div className="relative [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="marquee flex w-max gap-12" dir="ltr">
          {row.concat(row).map((b, i) => (
            <span key={i} className="whitespace-nowrap text-2xl font-black text-slate-300 transition hover:text-[var(--md-primary)]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: SectionHeader — عنوان استاندارد بخش‌ها
 * ===================================================================== */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full bg-[var(--md-primary-container)] px-4 py-1.5 text-sm font-bold text-[var(--md-on-primary-container)]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[#16072f] md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 leading-8 text-slate-600">{desc}</p>}
    </div>
  );
}

/* =====================================================================
 * کامپوننت: Benefits
 * بخش زیگزاگ «از ایده تا چاپ» با تصاویر و چیپ‌های تکنولوژی چاپ
 * ===================================================================== */
function Benefits() {
  const rows = [
    {
      title: "استفاده آسان، راه‌اندازی سریع",
      text: "رابطی دوستانه که نصب و استفاده از آن ساده است و وقت و هزینه شما را برای کارهای مهم‌تر آزاد می‌کند.",
      img: IMG.hero,
      alt: "ادیتور Lumise",
      extra: (
        <ul className="mt-5 space-y-2">
          {["رابط کاربری ساده و شهودی", "نصب و پیکربندی سریع", "زمان بیشتر برای رشد کسب‌وکار"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-slate-700">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-xs text-emerald-700">✓</span>
              {t}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "پشتیبانی از هر نوع محصول",
      text: "از تیشرت و پوشاک تا کارت ویزیت، استیکر، ماگ و قاب موبایل؛ هر چیزی که قابل چاپ باشد.",
      img: IMG.products,
      alt: "محصولات قابل شخصی‌سازی",
    },
    {
      title: "قیمت‌گذاری برای هر تکنولوژی چاپ",
      text: "برای هر روش چاپ، قیمت‌گذاری جزئی و مخصوص تعریف کنید تا با شیوه تولید شما هماهنگ باشد.",
      img: IMG.devices,
      alt: "Lumise روی موبایل، تبلت و دسکتاپ",
      extra: (
        <div className="mt-5 flex flex-wrap gap-2">
          {PRINT_TECH.map((p) => (
            <span
              key={p.en}
              className="rounded-xl border border-violet-200 bg-white px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow"
            >
              <b className="text-[var(--md-primary)]" dir="ltr">
                {p.en}
              </b>
              <span className="ms-2 text-slate-500">{p.fa}</span>
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "فایل آماده چاپ با کیفیت ۳۰۰ DPI",
      text: "طرح نهایی پس از پرداخت به سفارش پیوست می‌شود؛ خروجی با وضوح بالا، مستقیم برای تولید. سازگار کامل با موبایل و تبلت.",
      img: IMG.export,
      alt: "خروجی با کیفیت بالا برای چاپ",
    },
  ];

  return (
    <section className="px-5 py-20">
      <SectionHeader
        eyebrow="از ایده تا چاپ"
        title="Lumise چطور به کسب‌وکار شما کمک می‌کند؟"
        desc="یک طراح محصول آنلاین کامل برای کسب‌وکارهایی که پوشاک، تابلو و محصولات تبلیغاتی شخصی‌سازی‌شده می‌فروشند."
      />
      <div className="mx-auto max-w-6xl space-y-10">
        {rows.map((r, i) => (
          <article
            key={r.title}
            className={`reveal grid items-center gap-8 rounded-[32px] bg-[var(--md-surface-2)] p-6 md:grid-cols-2 md:p-10 ${
              i % 2 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="group overflow-hidden rounded-[24px] shadow-lg">
              <Image
                src={r.img}
                alt={r.alt}
                width={900}
                height={640}
                loading="lazy"
                sizes="(min-width:768px) 520px, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-[var(--md-primary)]">۰{(i + 1).toLocaleString("fa-IR")}</span>
              <h3 className="mt-2 text-2xl font-black text-[#16072f] md:text-3xl">{r.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{r.text}</p>
              {r.extra}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: FeaturesGrid
 * گرید ۱۸ قابلیت کلیدی با کارت‌های Elevated M3 و افکت hover
 * ===================================================================== */
function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-28 bg-[#16072f] px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-violet-200">امکانات کلیدی</span>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            هر آنچه برای یک <span className="shine bg-gradient-to-r from-violet-300 via-pink-300 to-violet-300 bg-clip-text text-transparent">چاپخانه آنلاین</span> لازم است
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="reveal group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[.08]"
            >
              <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-violet-500/0 blur-2xl transition duration-500 group-hover:bg-violet-500/30" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {f.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Gallery
 * گالری اسکرین‌شات‌ها با اسکرول افقی snap (بدون JS) و lazy load
 * ===================================================================== */
function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-24">
      <div className="px-5">
        <SectionHeader eyebrow="نگاهی از نزدیک" title="تصاویر محیط Lumise" desc="برای دیدن بیشتر، اسلایدها را به چپ و راست بکشید." />
      </div>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:thin] md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
        {SCREENSHOTS.map((src, i) => (
          <figure
            key={src}
            className="reveal w-[85vw] shrink-0 snap-center overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg transition hover:shadow-2xl md:w-[640px]"
          >
            <Image
              src={src}
              alt={`اسکرین‌شات شماره ${(i + 1).toLocaleString("fa-IR")} از Lumise`}
              width={1280}
              height={800}
              loading="lazy"
              sizes="(min-width:768px) 640px, 85vw"
              className="h-auto w-full"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Packages
 * کارت‌های بسته‌های رسمی Lumise با تخفیف، تعداد فروش و امتیاز
 * ===================================================================== */
function Packages() {
  return (
    <section id="packages" className="scroll-mt-28 bg-[var(--md-surface-2)] px-5 py-24">
      <SectionHeader eyebrow="محصولات Lumise" title="بسته مناسب خود را انتخاب کنید" desc="قیمت‌ها از فروشگاه رسمی lumise.com" />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((p) => (
          <article
            key={p.name}
            className={`reveal relative flex flex-col rounded-[28px] p-6 transition duration-300 hover:-translate-y-2 ${
              p.highlight
                ? "bg-[#16072f] text-white shadow-2xl shadow-violet-400/40 ring-2 ring-[var(--md-primary)]"
                : "bg-white shadow-md hover:shadow-xl"
            }`}
          >
            <span
              className={`absolute end-5 top-5 rounded-full px-3 py-1 text-xs font-bold ${
                p.highlight ? "bg-[var(--md-tertiary)] text-white" : "bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)]"
              }`}
            >
              {p.badge}
            </span>
            <Image src={p.img} alt={p.name} width={72} height={72} loading="lazy" className="h-16 w-16 rounded-2xl object-cover" />
            <h3 className="mt-4 text-xl font-black" dir="ltr">
              {p.name}
            </h3>
            <p className={`mt-2 flex-1 text-sm leading-7 ${p.highlight ? "text-white/70" : "text-slate-600"}`}>{p.desc}</p>
            <div className="mt-4 flex items-end gap-2" dir="ltr">
              <span className="text-3xl font-black">{p.price}</span>
              <s className="pb-1 text-sm opacity-50">{p.old}</s>
            </div>
            <p className={`mt-2 text-xs ${p.highlight ? "text-white/60" : "text-slate-500"}`}>
              <span dir="ltr">{p.sales}</span> فروش · ★ <span dir="ltr">{p.rating}</span> امتیاز
            </p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener"
              className={`mt-5 rounded-full py-3 text-center font-bold transition active:scale-95 ${
                p.highlight
                  ? "bg-white text-[#16072f] hover:bg-violet-100"
                  : "bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)] hover:bg-violet-200"
              }`}
            >
              مشاهده و خرید
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Testimonials
 * نظرات مشتریان بین‌المللی (ترجمه آزاد) با کارت‌های Outlined M3
 * ===================================================================== */
function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-28 px-5 py-24">
      <SectionHeader
        eyebrow="محبوب مشتریان"
        title="۶٬۵۰۰+ مشتری به Lumise اعتماد کرده‌اند"
        desc="امتیاز ۴٫۷۹ از ۵ با ۹۰۷ نقد در CodeCanyon و بیش از ۳ هزار دیدگاه"
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.user}
            className="reveal rounded-[28px] border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-xl"
          >
            <div className="text-amber-400" aria-label="۵ ستاره">
              ★★★★★
            </div>
            <blockquote className="mt-3 leading-8 text-slate-700">«{t.text}»</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-full font-bold text-white"
                style={{ background: `hsl(${260 + i * 18} 70% 55%)` }}
              >
                {t.user[0]}
              </span>
              <span className="font-bold text-[#16072f]" dir="ltr">
                {t.user}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Pricing
 * مقایسه لایسنس Regular و Extended در CodeCanyon
 * ===================================================================== */
function Pricing() {
  const included = ["بررسی کیفیت توسط Envato", "به‌روزرسانی‌های آینده", "۶ ماه پشتیبانی از King-Theme"];
  const plans = [
    { name: "Regular", price: "$99", text: "برای یک محصول نهایی که کاربران برای آن هزینه‌ای نمی‌پردازند.", main: true },
    { name: "Extended", price: "$349", text: "برای یک محصول نهایی که از کاربران نهایی هزینه دریافت می‌شود." },
  ];
  return (
    <section id="pricing" className="scroll-mt-28 bg-[var(--md-surface-2)] px-5 py-24">
      <SectionHeader eyebrow="لایسنس CodeCanyon" title="قیمت‌گذاری شفاف" desc="بیش از ۱۳٬۵۰۰ نفر تا امروز Lumise را از CodeCanyon خریده‌اند." />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`reveal rounded-[32px] p-8 ${p.main ? "bg-[var(--md-primary)] text-white shadow-2xl shadow-violet-400/50" : "bg-white shadow-md"}`}
          >
            <h3 className="text-lg font-bold" dir="ltr">
              {p.name} License
            </h3>
            <p className="mt-4 text-6xl font-black" dir="ltr">
              {p.price}
            </p>
            <p className={`mt-4 leading-7 ${p.main ? "text-white/80" : "text-slate-600"}`}>{p.text}</p>
            <ul className="mt-6 space-y-3">
              {included.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-xs ${p.main ? "bg-white/20" : "bg-emerald-100 text-emerald-700"}`}>✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <a
              href="https://codecanyon.net/item/lumise-product-designer-woocommerce-wordpress/21222684"
              target="_blank"
              rel="noopener"
              className={`mt-8 block rounded-full py-4 text-center font-bold transition hover:scale-[1.02] active:scale-95 ${
                p.main ? "bg-white text-[var(--md-primary)]" : "border-2 border-[var(--md-primary)] text-[var(--md-primary)] hover:bg-[var(--md-primary-container)]"
              }`}
            >
              خرید از CodeCanyon
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Faq
 * سوالات متداول با <details> بومی (بدون JS، دسترس‌پذیر)
 * ===================================================================== */
function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 px-5 py-24">
      <SectionHeader eyebrow="سوالات متداول" title="قبل از خرید بدانید" />
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ.map((f) => (
          <details
            key={f.q}
            className="reveal group rounded-[24px] bg-[var(--md-surface-2)] p-5 transition open:bg-[var(--md-primary-container)] [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#16072f]">
              {f.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lg transition duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 leading-8 text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: FinalCta
 * فراخوان پایانی با تصویر پیش‌نمایش CodeCanyon
 * ===================================================================== */
function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="reveal relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#16072f] via-[#2a0d5e] to-[#5b1a7a] p-8 text-white md:grid-cols-2 md:p-14">
        <div aria-hidden className="blob absolute -end-20 -top-20 h-72 w-72 bg-pink-500/30 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">امتحانش کنید؛ عاشقش می‌شوید.</h2>
          <p className="mt-4 leading-8 text-white/75">
            فروشگاه ووکامرسی خود را به یک چاپخانه آنلاین تمام‌عیار تبدیل کنید. دمو زنده را ببینید و با خیال راحت تصمیم بگیرید.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-full bg-white px-7 py-4 font-bold text-[#16072f] transition hover:scale-105">
              خرید Lumise
            </a>
            <a href="https://demo.lumise.com" target="_blank" rel="noopener" className="rounded-full border border-white/30 px-7 py-4 transition hover:bg-white/10">
              دمو زنده
            </a>
          </div>
        </div>
        <div className="float relative mx-auto max-w-sm overflow-hidden rounded-[28px] shadow-2xl">
          <Image src={IMG.preview} alt="پیش‌نمایش Lumise" width={590} height={300} loading="lazy" sizes="380px" className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * کامپوننت: Footer
 * ===================================================================== */
function Footer() {
  return (
    <footer className="bg-[#0f0420] px-5 py-12 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Image src={IMG.logo} alt="Lumise" width={110} height={28} className="h-7 w-auto" loading="lazy" />
        <nav className="flex flex-wrap justify-center gap-5">
          <a className="hover:text-white" href="https://docs.lumise.com" target="_blank" rel="noopener">مستندات</a>
          <a className="hover:text-white" href="https://demo.lumise.com" target="_blank" rel="noopener">دمو</a>
          <a className="hover:text-white" href="https://lumise.com/changelog/" target="_blank" rel="noopener">تغییرات نسخه‌ها</a>
          <a className="hover:text-white" href="https://lumise.com/contact/" target="_blank" rel="noopener">تماس</a>
        </nav>
        <p>Lumise محصول King-Theme است.</p>
      </div>
    </footer>
  );
}

/* =====================================================================
 * صفحه اصلی
 * ===================================================================== */
export default function Page() {
  return (
    <div dir="rtl" lang="fa" className={`${vazir.className} bg-[var(--md-surface)] text-slate-900 antialiased [scroll-behavior:smooth]`}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <TopAppBar />
      <main>
        <Hero />
        <TrustStats />
        <BrandMarquee />
        <Benefits />
        <FeaturesGrid />
        <Gallery />
        <Packages />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}