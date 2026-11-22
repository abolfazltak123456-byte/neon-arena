# ساخت APK اندروید «آرنای نئون» — راهنمای قدم‌به‌قدم

این پروژه با Capacitor بازی آنلاین را داخل یک اپ اندرویدی واقعی می‌گذارد.
فقط **یک‌بار** مراحل ۱ تا ۳ را انجام بده؛ بعدش هر بار با مرحله ۶ خروجی می‌گیری.

## ۱. نصب ابزارها (فقط یک‌بار)
- **Node.js LTS** از nodejs.org نصب کن (موقع نصب همه گزینه‌ها Next).
- **Android Studio** از developer.android.com/studio نصب کن (حجم دانلود حدود ۱ گیگ).
  موقع نصب، SDK و Android SDK Platform-Tools را هم نصب کن (خودش پیشنهاد می‌دهد).

## ۲. نصب پکیج‌ها (فقط یک‌بار)
ترمینال/CMD را داخل همین پوشه باز کن و بزن:
```
npm install
npx cap add android
```
بعد محتویات پوشه `res` را کپی کن داخل `android/app/src/main/res/`
(تا آیکون بازی روی آیکون اپ بیاید).

## ۳. سینک (فقط یک‌بار، و بعد از هر تغییر آدرس بازی)
```
npx cap sync android
```

## ۴. گرفتن APK آزمایشی (نصب مستقیم روی گوشی)
پوشه `android` را با Android Studio باز کن (Open → انتخاب پوشه android)،
صبر کن Gradle سینک شود، بعد منوی:
```
Build → Build APK(s)
```
فایل خروجی: `android/app/build/outputs/apk/debug/app-debug.apk`
آن را با کابل/USB یا تلگرام به گوشی بفرست و نصب کن.
(موقع نصب «Unknown sources / نصب از منبع ناشناس» را اجازه بده.)

## ۵. نسخه انتشار (برای کافه‌بازار/مایکت)
- ساخت کلید امضا (فقط یک‌بار):
```
keytool -genkey -v -keystore arenaneon.keystore -alias arenaneon -keyalg RSA -keysize 2048 -validity 10000
```
- در Android Studio: `Build → Generate Signed Bundle / APK` و فایل keystore بالا را بده.
- برای انتشار عمومی در کافه‌بازار/مایکت/گوگل‌پلی به اکانت دولوپر آن مارکت نیاز داری.

## ۶. نکته‌ها
- اگر اسم جنریتور را در Perchance عوض کردی: خط `GAME_URL` در `capacitor.config.ts` را عوض کن و دوباره `npx cap sync android` بزن.
- شناسه اپ `com.arenaneon.game` است؛ اگر خواستی عوضش کنی بعد از `cap add` در فایل `android/app/build.gradle` مقدار `applicationId` را عوض کن.
- این نسخه **آنلاین** است: برای اجرا اینترنت لازم دارد.
