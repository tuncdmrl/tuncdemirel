# Mustafa Tunç Demirel — kişisel site

React + Vite ile yazılmış kişisel tanıtım sitesi. Tasarım yönü bir uzay istasyonu
konsolu: koyu gövde renkleri, gösterge amberi ve yalnızca aktif durumlar için
ayrılmış yeşil.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # dist/ klasörüne üretim derlemesi
npm run preview  # derlemeyi yerelde önizleme
npm run lint     # ESLint
```

## Mimari

İçerik ile arayüz birbirinden ayrıldı. Bileşenler veriyi doğrudan okumaz; her şey
`ContentService` üzerinden gelir.

```
src/
├─ content/        Ham veri; dile göre tr/ ve en/ paketleri.
├─ i18n/           Diller, arayüz metinleri ve dil sağlayıcısı
├─ core/
│  ├─ models/      Alan nesneleri (Experience, Project, DateRange...)
│  ├─ repositories/ Depo sözleşmesi + bellek içi uygulamalar
│  └─ services/    ContentService — arayüzün içerikle konuştuğu tek kapı
├─ app/            Rota tablosu, sayfa iskeleti, içerik bağlamı
├─ pages/          Sayfa bileşenleri
├─ components/
│  ├─ layout/      Navbar, Footer, Section, arka plan, seyir rayı
│  ├─ ui/          Panel, SectionHeader, StatusLed, Tag, Porthole, ActionLink
│  └─ sections/    Ana sayfa bölümleri
├─ hooks/          useContent, useScrollSpy, useReveal, useDocumentTitle...
└─ styles/         tokens.css (tasarım değişkenleri) + base.css
```

Bileşen stilleri CSS Modules ile yanına yazıldı; global stil yalnızca token ve
temel kurallardan ibaret. Böylece bir bölümün stili başka bir bölümü bozmaz.

### Neden bu katmanlar?

- **Model**: Tarih aralığı, süre etiketi, "aktif mi" gibi kurallar tek yerde.
  `DateRange` sayesinde "1 yıl 4 ay" gibi ifadeler elle yazılmaz, hesaplanır.
- **Depo**: `Repository` soyut sınıfı sözleşmeyi tanımlar. İçerik yarın bir
  API'den ya da CMS'ten gelirse yalnızca yeni bir depo sınıfı yazılır; sayfalar
  aynı kalır.
- **Servis**: `ContentService` tüm depoları toplar. Bileşenler `useContent()` ile
  buna erişir.

## İçerik nasıl güncellenir?

Hiçbir bileşene dokunmadan, yalnızca `src/content/tr/` ve `src/content/en/`
altındaki dosyalar. **İki dilde de aynı dosyayı güncelle**; kayıt kimlikleri
(`id`) iki pakette aynı kalmalı.

| Ne ekleyeceksin | Dosya |
| --- | --- |
| Yeni iş / staj | `experiences.js` |
| Yeni proje | `projects.js` |
| Yeni okul | `education.js` |
| Teknoloji / ilgi alanı | `skills.js` |
| İsim, iletişim, özet | `profile.js` |
| Bölüm sırası | `navigation.js` |
| Arayüz metinleri (başlık, düğme) | `src/i18n/ui/tr.js` ve `en.js` |

Tarih biçimi `"YYYY-MM"` ya da `"YYYY"`. `end` alanı yazılmazsa kayıt "Halen" /
"Present" olarak görünür ve yeşil durum lambası yanar.

## Dil (TR / EN)

Sağ üstteki **TR / EN** anahtarı dili değiştirir; tercih `localStorage` içinde
saklanır, seçim yoksa tarayıcı dili kullanılır.

- Metinler iki yerde: **içerik** `src/content/<dil>/`, **arayüz sözcükleri**
  `src/i18n/ui/<dil>.js`.
- `ContentService.forLocale('en')` o dile ait modelleri kurar; tarih ve süre
  etiketleri ("1 yıl 4 ay" / "1 yr 4 mo") model katmanında dile göre üretilir.
- Yeni bir dil eklemek: `src/content/` altına yeni paket, `src/i18n/ui/` altına
  metin dosyası, `locales.js` içindeki listeye kod eklemek.

### Yeni bir içerik türü eklemek (örneğin blog)

Üç adım, hepsi mevcut kalıbı izler:

1. `src/core/models/` içine modeli yaz (`BaseModel`'den türet).
2. `src/core/repositories/` içine deposunu ekle (`InMemoryRepository`'den türet),
   `ContentService` içinde bağla.
3. `src/content/` altına veri dosyasını koy, bölümü ya da sayfayı yaz.

## Yayına alma (Vercel)

1. Projeyi bir Git deposuna gönder.
2. Vercel'de "New Project" → depoyu seç.
3. Framework: **Vite**. Build komutu `npm run build`, çıktı klasörü `dist`.

`vercel.json` içindeki rewrite kuralı, alt adreslerin doğrudan açıldığında da
çalışmasını sağlar.

## Tema

Site hem koyu hem açık temayı destekler. Sağ üstteki **Gün / Gece** anahtarı temayı
değiştirir; tercih `localStorage` içinde saklanır. Kullanıcı hiç seçim yapmadıysa
işletim sisteminin tercihi geçerlidir.

- Renkler `src/styles/tokens.css` içinde iki blokta tanımlı: `:root` (koyu) ve
  `:root[data-theme='light']` (açık). Yeni bir renk gerektiğinde ikisine de eklenir.
- Bileşen stillerinde sabit renk kodu kullanılmaz, hep değişken çağrılır.
- `index.html` içindeki kısa betik temayı React yüklenmeden uygular; açılışta
  ekranın bir an ters renkte yanıp sönmesini engeller.

## Erişilebilirlik notları

- Tüm etkileşimli öğelerde görünür klavye odağı var.
- `prefers-reduced-motion` açıksa animasyonlar ve dönen halka durur.
- Renk kontrastları koyu zeminde okunacak şekilde seçildi.
