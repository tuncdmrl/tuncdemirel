import { BaseModel } from './BaseModel.js'

/** Yetenekleri konuya göre gruplayan kayıt. */
export class SkillGroup extends BaseModel {
  constructor(data) {
    super(data)
    this.title = data.title
    this.items = data.items ?? []
  }
}
