export interface FreelancerItemProps {
  id: number
  image: string
  name: string
  stars: number
  description: string
  skills: Array<SkillsProps>
}

export type SkillsProps = {
  descricao: string
  idSkill: number
}