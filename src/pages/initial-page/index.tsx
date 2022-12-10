import react, { useState, useEffect } from 'react'
import { DemandList, FooterInfos, HeaderPage } from './styles'
import searchIcon from '../../imgs/icons/search.png'
import Image from 'next/image'
import DemandItem from '@components/demand-item'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '../../styles/pages/default'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/modules/rootReducer'
import { ButtonLogout } from '@components/button-logout'
import api from 'src/services/api'

export default function InitialPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [hasResultsOfSearch, setHasResultsOfSearch] = useState([])
  const [hasResults, setHasResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [demands, setDemands] = useState([])
  const userData = useSelector((state: RootState) => state?.user)

  useEffect(() => {
    console.log('dados', userData)
  }, [userData])

  function definePhrase() {
    let date = new Date()
    let hour = date.getHours()
    let phrase: string;

    if (hour >= 5 && hour <= 12) {
      phrase = 'Bom dia, ' 
    } else if (hour >= 13 && hour <= 17) {
      phrase = 'Boa tarde, '
    } else {
      phrase = 'Boa noite, '
    }

    return phrase;
  }

  function getNameUser() {
    return userData?.nome;
  }

  async function searchTerms(searchTerms: string) {
    setIsSearching(true)

    try { 
      const response = await api.get(`api/Freelancer/PesquisaDemanda?nomeDemanda=${searchTerms}`)

      if (response.data) {
        setHasResults(true)
        setHasResultsOfSearch(response.data)
      }

    } catch (error) {
      console.log('Não foi possível buscar as demandas pelo termo informado!')
    }
  }

  function renderSearchDemands() {
    if (hasResults) {
      return hasResultsOfSearch.map((demandResult) => {
        <DemandItem
        key={demandResult.id}
        imageBrand={demandResult.imageBrand}
        nameBrand={demandResult.nameBrand}
        stars={demandResult.stars}
        nameDemand={demandResult.title}
        price={demandResult.price}
        stack={demandResult.stack}
        description={demandResult.description}
        />
      })
    }

    return (
      <div className='not-found-demands'>
        <p>Não encontramos demandas para o que foi informado.</p>
        <p>Tente novamente com um novo termo!</p>
      </div>
    )
  }

  function getInputText(e: react.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value
    setSearchTerm(inputValue)
  }

  function renderDemand() {
    if (!demands.length) {
      return (
        <div className='not-found-demands'>
          <p>Infelizmente não temos demandas cadastradas no momento!</p>
          <p>Volte mais tarde.</p>
        </div>
      )
    }

    return demands.map((demand) => {
      return (
        <DemandItem
        key={demand.id}
        imageBrand={demand.imageBrand}
        nameBrand={demand.nameBrand}
        stars={demand.stars}
        nameDemand={demand.title}
        price={demand.price}
        stack={demand.stack}
        description={demand.description}
        />
      )
    })
  }

  async function getDemand() {
    try {
      const demands = await api.get('/api/Empresa/GetDemandas')
      setDemands(demands.data)

    } catch (error) {
      console.log('Não foi possível listar as demandas cadastradas devido ao erro: ', error)
    }
  }

  useEffect(() => {
    getDemand()
  }, [])

  return (
    <Main>
      <ButtonLogout />
      <HeaderPage>
        <div className='welcome'>
          <h1>{definePhrase()}{getNameUser()}!</h1>
          <p>veja as demandas disponíveis abaixo</p>
        </div>
        <div className='input-search'>
          <input onChange={(e) => getInputText(e)} type="text" className='input-search__input' id='search' placeholder='Buscar'/>
          <button onClick={() => searchTerms(searchTerm)} className='input-search__button'>
            <Image src={searchIcon} alt="Buscar" />
          </button>
        </div>
      </HeaderPage>
      <DemandList>
        {isSearching ? renderSearchDemands() : renderDemand()}
      </DemandList>
      <FooterInfos>
        <div className='copy'>
          <p>&copy; DevEnvolve - Todos os direitos reservados - 2022</p>
        </div>
        <div className='version'>
          <p>Versão 0.1 Beta</p>
        </div>
      </FooterInfos>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}