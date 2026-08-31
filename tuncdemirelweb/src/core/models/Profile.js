import { BaseModel } from './BaseModel.js'

/** Kişisel künye: sitenin her yerinde tek kaynaktan okunur. */
export class Profile extends BaseModel {
  constructor(data) {
    super(data)
    this.name = data.name
    this.callSign = data.callSign
    this.title = data.title
    this.headline = data.headline
    this.location = data.location
    this.languages = data.languages ?? ''
    this.email = data.email
    this.intro = data.intro ?? ''
    this.summary = data.summary ?? []
    this.focus = data.focus ?? []
    this.links = data.links ?? []
    this.portrait = data.portrait ?? null
    this.portraitAlt = data.portraitAlt ?? data.name
  }

  get initials() {
    return this.name
      .split(' ')
      .map((part) => part[0])
      .join('')
  }

  get mailto() {
    return `mailto:${this.email}`
  }

  linkBy(id) {
    return this.links.find((link) => link.id === id) ?? null
  }
}
