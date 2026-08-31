import { SkillGroup } from '../models/SkillGroup.js'
import { InMemoryRepository } from './InMemoryRepository.js'

export class SkillRepository extends InMemoryRepository {
  constructor(records, options) {
    super(records, SkillGroup, options)
  }

  getGroups() {
    return this.getAll()
  }

  /** Tüm gruplardaki yetenekleri tek listede toplar. */
  getFlatList() {
    return this.getAll().flatMap((group) => group.items)
  }
}
