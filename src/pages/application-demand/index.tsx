import ApplicationDemand from "@components/application-demand"
import NavigationFooter from "@components/navigation-footer"
import { Footer, Main } from "@styles/pages/default"
import Link from "next/link"
import { ApplicationDemandStyle } from "./styles"
import { ButtonLogout } from '@components/button-logout'
import { useEffect, useState } from "react"
import api from "src/services/api"

// const hasApplicationDemandFreela = [
//   {
//     id: 1,
//     title: 'Título da demanda',
//     stack: 'Backend',
//     price: 2000,
//     date: '01/12/2022',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//   },
//   {
//     id: 2,
//     title: 'Título da demanda 2',
//     stack: 'Frontend',
//     price: 1700,
//     date: '30/11/2022',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//   }
// ]

export default function ApplicationDemandPage() {
  const [hasApplicationDemand, setHasApplicationDemand] = useState([])

  function renderNotFoundApplicationDemand() {
    return (
      <div className="not-found">
        <p className="not-found--text">Você não se candidatou a nenhuma demanda. Acesse a página inicial e se candidate!</p>
        <Link href='/initial-page' className="not-found--go-to-initial">Ir para página inicial</Link>
      </div>
    )
  }

  useEffect(() => {
    async function getApplicationDemand() {
      try {
        const response = await api.get('/api/Demanda/ConsultarDemandasCandidatado')
        setHasApplicationDemand(response.data)

      } catch (error) {
        console.log(`Não foi possível retornar as demandas que o freelancer se candidatou devido ao erro [${error}]`)
      }
    }

    getApplicationDemand()
  }, [])

  function renderApplicationDemand() {
    if (!hasApplicationDemand.length) return renderNotFoundApplicationDemand()

    return hasApplicationDemand.map((demand) => {
      const { title, stack, price, date, id, description } = demand
      return <ApplicationDemand key={id} id={id} title={title} stack={stack} price={price} date={date} type={'freelancer'} description={description}/>
    })
  }

  return (
    <Main>
      <ButtonLogout />
      <ApplicationDemandStyle>
        {renderApplicationDemand()}
      </ApplicationDemandStyle>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}