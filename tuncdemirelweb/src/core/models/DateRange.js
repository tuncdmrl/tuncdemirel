const MONTHS = {
  tr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

const PRESENT = { tr: 'Halen', en: 'Present' }

const UNITS = {
  tr: { year: 'yıl', month: 'ay' },
  en: { year: 'yr', month: 'mo' },
}

/**
 * "YYYY-MM" ya da "YYYY" biçimindeki bir aralığı temsil eden değer nesnesi.
 * Süre hesabı ve etiket biçimlendirmesi tek yerde toplansın diye ayrıldı;
 * dil, nesne kurulurken verilir.
 */
export class DateRange {
  #start
  #end
  #startPrecision
  #endPrecision
  #locale

  constructor({ start, end = null }, locale = 'tr') {
    if (!start) throw new Error('DateRange: "start" zorunludur.')
    this.#locale = MONTHS[locale] ? locale : 'tr'
    this.#start = DateRange.#parse(start)
    this.#startPrecision = DateRange.#precisionOf(start)
    this.#end = end ? DateRange.#parse(end) : null
    this.#endPrecision = end ? DateRange.#precisionOf(end) : null
  }

  static #parse(value) {
    const [year, month = '1'] = String(value).split('-')
    return new Date(Number(year), Number(month) - 1, 1)
  }

  static #precisionOf(value) {
    return String(value).includes('-') ? 'month' : 'year'
  }

  get start() {
    return new Date(this.#start)
  }

  get end() {
    return this.#end ? new Date(this.#end) : null
  }

  get isOngoing() {
    return this.#end === null
  }

  /** Aralığın kaç ay sürdüğü (devam ediyorsa bugüne kadar). */
  get lengthInMonths() {
    const finish = this.#end ?? new Date()
    const months =
      (finish.getFullYear() - this.#start.getFullYear()) * 12 +
      (finish.getMonth() - this.#start.getMonth())
    return Math.max(1, months + 1)
  }

  /** "1 yıl 4 ay" / "1 yr 4 mo" biçiminde okunur süre etiketi. */
  get lengthLabel() {
    const units = UNITS[this.#locale]
    const total = this.lengthInMonths
    const years = Math.floor(total / 12)
    const months = total % 12
    if (years && months) return `${years} ${units.year} ${months} ${units.month}`
    if (years) return `${years} ${units.year}`
    return `${months} ${units.month}`
  }

  /** "Şub 2026 — Haz 2026" ya da "2022 — Halen" biçiminde etiket. */
  get label() {
    const startLabel = this.#formatPoint(this.#start, this.#startPrecision)
    const endLabel = this.#end
      ? this.#formatPoint(this.#end, this.#endPrecision)
      : PRESENT[this.#locale]
    return `${startLabel} — ${endLabel}`
  }

  #formatPoint(date, precision) {
    if (precision === 'year') return String(date.getFullYear())
    return `${MONTHS[this.#locale][date.getMonth()]} ${date.getFullYear()}`
  }

  /** Yeniden eskiye sıralamak için karşılaştırıcı. */
  static compareDesc(a, b) {
    return b.start.getTime() - a.start.getTime()
  }

  toJSON() {
    return { start: this.start, end: this.end, label: this.label }
  }
}
