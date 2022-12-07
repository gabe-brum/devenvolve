import CheckboxSkill from "@components/checkbox-skills";
import { ModalContent } from "@components/demand-item/styles";
import { Modal } from "@components/modal";
import { useState } from "react";
import { Container, ContainerButtons, ContainerInfo, DemandModalContent } from "./styles";
import { ApplicationDemandProps } from "./types";

export default function ApplicationDemand({ title, stack, price, numberOfApplication, date, type, description }: ApplicationDemandProps) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  function closeModal() {
    setIsModalOpen(false)
  }

  function cancelApplicationDemand() {

  }

  function deleteDemand() {

  }

  function saveChanges() {

  }

  function renderModal() {
    if (!isModalOpen) return null

    return renderContentModal(type)
  }

  function renderContentModal(type: string) {
    if (type === 'freelancer') {
      return (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => closeModal()}
        >
          <ModalContent>
            <div className='demand-infos'>
              <p>{title}</p>
              <p>{stack}</p>
              <p>R$<span>{price}</span></p>
            </div>
            <div className='description'>
              <p>Descrição:</p>
              <p>{description}</p>
            </div>
            <div className='buttons'>
              <button className='button register' onClick={() => cancelApplicationDemand()}>Cancelar candidatura</button>
            </div>
          </ModalContent>
        </Modal>
      )
    }
    
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
      >
        <DemandModalContent>
          <div className="title-and-value">
            <div className="wrapper-content">
              <label htmlFor="title">Título:</label>
              <input type="text" id="title" name="title" defaultValue={title} className="input"/>
            </div>
            <div className="wrapper-content">
              <label htmlFor="price">Valor da demanda:</label>
              <input type="text" id="price" name="price" defaultValue={`R$${price}`} className="input"/>
            </div>
          </div>
          <div className="wrapper-content">
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" name="description" defaultValue={description} className="input description"/>
          </div>
          <div className="wrapper-content">
            <label htmlFor="title">Stack:</label>
            <div className="wrapper-content--stack">
              <CheckboxSkill id="1" name="Backend" />
              <CheckboxSkill id="2" name="Frontend" />
              <CheckboxSkill id="3" name="Full-stack" />
            </div>
          </div>
          <div className="buttons">
            <button className="button cancel" onClick={() => closeModal()}>Cancelar alterações</button>
            <button className="button save" onClick={() => saveChanges()}>Salvar</button>
          </div>
        </DemandModalContent>
      </Modal>
    )
  }

  function render() {
    if (type === 'freelancer') {
      return (
        <>
          <ContainerInfo>
            <h3>{title}</h3>
            <div className="infos-wrapper">
              <p>{stack}</p>
              <p>R$ <span>{price}</span></p>
            </div>
            <p>Candidatura aplicada em: {date}</p>
          </ContainerInfo>
          <ContainerButtons>
            <button className="button primary" onClick={() => cancelApplicationDemand()}>Cancelar candidatura</button>
            <button className="button secondary" onClick={() => setIsModalOpen(true)}>Ver demanda</button>
          </ContainerButtons>
        </>
      )
    }

    return (
      <>
        <ContainerInfo>
          <h3>{title}</h3>
          <div className="infos-wrapper">
            <p>{stack}</p>
            <p>R$ <span>{price}</span></p>
          </div>
          <p>Candidaturas aplicadas: {numberOfApplication}</p>
        </ContainerInfo>
        <ContainerButtons>
          <button className="button primary" onClick={() => setIsModalOpen(true)}>Editar</button>
          <button className="button secondary" onClick={() => deleteDemand()}>Excluir</button>
        </ContainerButtons>
      </>
    )
  }
  return (
    <>
      <Container>
        {render()}
      </Container>
      {/* modal para editar ou ver demanda */}
      {renderModal()} 
      {/* modal para cancelar candidatura ou excluir demanda */}

    </>
  )
}