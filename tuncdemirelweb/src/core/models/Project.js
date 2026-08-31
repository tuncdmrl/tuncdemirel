import { BaseModel } from './BaseModel.js'

const STATUS_LABELS = {
  tr: {
    live: 'YAYINDA',
    building: 'GELİŞTİRİLİYOR',
    internal: 'KURUM İÇİ',
    archived: 'ARŞİV',
  },
  en: {
    live: 'SHIPPED',
    building: 'IN PROGRESS',
    internal: 'INTERNAL',
    archived: 'ARCHIVED',
  },
}

/** Bir proje / ürün kaydı. */
export class Project extends BaseModel {
  constructor(data, { locale = 'tr' } = {}) {
    super(data)
    this.locale = STATUS_LABELS[locale] ? locale : 'tr'
    this.name = data.name
    this.tagline = data.tagline ?? ''
    this.description = data.description ?? ''
    this.role = data.role ?? ''
    this.year = data.year ?? ''
    this.url = data.url ?? null
    this.repoUrl = data.repoUrl ?? null
    this.stack = data.stack ?? []
    this.highlights = data.highlights ?? []
    this.status = data.status ?? 'live'
  }

  get statusLabel() {
    return STATUS_LABELS[this.locale][this.status] ?? this.status.toUpperCase()
  }

  get hasLink() {
    return Boolean(this.url)
  }
}
