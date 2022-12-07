export interface FreelancerItemProps {
  image: string
  name: string
  stars: number
  description: string
  skills: Array<SkillsProps>
}

export type SkillsProps = {
  name: string
  id: number
}