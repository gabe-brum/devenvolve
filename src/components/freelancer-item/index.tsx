import { Modal } from '@components/modal';
import { Stars } from '@components/stars';
import react, { useEffect, useState } from 'react'
import api from 'src/services/api';
import { FreelancerContainer, ModalContent } from './styles';
import { FreelancerItemProps, SkillsProps } from './types';

export default function FreelancerItem({ id, image, name, stars, description }: FreelancerItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [skillsFreela, setSkillsFreela] = useState([])

  let isMobile: boolean;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 768
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function renderModal() {
    if (!isModalOpen) return null

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
      >
        <ModalContent>
          <p className='name'>{name}</p>
          <div className='wrapper-content'>
            <p className='wrapper-content--description'>{renderDescription(description)}</p>
            <div className='wrapper-content--skills'>
              <p>Suas skills:</p>
              <div className='skills'>{renderSkills(skillsFreela)}</div>
              </div>
          </div>
        </ModalContent>
      </Modal>
    )
  }

  function renderSkills(skills: Array<SkillsProps>) {
    if (!skills.length) return 'Nenhuma skill atribuída'

    return skills?.map(skill => {
      return (
        <span key={skill.idSkill}>{skill.descricao}</span>
      )
    })
  }

  useEffect(() => {
    async function getSkills() {
      try {
        const response = await api.get('/api/Freelancer/SkillsFreelancers')
        setSkillsFreela(response.data)
      } catch (error) {
        console.log(`Não foi possível pegar as skills do usuário devido ao erro [${error}]`)
      }
    }

    getSkills()
  }, [])
 

  function renderDescription(description: string) {
    if (!description) return 'Sem descrição...'

    return description
  }

  function renderDescriptionDefault(description: string) {
    if (!description) return 'Sem descrição...'

    return description?.substring(0, 30) + '...'
  }

  function renderFreelancers() {
    if (isMobile) {
      return (
        <>
          <div className='image'>
            <div className='image__layer'>
              <p>{name}</p>
              <span><Stars stars={stars} /></span>
           </div>
          </div>
          <div className='freelancer-content'>
            <p className='freelancer-content--description'>
              {renderDescriptionDefault(description)}
            </p>
            <button onClick={() => setIsModalOpen(true)} className='freelancer-content--see-more'>Ver mais</button>
          </div>
        </>
      )
    }

    return (
      <>
        <div className='freelancer'>
          <div className='image'></div>
          <div className='freelancer__content'>
            <p className='freelancer__content--name'>{name}</p>
            <p className='freelancer__content--stars'><Stars stars={stars} /></p>
          </div>
        </div>
        <div className='freelancer-content'>
          <p className='freelancer-content--description'>
            {renderDescriptionDefault(description)}
          </p>
          <button onClick={() => setIsModalOpen(true)} className='freelancer-content--see-more'>Ver mais</button>
        </div>
      </>
    )
  }

  return (
    <>
    <FreelancerContainer image={image}>
      {renderFreelancers()}
    </FreelancerContainer>
    {renderModal()}
    </>
  )
}