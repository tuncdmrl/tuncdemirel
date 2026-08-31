/**
 * Depo sözleşmesi. İçerik bugün JS dosyalarından geliyor; yarın bir API'den
 * ya da CMS'ten gelirse yalnızca bu sözleşmeyi uygulayan yeni bir sınıf yazmak
 * yeterli olacak — arayüz katmanı değişmez.
 */
export class Repository {
  constructor() {
    if (new.target === Repository) {
      throw new TypeError('Repository soyut bir sınıftır, doğrudan örneklenemez.')
    }
  }

  getAll() {
    throw new Error(`${this.constructor.name}.getAll() uygulanmadı.`)
  }

  getById(id) {
    return this.getAll().find((item) => item.id === id) ?? null
  }

  filter(predicate) {
    return this.getAll().filter(predicate)
  }

  sort(comparator) {
    return this.getAll().sort(comparator)
  }

  get size() {
    return this.getAll().length
  }

  get isEmpty() {
    return this.size === 0
  }
}
