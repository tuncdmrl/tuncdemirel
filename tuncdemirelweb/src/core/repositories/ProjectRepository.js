import { Project } from '../models/Project.js'
import { InMemoryRepository } from './InMemoryRepository.js'

export class ProjectRepository extends InMemoryRepository {
  constructor(records, options) {
    super(records, Project, options)
  }

  getFeatured() {
    return this.filter((project) => project.status !== 'archived')
  }

  getByStack(technology) {
    return this.filter((project) => project.stack.includes(technology))
  }
}
