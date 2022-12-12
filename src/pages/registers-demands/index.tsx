import ApplicationDemand from "@components/application-demand"
import CheckboxSkill from "@components/checkbox-skills"
import { Modal } from "@components/modal"
import NavigationFooter from "@components/navigation-footer"
import { Footer, Main } from "@styles/pages/default"
import { useEffect, useState } from "react"
import { ApplicationDemandStyle, DemandModalContent } from "./styles"
import { ButtonLogout } from '@components/button-logout'
import { useSelector } from "react-redux"
import { RootState } from "src/store/modules/rootReducer"
import api from "src/services/api"

export default function ApplicationDemandPage() {
  const userData = useSelector((state: RootState) => state?.user)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [hasRegisterDemand, setHasRegisterDemand] = useState([])
  const [titleDemand, setTitleDemand] = useState('')
  const [priceDemand, setPriceDemand] = useState('')
  const [stackDemand, setStackDemand] = useState(0 | 1 | 2)
  const [descriptionDemand, setDescriptionDemand] = useState('')

  function renderNotFoundApplicationDemand() {
    return (
      <div className="not-found">
        <p className="not-found--text">Você ainda não cadastrou nenhuma demanda. Cadastre clicando no botão abaixo!</p>
        <button className="not-found--new-demand" onClick={() => setIsOpenModal(true)}>Cadastrar nova demanda</button>
      </div>
    )
  }

  useEffect(() => {
    async function getDemands() {
      try {
        const response = await api.get('/api/Demanda/GetDemandasEmpresa')
        setHasRegisterDemand(response.data)
  
      } catch (error) {
        console.log(`Não foi possível retornar as demandas cadastradas pela empresa ${userData?.nome} devido ao erro [${error}]`)
      }
    }
    
    getDemands()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function renderApplicationDemand() {
    if (!hasRegisterDemand.length) return renderNotFoundApplicationDemand()

    return hasRegisterDemand.map((demand) => {
      const { nome, stack, preco, numberOfApplication, id, descricao } = demand
      return <ApplicationDemand key={id} id={id} title={nome} stack={stack} price={preco} numberOfApplication={numberOfApplication} type={'brand'} description={descricao}/>
    })
  }

  async function registerDemand() {
    try {
      const response = await api.post('/api/Empresa/CadastraDemanda', {
        nome: titleDemand, 
        stack: stackDemand,
        preco: priceDemand,
        descricao: descriptionDemand,
        imagem: '',
        nomeEmpresa: userData?.nome,
      })

      if (response.status === 200) window.location.reload()

    } catch (error) {
      console.log(`Não foi possível cadastrar a demanda devido ao erro [${error}]`)
    }
  }

  function closeModal() {
    setIsOpenModal(false)
  }

  function addNewDemand() {
    if (!isOpenModal) return null

    return (
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
      >
        <DemandModalContent>
          <div className="title-and-value">
            <div className="wrapper-content">
              <label htmlFor="title">Título:</label>
              <input type="text" id="title" name="title" className="input" onChange={(e) => setTitleDemand(e.target.value)} />
            </div>
            <div className="wrapper-content">
              <label htmlFor="price">Valor da demanda:</label>
              <input type="text" id="price" name="price" className="input" onChange={(e) => setPriceDemand(e.target.value)}/>
            </div>
          </div>
          <div className="wrapper-content">
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" name="description" className="input description" onChange={(e) => setDescriptionDemand(e.target.value)}/>
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
            <button className="button cancel" onClick={() => closeModal()}>Cancelar</button>
            <button className="button save" onClick={() => registerDemand()}>Salvar</button>
          </div>
        </DemandModalContent>
      </Modal>
    )
  }

  function renderButtonAddNewDemand() {
    if (!hasRegisterDemand.length) return null

    return (
      <button className="new-demand" onClick={() => setIsOpenModal(true)}>Cadastrar nova demanda</button>
    )
  }

  return (
    <Main>
      <ButtonLogout />
      <ApplicationDemandStyle>
        {renderApplicationDemand()}
        {renderButtonAddNewDemand()}
        {addNewDemand()}
      </ApplicationDemandStyle>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}