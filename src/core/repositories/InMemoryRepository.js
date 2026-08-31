import { Repository } from './Repository.js'

/**
 * Ham kayıtları verilen model sınıfıyla nesneye çeviren bellek içi depo.
 * Alt sınıflar yalnızca alana özgü sorguları yazar.
 */
export class InMemoryRepository extends Repository {
  #items

  constructor(records = [], ModelClass, options = {}) {
    super()
    if (!ModelClass) {
      throw new Error('InMemoryRepository: model sınıfı belirtilmeli.')
    }
    this.#items = ModelClass.fromArray(records, options)
  }

  getAll() {
    return [...this.#items]
  }
}
