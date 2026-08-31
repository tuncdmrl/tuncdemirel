/**
 * Tema ve dil, React yüklenmeden önce uygulanır: açılışta ekran ters renkte
 * yanıp sönmesin. Ayrı dosyada durmasının sebebi, güvenlik başlıklarındaki
 * içerik politikasının satır içi betiğe izin vermemesi.
 */
;(function () {
  try {
    var lang = window.localStorage.getItem('tunc-dil')
    if (lang !== 'tr' && lang !== 'en') {
      lang = (window.navigator.language || 'tr').slice(0, 2) === 'en' ? 'en' : 'tr'
    }
    document.documentElement.lang = lang
  } catch {
    document.documentElement.lang = 'tr'
  }

  try {
    var theme = window.localStorage.getItem('tunc-tema')
    document.documentElement.dataset.theme =
      theme === 'light' || theme === 'dark'
        ? theme
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
  } catch {
    document.documentElement.dataset.theme = 'dark'
  }
})()
