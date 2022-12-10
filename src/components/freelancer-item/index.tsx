import { Modal } from '@components/modal';
import { Stars } from '@components/stars';
import react, { useState } from 'react'
import { FreelancerContainer, ModalContent } from './styles';
import { FreelancerItemProps, SkillsProps } from './types';

export default function FreelancerItem({ image, name, stars, description, skills }: FreelancerItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              <div className='skills'>{renderSkills(skills)}</div>
              </div>
          </div>
        </ModalContent>
      </Modal>
    )
  }

  function renderSkills(skills: Array<SkillsProps>) {
    if (!skills) return 'Nenhuma skill atribuída'

    return skills?.map(skill => {
      return (
        <span key={skill.id}>{skill.name}</span>
      )
    })
  }

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