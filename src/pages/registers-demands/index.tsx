import ApplicationDemand from "@components/application-demand"
import NavigationFooter from "@components/navigation-footer"
import { Footer, Main } from "@styles/pages/default"
import { ApplicationDemandStyle } from "./styles"

const hasApplicationDemandBrand = [
  {
    id: 1,
    title: 'Título da demanda',
    stack: 'Backend',
    price: 2000,
    numberOfApplication: 20,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    title: 'Título da demanda 2',
    stack: 'Frontend',
    price: 1700,
    numberOfApplication: 12,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 1,
    title: 'Título da demanda',
    stack: 'Backend',
    price: 2000,
    numberOfApplication: 20,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    title: 'Título da demanda 2',
    stack: 'Frontend',
    price: 1700,
    numberOfApplication: 12,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

export default function ApplicationDemandPage() {

  function renderNotFoundApplicationDemand() {
    return (
      <div className="not-found">
        <p className="not-found--text">Você ainda não cadastrou nenhuma demanda. Cadastre clicando no botão abaixo!</p>
        <button className="not-found--new-demand">Cadastrar nova demanda</button>
      </div>
    )
  }

  function renderApplicationDemand() {
    if (hasApplicationDemandBrand.length === 0) return renderNotFoundApplicationDemand()

    return hasApplicationDemandBrand.map((demand) => {
      const { title, stack, price, numberOfApplication, id, description } = demand
      return <ApplicationDemand key={id} title={title} stack={stack} price={price} numberOfApplication={numberOfApplication} type={'brand'} description={description}/>
    })
  }

  function addNewDemand() {
    
  }

  function renderButtonAddNewDemand() {
    if (hasApplicationDemandBrand.length === 0) return null

    return (
      <button className="new-demand" onClick={() => addNewDemand()}>Cadastrar nova demanda</button>
    )
  }

  return (
    <Main>
      <ApplicationDemandStyle>
        {renderApplicationDemand()}
        {renderButtonAddNewDemand()}
      </ApplicationDemandStyle>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}