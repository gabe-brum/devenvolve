import { Modal } from '@components/modal';
import { Stars } from '@components/stars';
import react, { useState } from 'react'
import { DemandContainer, ModalContent } from './styles';
import { DemandProps } from './types';

export default function DemandItem({ imageBrand, nameBrand, stars, nameDemand, price, stack, description }: DemandProps) {
  let isMobile: boolean;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 768
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <div className='demand-infos'>
            <p>{nameDemand}</p>
            <p>{stack}</p>
            <p>R$<span>{price}</span></p>
          </div>
          <div className='description'>
            <p>Descrição:</p>
            <p>{description}</p>
          </div>
          <div className='buttons'>
            <button className='button register'>Candidatar à demanda</button>
            <button className='button recommendation'>Indicar demanda</button>
          </div>
        </ModalContent>
      </Modal>
    )
  }

  function renderDemands() {
    if (isMobile) {
      return (
        <>
          <div className='image-brand'>
            <div className='image-brand__layer'>
              <p>{nameBrand}</p>
              <span><Stars stars={stars} /></span>
           </div>
          </div>
          <div className='demand-content'>
            <div className='demand-content__title-and-stack'>
              <p className='title'>{nameDemand}</p>
              <p className='stack'>{stack}</p>
            </div>
            <div className='demand-content__price-and-button'>
              <p className='price'>R$<span>{price}</span></p>
              <button className='button' onClick={() => setIsModalOpen(true)}>Ver mais</button>
            </div>
          </div>
        </>
      )
    }

    return (
      <>
        <div className='demand-brand'>
          <div className='image-brand'></div>
          <div className='demand-brand__content'>
            <p className='demand-brand__content--name'>{nameBrand}</p>
            <p className='demand-brand__content--stars'><Stars stars={stars} /></p>
          </div>
        </div>
        <div className='demand-content'>
          <div className='demand-content__title-and-stack'>
              <p className='title'>{nameDemand}</p>
              <p className='stack'>{stack}</p>
            </div>
          <div className='demand-content__price-and-button'>
            <p className='price'>R$<span>{price}</span></p>
            <button className='button' onClick={() => setIsModalOpen(true)}>Ver mais</button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <DemandContainer imageBrand={imageBrand}>
        {renderDemands()}
      </DemandContainer>
      {renderModal()}
    </>
  )
}