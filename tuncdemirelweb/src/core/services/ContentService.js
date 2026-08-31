import { contentSources } from '../../content/index.js'
import { DEFAULT_LOCALE } from '../../i18n/locales.js'
import { Profile } from '../models/Profile.js'
import {
  EducationRepository,
  ExperienceRepository,
  ProjectRepository,
  SkillRepository,
} from '../repositories/index.js'

/**
 * Arayüzün içerikle konuştuğu tek kapı.
 *
 * Her dil için ayrı bir servis örneği kurulur; modeller o dile göre
 * biçimlendirilmiş hâlde gelir. Bileşenler depoların nasıl doldurulduğunu
 * bilmez, yalnızca bu servisi kullanır. Kaynak değişirse (API, CMS, markdown)
 * sadece burası ve ilgili depo güncellenir.
 */
export class ContentService {
  static #instances = new Map()

  constructor(sources, locale = DEFAULT_LOCALE) {
    this.locale = locale
    this.profile = new Profile(sources.profile)
    this.experiences = new ExperienceRepository(sources.experiences, { locale })
    this.education = new EducationRepository(sources.education, { locale })
    this.projects = new ProjectRepository(sources.projects, { locale })
    this.skills = new SkillRepository(sources.skills, { locale })
  }

  /** Dile göre paylaşılan örnek; aynı dil için tekrar kurulmaz. */
  static forLocale(locale = DEFAULT_LOCALE) {
    const key = contentSources[locale] ? locale : DEFAULT_LOCALE
    if (!ContentService.#instances.has(key)) {
      ContentService.#instances.set(key, new ContentService(contentSources[key], key))
    }
    return ContentService.#instances.get(key)
  }

  /** Test ya da önizleme için farklı kaynaklarla servis üretir. */
  static withSources(overrides = {}, locale = DEFAULT_LOCALE) {
    return new ContentService({ ...contentSources[locale], ...overrides }, locale)
  }

  /** Kahraman bölümündeki durum satırı için özet telemetri. */
  getTelemetry() {
    const current = this.experiences.getPrimary()
    return {
      mission: current ? current.company : '—',
      role: current ? current.role : '—',
      duration: current ? current.period.lengthLabel : '—',
      location: this.profile.location,
      since: this.experiences.getFirstYear(),
      isActive: Boolean(current),
    }
  }
}
