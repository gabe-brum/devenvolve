import ApplicationDemand from "@components/application-demand"
import NavigationFooter from "@components/navigation-footer"
import { Footer, Main } from "@styles/pages/default"
import Link from "next/link"
import { ApplicationDemandStyle } from "./styles"
import { ButtonLogout } from '@components/button-logout'
import { useEffect, useState } from "react"
import api from "src/services/api"

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
      const { nome, stack, valor, dataCandidatura, idDemanda, descricao } = demand
      return <ApplicationDemand key={idDemanda} id={idDemanda} title={nome} stack={stack} price={valor} date={dataCandidatura} type={'freelancer'} description={descricao}/>
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