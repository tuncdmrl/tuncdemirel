import portrait from '../../assets/tunc-demirel.jpg'

/** Kişisel künye. Sitedeki her isim, unvan ve iletişim bilgisi buradan okunur. */
export const profileRecord = {
  id: 'mustafa-tunc-demirel',
  name: 'Mustafa Tunç Demirel',
  callSign: 'MTD',
  title: 'Bilgisayar Mühendisi',
  headline: 'Yazılım Uzman Yardımcısı · Biofarma İlaç',
  location: 'Şişli, İstanbul',
  languages: 'Türkçe · İngilizce (ileri)',
  email: 'mtuncdemirel@gmail.com',
  portrait,
  portraitAlt: 'Mustafa Tunç Demirel portresi',
  intro:
    'Fikirden ürüne, uçtan uca yazılım çözümleri geliştiriyorum. Güçlü arka uç mimarilerinden akıcı mobil deneyimlere kadar sistemin her aşamasında rol alıyor, yapay zeka odaklı yeni teknolojilerle projelere değer katıyorum. Ve en önemlisi, hızla değişen bu dünyada her zaman yeni bir şeyler öğrenmeye devam ediyorum.',
  summary: [
    'Bilgisayar mühendisiyim. Arayüzden sunucuya kadar işin her katmanında çalışmaktan keyif alıyorum; kullanıcının dokunduğu ekranı geliştirmekle o ekranı besleyen mimariyi kurmak benim için aynı bütünün parçaları.',
    'Bugün Biofarma İlaç’ın yazılım ekibinde, şirket içindeki ekiplerin günlük operasyonlarını kolaylaştıran uygulamalar geliştiriyorum. Bunun dışında yapay zeka ekosistemindeki gelişmeleri yakından takip ediyor ve öğrendiklerimi yeni projelerimde aktif olarak deniyorum.',
  ],
  focus: [
    'Full-stack geliştirme',
    'Temiz mimari ve sürdürülebilir kod',
    'Yapay zeka destekli araçlar',
  ],
  links: [
    {
      id: 'email',
      label: 'E-posta',
      value: 'mtuncdemirel@gmail.com',
      href: 'mailto:mtuncdemirel@gmail.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'mustafa-tunç-demirel',
      href: 'https://www.linkedin.com/in/mustafa-tun%C3%A7-demirel-232468176/',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/tuncdmrl',
      href: 'https://github.com/tuncdmrl',
    },
    {
      id: 'medium',
      label: 'Medium',
      value: 'medium.com/@mtuncdemirel',
      href: 'https://medium.com/@mtuncdemirel',
    },
  ],
}
