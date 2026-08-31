import { educationRecords as enEducation } from './en/education.js'
import { experienceRecords as enExperiences } from './en/experiences.js'
import { profileRecord as enProfile } from './en/profile.js'
import { projectRecords as enProjects } from './en/projects.js'
import { skillRecords as enSkills } from './en/skills.js'
import { educationRecords as trEducation } from './tr/education.js'
import { experienceRecords as trExperiences } from './tr/experiences.js'
import { profileRecord as trProfile } from './tr/profile.js'
import { projectRecords as trProjects } from './tr/projects.js'
import { skillRecords as trSkills } from './tr/skills.js'

/**
 * Dile göre içerik paketleri. Kayıt kimlikleri (`id`) iki dilde de aynı;
 * yalnızca metinler değişir. Yeni bir dil eklemek, aynı şekilde bir paket
 * daha yazmaktan ibaret.
 */
export const contentSources = {
  tr: {
    profile: trProfile,
    experiences: trExperiences,
    education: trEducation,
    projects: trProjects,
    skills: trSkills,
  },
  en: {
    profile: enProfile,
    experiences: enExperiences,
    education: enEducation,
    projects: enProjects,
    skills: enSkills,
  },
}
