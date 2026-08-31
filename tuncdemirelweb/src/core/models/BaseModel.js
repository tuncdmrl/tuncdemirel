/**
 * Tüm içerik modellerinin ortak atası.
 *
 * Amaç: her modelin kimliği (`id`) olsun, ham veriden nesneye dönüşüm tek
 * yerden yapılsın ve modeller ileride (blog, sertifika, konuşma kaydı vb.)
 * çoğaldığında aynı sözleşmeyi paylaşsın.
 */
export class BaseModel {
  #id

  constructor(data = {}) {
    if (new.target === BaseModel) {
      throw new TypeError('BaseModel soyut bir sınıftır, doğrudan örneklenemez.')
    }
    if (!data.id) {
      throw new Error(`${new.target.name}: "id" alanı zorunludur.`)
    }
    this.#id = data.id
  }

  get id() {
    return this.#id
  }

  /**
   * Ham kayıt dizisini model dizisine çevirir. Alt sınıflar miras alır.
   * `options` ile dil gibi bağlam bilgisi modellere aktarılır.
   */
  static fromArray(records = [], options = {}) {
    return records.map((record) => new this(record, options))
  }

  toJSON() {
    return { id: this.id, ...this }
  }
}
