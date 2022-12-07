import react, { useState } from 'react'
import { DemandList, FooterInfos, HeaderPage } from './styles'
import searchIcon from '../../imgs/icons/search.png'
import Image from 'next/image'
import DemandItem from '@components/demand-item'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '../../styles/pages/default'
import { useSelector } from 'react-redux'

const demands = [
  {
    id: 1,
    imageBrand: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    nameBrand: 'Empresa Lorem Ipsum',
    stars: 3,
    title: 'Desenvolvimento de um C.R.U.D. em PHP',
    stack: 'Full-stack',
    price: 3000,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    imageBrand: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    nameBrand: 'Empresa Lorem Ipsum',
    stars: 5,
    title: 'Desenvolvimento de uma landing page - leads',
    stack: 'Front-end',
    price: 2600,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    imageBrand: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    nameBrand: 'Empresa Lorem Ipsum',
    stars: 5,
    title: 'Desenvolvimento de uma landing page - leads',
    stack: 'Front-end',
    price: 2600,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 4,
    imageBrand: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    nameBrand: 'Empresa Lorem Ipsum',
    stars: 5,
    title: 'Desenvolvimento de uma landing page - leads',
    stack: 'Front-end',
    price: 2600,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
]

export default function InitialPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [hasResults, setHasResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const userData = useSelector((state) => state?.user)

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
    let user: string;

    user = 'Gabriel' // default

    return user;
  }

  function searchTerms(searchTerms: string) {
    setIsSearching(true)
    // chamar api de busca do termo
    const hasResult = true // vai validar se há retorno

    setHasResults(hasResult)
  }

  function renderSearchDemands() {
    // if (hasResults) {
    //   return hasResults.map((demandResult) => {
    //     <DemandItem
    //     key={demandResult.id}
    //     imageBrand={demandResult.imageBrand}
    //     nameBrand={demandResult.nameBrand}
    //     stars={demandResult.stars}
    //     nameDemand={demandResult.title}
    //     price={demandResult.price}
    //     stack={demandResult.stack}
    //     />
    //   })
    // }

    return (
      <div className='not-found-demands'>
        <p>Não encontramos demandas para o que foi informado. Tente novamente com um novo termo!</p>
      </div>
    )
  }

  function getInputText(e: react.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value
    setSearchTerm(inputValue)
  }

  function renderDemand() {
    if (demands.length === 0) {
      return (
        <div className='not-found-demands'>
          <p>Infelizmente não temos demandas cadastradas no momento! Volte mais tarde.</p>
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

  return (
    <Main>
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