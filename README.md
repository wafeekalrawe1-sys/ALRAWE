# WAFEEQ PPL SYSTEM — v2.0 PREMIUM
## دليل تحويل المشروع إلى APK

---

## 📁 هيكل الملفات

```
wafeeq-pwa/
├── index.html          ← التطبيق الكامل (PWA)
├── manifest.json       ← إعدادات PWA
├── sw.js               ← Service Worker (Offline)
├── capacitor.config.json ← إعدادات Capacitor للـ APK
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md
```

---

## 🚀 الطريقة 1 — تثبيت مباشر كـ PWA (الأسرع)

1. ارفع المجلد كاملاً على GitHub Pages أو Netlify
2. افتح الرابط على Chrome Android
3. ستظهر رسالة "إضافة إلى الشاشة الرئيسية"
4. يعمل بدون إنترنت بعد التثبيت ✓

---

## 🤖 الطريقة 2 — APK حقيقي عبر Capacitor

### المتطلبات:
- Node.js 18+
- Android Studio
- Java JDK 17+

### الخطوات:

```bash
# 1. تثبيت Capacitor
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. تهيئة المشروع
npx cap init "WAFEEQ PPL" "com.wafeeq.ppl" --web-dir="."

# 3. إضافة Android
npx cap add android

# 4. نسخ الملفات
npx cap copy android

# 5. فتح Android Studio
npx cap open android

# 6. Build APK من Android Studio:
#    Build → Build Bundle(s) / APK(s) → Build APK(s)
```

---

## 🌐 الطريقة 3 — APK عبر PWABuilder (أسهل)

1. ارفع الملفات على GitHub Pages
2. اذهب إلى: https://www.pwabuilder.com
3. أدخل رابط موقعك
4. اضغط Package for Store → Android
5. حمّل الـ APK مباشرة ✓

---

## ✨ الميزات المضافة

- ✅ PWA كامل مع Offline Mode
- ✅ Splash Screen احترافية
- ✅ شاشة ترحيب أول مرة
- ✅ نظام XP + مستويات (LVL)
- ✅ 10 إنجازات وشارات
- ✅ صفحة إحصائيات متقدمة
- ✅ مخطط آخر 7 أيام
- ✅ سجل تدريبي يومي
- ✅ صفحة إعدادات كاملة
- ✅ اهتزاز عند إكمال التمرين
- ✅ Toast notifications
- ✅ حفظ تلقائي لكل شيء
- ✅ تنبيه إكمال يوم كامل +100 XP
- ✅ أيقونات بجميع الأحجام
- ✅ capacitor.config.json جاهز

---

## 📦 النشر على Google Play

بعد بناء الـ APK عبر Capacitor:
1. أنشئ حساب Google Play Developer ($25 مرة واحدة)
2. رفع الـ AAB file من Android Studio
3. أكمل بيانات التطبيق
4. انتظر مراجعة Google (3-7 أيام)

---

Built with ❤️ — CYBER NEON 2077
