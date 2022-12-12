import CheckboxSkill from "@components/checkbox-skills";
import { ModalContent } from "@components/demand-item/styles";
import { Modal } from "@components/modal";
import { useState } from "react";
import api from "src/services/api";
import { Container, ContainerButtons, ContainerInfo, DemandModalContent } from "./styles";
import { ApplicationDemandProps } from "./types";

export default function ApplicationDemand({ id, title, stack, price, numberOfApplication, date, type, description }: ApplicationDemandProps) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [stackDemand, setStackDemand] = useState(0 | 1 | 2)

  function closeModal() {
    setIsModalOpen(false)
  }

  async function cancelApplicationDemand() {
    try {
      const response = await api.patch(`/api/Freelancer/CancelarCandidatura?idDemanda=${id}`)
      if (response.status === 200) window.location.reload()

    } catch (error) {
      console.log(`Não foi possível excluir a demanda devido ao erro [${error}]`)
    }
  }

  async function deleteDemand() {
    try {
      const response = await api.delete(`/api/Demanda/DeletarDemanda/${id}`)
      if (response.status === 200) window.location.reload()

    } catch (error) {
      console.log(`Não foi possível excluir a demanda devido ao erro [${error}]`)
    }
  }

  function saveChanges() {
    alert("Sua demanda foi alterada com sucesso!")
    window.location.reload()
  }

  function renderModal() {
    if (!isModalOpen) return null

    return renderContentModal(type)
  }

  function renderStack(stack: number) {
    if (stack === 0) return 'Backend'
    if(stack === 1) return 'Frontend'
    if(stack === 2) return 'Full-Stack' 
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
              <p>{renderStack(stack)}</p>
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
              <CheckboxSkill id="1" name="Backend" onChecked={() => setStackDemand(0)}/>
              <CheckboxSkill id="2" name="Frontend" onChecked={() => setStackDemand(1)}/>
              <CheckboxSkill id="3" name="Full-stack" onChecked={() => setStackDemand(2)}/>
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
              <p>{renderStack(stack)}</p>
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
            <p>{renderStack(stack)}</p>
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
      {renderModal()} 
    </>
  )
}