import { BaseModel } from './BaseModel.js'
import { DateRange } from './DateRange.js'

const STATUS_LABELS = {
  tr: { active: 'AKTİF', complete: 'TAMAMLANDI' },
  en: { active: 'ACTIVE', complete: 'COMPLETED' },
}

/** Bir iş / staj kaydı. */
export class Experience extends BaseModel {
  constructor(data, { locale = 'tr' } = {}) {
    super(data)
    this.locale = STATUS_LABELS[locale] ? locale : 'tr'
    this.role = data.role
    this.company = data.company
    this.employment = data.employment ?? null
    this.location = data.location ?? ''
    this.period = new DateRange(data.period, this.locale)
    this.summary = data.summary ?? ''
    this.highlights = data.highlights ?? []
    this.stack = data.stack ?? []
  }

  get isCurrent() {
    return this.period.isOngoing
  }

  get status() {
    return this.isCurrent ? 'active' : 'complete'
  }

  get statusLabel() {
    return STATUS_LABELS[this.locale][this.status]
  }
}
