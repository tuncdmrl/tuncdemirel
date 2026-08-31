/**
 * Görev kayıtları. Yeni bir iş eklemek için listeye kayıt girmek yeterli;
 * sıralama ve süre hesabı model katmanında yapılır.
 */
export const experienceRecords = [
  {
    id: 'biofarma-uzman-yardimcisi',
    role: 'Yazılım Uzman Yardımcısı',
    company: 'Biofarma İlaç',
    employment: 'Tam zamanlı',
    location: 'İstanbul',
    period: { start: '2026-07' },
    summary:
      'Staj dönemimin ardından aynı ekipte tam zamanlı göreve başladım. Şirket içi uygulamaların geliştirilmesinde çalışıyor, farklı departmanların dijital dönüşüm ihtiyaçlarına çözüm üretiyorum.',
    highlights: [
      'Kurum içi uygulamaların yeni ekranlarını ve kullanıcı akışlarını geliştiriyorum.',
      'Servisleri uygulamaya bağlıyor, API isteklerini ve hata durumlarını yönetiyorum.',
      'Sürüm yönetimini Azure DevOps üzerinden yürütüyorum: dal açma, pull request ve kod incelemesi.',
      'Departmanlardan gelen talepleri, geliştirilebilir yazılım gereksinimlerine çeviriyorum.',
    ],
    stack: ['REST API', 'Azure DevOps', 'Git'],
  },
  {
    id: 'biofarma-stajyer',
    role: 'Yazılım Geliştirici — Uzun Dönem Stajyer',
    company: 'Biofarma İlaç',
    employment: 'Uzun dönem staj',
    location: 'İstanbul',
    period: { start: '2026-02', end: '2026-06' },
    summary:
      'Yazılım departmanında uzun dönem stajyer olarak ekibe katıldım; staj süreci tam zamanlı göreve dönüştü.',
    highlights: [
      'Kurum içi uygulama geliştirme sürecine aktif katkı verdim.',
      'Servis entegrasyonlarını yazdım, uygulama içindeki API isteklerini yönettim.',
      'Azure DevOps üzerinde sürüm kontrolü akışını öğrenip günlük işe taşıdım.',
      'Günlük stand-up toplantılarına katılıp farklı birimlerden ekiplerle birlikte çalıştım.',
    ],
    stack: ['REST API', 'Azure DevOps'],
  },
  {
    id: 'mellon-ios',
    role: 'iOS Geliştirici Stajyeri',
    company: 'Mellon',
    employment: 'Staj',
    location: 'İstanbul',
    period: { start: '2025-07', end: '2025-12' },
    summary:
      'İndirme listelerinde üst sıralarda yer alan mobil uygulamaların geliştirme sürecinde çalıştım; mimari kararların koda nasıl yansıdığını burada gördüm.',
    highlights: [
      'Listelerde üst sıralara çıkan, yayındaki iOS uygulamalarında aktif görev aldım.',
      'Çeşitli ekranların tasarımını ve iş mantığını uçtan uca geliştirdim.',
      'MVVM mimarisiyle uygulamalı deneyim kazandım; sorumlulukların ayrılmasının kodu nasıl büyüttüğünü öğrendim.',
      'Projeyi modüllere bölerek yeniden kullanılabilirlik, test edilebilirlik ve bakım kolaylığı kazandırmayı öğrendim.',
      'VIPER mimarisinin temellerini ve temiz uygulama tasarımındaki yerini kavradım.',
    ],
    stack: ['Swift', 'UIKit', 'MVVM', 'VIPER'],
  },
  {
    id: 'asyalogic-veri',
    role: 'Veri Giriş Sorumlusu',
    company: 'AsyaLogic — Veri Yönetimi',
    location: 'İstanbul',
    period: { start: '2022', end: '2026-06' },
    summary:
      'Veri yönetimi departmanında kayıtların doğruluğundan ve raporlanmasından sorumluydum.',
    highlights: [
      'Sisteme eksiksiz ve doğru veri girişini sağladım.',
      'Veri doğruluğunu kontrol edip gerekli güncellemeleri yaptım.',
      'Veri giriş süreçlerini sadeleştirmek için ekiplerle birlikte çalıştım.',
      'Gelen veri taleplerini karşılayıp rapor ve analiz hazırladım.',
    ],
    stack: ['Veri doğrulama', 'Raporlama'],
  },
]
