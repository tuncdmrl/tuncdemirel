import { BaseModel } from './BaseModel.js'
import { DateRange } from './DateRange.js'

const STATUS_LABELS = {
  tr: { ongoing: 'DEVAM EDİYOR', done: 'MEZUN' },
  en: { ongoing: 'IN PROGRESS', done: 'GRADUATED' },
}

/** Bir eğitim kaydı. */
export class Education extends BaseModel {
  constructor(data, { locale = 'tr' } = {}) {
    super(data)
    this.locale = STATUS_LABELS[locale] ? locale : 'tr'
    this.school = data.school
    this.program = data.program
    this.faculty = data.faculty ?? ''
    this.location = data.location ?? ''
    this.period = new DateRange(data.period, this.locale)
    this.note = data.note ?? ''
  }

  get isOngoing() {
    return this.period.isOngoing
  }

  get statusLabel() {
    return STATUS_LABELS[this.locale][this.isOngoing ? 'ongoing' : 'done']
  }
}
