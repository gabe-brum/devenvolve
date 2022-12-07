import react, { useState } from 'react'
import { FreelancerList, FooterInfos, HeaderPage } from './styles'
import searchIcon from '../../imgs/icons/search.png'
import Image from 'next/image'
import DemandItem from '@components/demand-item'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '../../styles/pages/default'
import FreelancerItem from '@components/freelancer-item'

const freelancers = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    name: 'Freelancer Lorem Ipsum',
    stars: 3,
    description: 'Oi eu sou... lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    skills: [
      {
        name: 'HTML',
        id: 1
      },
      {
        name: 'CSS',
        id: 2
      },
      {
        name: 'JavaScript',
        id: 3
      },
    ]
  },
  {
    id: 2,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    name: 'Freelancer Lorem Ipsum 2',
    stars: 3,
    description: 'Oi eu sou... lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    skills: [
      {
        name: 'Java',
        id: 1
      },
      {
        name: 'C#',
        id: 2
      },
      {
        name: 'MySQL',
        id: 3
      },
    ]
  },
  {
    id: 3,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    name: 'Freelancer Lorem  3',
    stars: 3,
    description: 'Oi eu sou... lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    skills: [
      {
        name: 'React',
        id: 1
      },
      {
        name: 'CSS',
        id: 2
      },
      {
        name: 'JavaScript',
        id: 3
      },
    ]
  },
  {
    id: 4,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    name: 'Freelancer Lorem Ipsum 4',
    stars: 3,
    description: 'Oi eu sou... lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    skills: [
      {
        name: 'Java',
        id: 1
      },
      {
        name: 'Vue.js',
        id: 2
      },
      {
        name: 'Angular',
        id: 3
      },
    ]
  },
]

export default function InitialPageBrand() {
  const [searchTerm, setSearchTerm] = useState('')
  const [hasResults, setHasResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

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

  function getNameBrand() {
    let brand: string;

    brand = 'Empresa Lorem Ipsum' // default

    return brand;
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
        <p>Não encontramos freelancers para o que foi informado. Tente novamente com um novo termo!</p>
      </div>
    )
  }

  function getInputText(e: react.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value
    setSearchTerm(inputValue)
  }

  function renderDemand() {
    if (freelancers.length === 0) {
      return (
        <div className='not-found-demands'>
          <p>Sem registros de freelancers na plataforma!</p>
        </div>
      )
    }

    return freelancers.map((freelancer) => {
      return (
        <FreelancerItem
        key={freelancer.id}
        image={freelancer.image}
        name={freelancer.name}
        stars={freelancer.stars}
        description={freelancer.description}
        skills={freelancer.skills}
        />
      )
    })
  }

  return (
    <Main>
      <HeaderPage>
        <div className='welcome'>
          <h1>{definePhrase()}{getNameBrand()}!</h1>
          <p>veja os melhores freelancers abaixo!</p>
        </div>
        <div className='input-search'>
          <input onChange={(e) => getInputText(e)} type="text" className='input-search__input' id='search' placeholder='Buscar'/>
          <button onClick={() => searchTerms(searchTerm)} className='input-search__button'>
            <Image src={searchIcon} alt="Buscar" />
          </button>
        </div>
      </HeaderPage>
      <FreelancerList>
        {isSearching ? renderSearchDemands() : renderDemand()}
      </FreelancerList>
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