import { DateRange } from '../models/DateRange.js'
import { Education } from '../models/Education.js'
import { InMemoryRepository } from './InMemoryRepository.js'

export class EducationRepository extends InMemoryRepository {
  constructor(records, options) {
    super(records, Education, options)
  }

  getTimeline() {
    return this.sort((a, b) => DateRange.compareDesc(a.period, b.period))
  }

  getLatest() {
    return this.getTimeline()[0] ?? null
  }
}
