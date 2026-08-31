import { DateRange } from '../models/DateRange.js'
import { Experience } from '../models/Experience.js'
import { InMemoryRepository } from './InMemoryRepository.js'

export class ExperienceRepository extends InMemoryRepository {
  constructor(records, options) {
    super(records, Experience, options)
  }

  /** Yeniden eskiye görev kayıtları. */
  getTimeline() {
    return this.sort((a, b) => DateRange.compareDesc(a.period, b.period))
  }

  getCurrent() {
    return this.filter((item) => item.isCurrent)
  }

  /** Ana görev: en son başlayan aktif kayıt. */
  getPrimary() {
    return this.getCurrent().sort((a, b) => DateRange.compareDesc(a.period, b.period))[0] ?? null
  }

  /** İlk kaydın başlangıç yılı — "ne zamandır sahada" bilgisi için. */
  getFirstYear() {
    const earliest = this.sort((a, b) => a.period.start - b.period.start)[0]
    return earliest ? earliest.period.start.getFullYear() : null
  }
}
