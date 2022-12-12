import react, { useEffect, useState } from 'react'
import { FreelancerList, FooterInfos, HeaderPage } from './styles'
import searchIcon from '../../imgs/icons/search.png'
import Image from 'next/image'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '../../styles/pages/default'
import FreelancerItem from '@components/freelancer-item'
import { ButtonLogout } from '@components/button-logout'
import api from 'src/services/api'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/modules/rootReducer'

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
]

export default function InitialPageBrand() {
  const [searchTerm, setSearchTerm] = useState('')
  const [hasResultsOfSearch, setHasResultsOfSearch] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [freelancers, setFreelancers] = useState([])
  const userData = useSelector((state: RootState) => state?.user)

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
    return userData?.nome;
  }

  async function searchTerms(searchTerms: string) {
    setIsSearching(true)

    try { 
      const response = await api.get(`/api/Freelancer/PesquisaFreelancer?nomeFreelancer=${searchTerms}`)

      if (response.data) {
        setHasResultsOfSearch(response.data)
      }

    } catch (error) {
      console.log('Não foi possível buscar o freelancer pelo termo informado!')
    }
  }

  function renderSearchFreelancers() {
    if (!hasResultsOfSearch.length) {
      return (
        <div className='not-found-freelancers'>
          <p>Não encontramos freelancers para o que foi informado.</p>
          <p>Tente novamente com um novo termo!</p>
        </div>
      )
    }

    return hasResultsOfSearch.map((freelancerResult) => {
      return (
        <FreelancerItem
        id={freelancerResult.idFreelancer}
        key={freelancerResult.id}
        image={freelancerResult.foto}
        name={freelancerResult.nome}
        stars={freelancerResult.reputacao}
        description={freelancerResult.descricao}
        skills={freelancerResult.skills}
        />
      )
    })
  }

  function getInputText(e: react.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value
    setSearchTerm(inputValue)
  }

  function renderFreelancers() {
    if (!freelancers) {
      return (
        <div className='not-found-demands'>
          <p>Sem registros de freelancers na plataforma!</p>
        </div>
      )
    }

    return freelancers.map((freelancer) => {
      return (
        <FreelancerItem
        id={freelancer.idFreelancer}
        key={freelancer.id}
        image={freelancer.foto}
        name={freelancer.nome}
        stars={freelancer.reputacao}
        description={freelancer.descricao}
        skills={freelancer.skills}
        />
      )
    })
  }

  useEffect(() => {
    async function getFreelancers() {
      try {
        const freelancers = await api.get('/api/Freelancer/Freelancers')
        console.log('dados', freelancers.data)
        setFreelancers(freelancers.data)
      
      } catch (error) {
      console.log('Ocorreu um erro ao buscar os freelancers cadastrados!')
      }
    
    }

    getFreelancers()
  }, [])

  return (
    <Main>
      <ButtonLogout />
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
        {isSearching ? renderSearchFreelancers() : renderFreelancers()}
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