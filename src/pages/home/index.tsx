/* eslint-disable @next/next/link-passhref */
import HeaderMenu from '@components/header-menu'
import Image from 'next/image'
import react, { useEffect, useState } from 'react'
import { ContainerAbout, ContainerHome, ContainerLogin, ContainerPlans, Footer} from './styles'
import logo from '../../imgs/assets/logo.png'
import instagram from '../../imgs/assets/instagram.png'
import linkedin from '../../imgs/assets/linkedin.png'
import github from '../../imgs/assets/github.png'
import Bruno from '../../imgs/assets/bruno.jpg'
import Gabriel from '../../imgs/assets/gabriel.jpg'
import Cards from '@components/cards'
import Link from 'next/link'
import { IMaskInput } from "react-imask";
import { useForm } from 'react-hook-form';
import api from '../../services/api'
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../store/modules/user/actions'
import { useRouter } from 'next/router'
import { RootState } from 'src/store/modules/rootReducer'

export default function HomePage() {
  const [formMessage, setFormMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [formMessageRegister, setFormMessageRegister] = useState('')
  const [hasErrorRegister, setHasErrorRegister] = useState(false)
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [isFreelancerChecked, setIsFreelancerChecked] = useState(false)
  const [isBrandChecked, setIsBrandChecked] = useState(false)
  const [isFreelancerLoginChecked, setIsFreelancerLoginChecked] = useState(false)
  const [isBrandLoginChecked, setIsBrandLoginChecked] = useState(false)
  const [maskCpfCnpj, setMaskCpfCnpj] = useState('')
  const [disabledFreelancer, setDisabledFreelancer] = useState(false)
  const [disabledBrand, setDisabledBrand] = useState(false)
  const [disabledFreelancerLogin, setDisabledFreelancerLogin] = useState(false)
  const [disabledBrandLogin, setDisabledBrandLogin] = useState(false)
  const { register, handleSubmit, setValue, setFocus } = useForm()
  const dispatch = useDispatch()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')
  const [cpfCnpjInput, setCpfCnpjInput] = useState('')
  const [phone, setPhone] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [plan, setPlan] = useState()
  // const userData = useSelector((state: RootState) => state?.user)

  let date = new Date();
  let year = date.getFullYear();

  let isMobile: boolean;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 768
  }

  function validateLogin() {
    if (!email || !password || !type) {
      setHasError(true)
    
      if (!email) {
        setFormMessage("Voc?? precisa informar seu e-mail")
      }
  
      if (!password) {
        setFormMessage("Informe seu senha")
      }
  
      if (!type) {
        setFormMessage("Voc?? precisa marcar o seu tipo de usu??rio cadastrado")
      }

      return false
    }

    return true
  }

  async function onLoginSubmit(e?: any) {
    if (e) e.preventDefault()
    const isValidLogin = validateLogin()
    if (isValidLogin) {
      try {
        const response = await api.post('/login', {
          email, senha: password, tipo: type
        })

        if (response) {
          dispatch(
            UserActions.login(response.data)
          )

          localStorage.setItem('token', response.data.token)

          if (response.data.tipo === 'freela') router.push('/initial-page') // freelancer 

          if (response.data.tipo === 'empresa') router.push('/initial-page-brand') // empresa
        }
      } catch (error) {
        setHasError(true)
        setFormMessage("Erro ao fazer o login. Algum dado informado pode estar errado, revise e tente novamente!")
        console.log(error)
      }
    }
  }

  function validateRegister() {
    const validRegister = name || email || password || type || cpfCnpjInput || phone || cep || number || street || district || city || state 
    if (!validRegister) {
      setHasErrorRegister(true)
      setFormMessageRegister("Todos os dados do cadastro s??o obrigat??rios. Por favor, preencha-os")
      return false
    }

    return true
  }

  async function onRegisterSubmit() {
    const isValidRegister = validateRegister()

    if (isValidRegister) {
      try {
        const response = await api.post('/api/Usuario/AddUsuario', {
          nome: name,
          email,
          senha: password,
          descricao: '',
          celular: phone,
          tipo: type,
          cidade: city,
          estado: state,
          cep,
          logradouro: street,
          bairro: district,
          numero: number,
          idPlano: 0
        })

        if (response.status === 200) { 
          setFormMessageRegister('Usu??rio cadastrado com sucesso!')
          onLoginSubmit()
        }

      } catch (error) {
        setHasErrorRegister(true)
        setFormMessageRegister('Erro ao tentar cadastrar o usu??rio. Tente novamente mais tarde!')
        console.log(error)
      }

      setName('')
      setEmail('')
      setPassword('')
      setType('')
      setCpfCnpjInput('')
      setPhone('')
      setCep('')
      setNumber('')
      setStreet('')
      setDistrict('')
      setCity('')
      setState('')
    }
  }

  const handleOnChangeFreelancer = () => {
    setIsFreelancerChecked(!isFreelancerChecked)
    setCpfCnpj('CPF')
    setMaskCpfCnpj('000.000.000-00')
    setDisabledBrand(!disabledBrand)
    setType('freela')
  };

  const handleOnChangeBrand = () => {
    setIsBrandChecked(!isBrandChecked)
    setCpfCnpj('CNPJ')
    setMaskCpfCnpj('00.000.000/0000-00')
    setDisabledFreelancer(!disabledFreelancer)
    setType('empresa')
  };

  const handleOnChangeFreelancerLogin = () => {
    setIsFreelancerLoginChecked(!isFreelancerChecked)
    setDisabledBrandLogin(!disabledBrandLogin)
    setType('freela')
  };

  const handleOnChangeBrandLogin = () => {
    setIsBrandLoginChecked(!isBrandLoginChecked)
    setDisabledFreelancerLogin(!disabledFreelancerLogin)
    setType('empresa')
  };

  function handleChangeCep(event: react.ChangeEvent<HTMLInputElement>) {
    let cep = event.target.value.replace(/\D/g, '')

    if (cep.length > 8 || cep.length < 8) {
      setHasErrorRegister(true)
      setFormMessageRegister("O CEP informado est?? errado!")
    }

    let url = `https://viacep.com.br/ws/${cep}/json`

    const options: RequestInit = {
      method: "GET",
      mode: "cors",
      headers: {
        'content-type': 'application/json;charset=utf-8',
      }
    }

    fetch(url, options).then(res => res.json()).then(data => {
      setStreet(data.logradouro)
      setCity(data.localidade)
      setState(data.uf)
      setDistrict(data.bairro)
      setFocus('number')
    })
  }

  return (
    <>
      <HeaderMenu />
      <ContainerHome id="home">
        <h1>Seja bem-vindo(a) a</h1>
        <div className='logo'>
          <Image src={logo} alt="Logo DevEnvolve" />
          <div className='text'>
            <p>DevEnvolve</p>
            <p>onde a parceria vale</p>
          </div>
        </div>
        <p className='message'>A ??nica plataforma para freelancers em que voc?? ganha por ter um amigo dev</p>
      </ContainerHome>
      <ContainerPlans id="plans">
        <h2>Para Freelancers</h2>
        <Cards type='freelancers' />
        <h2>Para Empresas</h2>
        <Cards type='brands' />
      </ContainerPlans>
      <ContainerAbout id="about">
        <h2>Sobre a DevEnvolve</h2>
        <p className='about__content'>
          Projeto desenvolvido pelos alunos Gabriel Brum da Luz e Bruno Bordin, do curso de An??lise e Desenvolvimento de Sistemas na Feevale. A DevEnvolve visa trazer um diferencial para os desenvolvedores freelancers que est??o buscando colocar seus conhecimentos em pr??tica atrav??s de tarefas que se identifiquem, mas que al??m disso tem amigos e conhecidos que tamb??m s??o desenvolvedores, indiferente da stack de atua????o. Com esses amigos e conhecidos, por meio da indica????o, cada dev poder?? ganhar at?? 30% no valor da demanda indicada! Desta forma, com devs engajados e competentes, a DevEnvolve tamb??m se torna uma ??tima plataforma para que empresas possam criar suas demandas e visualizarem poss??veis executores de suas necessidades.
        </p>
        <p className='about__call'>Conhe??a mais sobre quem desenvolveu essa plataforma!</p>
        <div className='about-devs'>
          <div className='about-devs__dev'>
            <Image src={Bruno} alt="Bruno Bordin" />
            <p>Bruno: respons??vel pelo backend</p>
            <div className='about-devs__dev--media'>
              <Link href={'https://www.instagram.com/bruno.bordin'} title='Instagram do Bruno' target={"_blank"}>
                <Image src={instagram} alt="Instagram" className='icon'/>
              </Link>
              <Link href={'https://www.github.com/BrunoBordin'} title='GitHub do Bruno' target={"_blank"}>
                <Image src={github} alt="Instagram" className='icon'/>
              </Link>
              <Link href={'https://www.linkedin.com/in/bruno-bordin'} title='Linkedin do Bruno' target={"_blank"}>
                <Image src={linkedin} alt="Instagram" className='icon'/>
              </Link>
            </div>
          </div>
          <div className='about-devs__dev'>
            <Image src={Gabriel} alt="Gabriel Brum da Luz" />
            <p>Gabriel: respons??vel pelo frontend</p>
            <div className='about-devs__dev--media'>
              <Link href={'https://www.instagram.com/gabriel_bluz'} title='Instagram do Gabriel' target={"_blank"}>
                <Image src={instagram} alt="Instagram" className='icon'/>
              </Link>
              <Link href={'https://www.github.com/gabe-brum'} title='GitHub do Gabriel' target={"_blank"}>
                <Image src={github} alt="Instagram" className='icon'/>
              </Link>
              <Link href={'https://www.linkedin.com/in/gabriel-brum-da-luz/'} title='Linkedin do Gabriel' target={"_blank"}>
                <Image src={linkedin} alt="Instagram" className='icon'/>
              </Link>
            </div>
          </div>
        </div>
      </ContainerAbout>
      <ContainerLogin id="login">
        <div className='login-wrapper__type'>
          <p>Login</p>
          <div className='login-wrapper__type--card'>
            <form onSubmit={(e: any) => onLoginSubmit(e)}>
              <label htmlFor='email'>E-mail:</label>
              <input type="email" id='email' onChange={(event: any) => setEmail(event.target.value)}/>
              <label htmlFor='password'>Senha:</label>
              <input type="password" id='password' onChange={(event: any) => setPassword(event.target.value)}/>
              <div className='checkbox-wrapper'>
                <label htmlFor='freelancerLogin' className="container">Freelancer
                  <input type="checkbox" id='freelancerLogin' name='freelancerLogin' checked={isFreelancerLoginChecked} onChange={handleOnChangeFreelancerLogin} disabled={disabledFreelancer}/>
                  <span className="checkmark"></span>
                </label>
                <label htmlFor='brandLogin' className="container">Empresa
                  <input type="checkbox" id='brandLogin' name='brandLogin' checked={isBrandLoginChecked} onChange={handleOnChangeBrandLogin} disabled={disabledBrand}/>
                  <span className="checkmark"></span>
                </label>
              </div>
              <small>Ainda n??o tem cadastro? Cadastre-se {isMobile ? 'abaixo': 'ao lado'}</small>
              <div className='form-message'>
                <p className={`form-message__text ${hasError ? 'error' : 'success'}`}>{formMessage}</p>
              </div>
              <button type='submit' className='button-submit'>Acessar</button>
            </form>
          </div>
        </div>
        <div className='login-wrapper__type'>
          <p>Cadastro</p>
          <div className='login-wrapper__type--card'> 
          <form onSubmit={handleSubmit(onRegisterSubmit)}>
            <label htmlFor='name'>Nome:</label>
            <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>

            <label htmlFor='newEmail'>E-mail:</label>
            <input type="email" id='newEmail' onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor='newPassword'>Senha:</label>
            <input type="password" id='newPassword' onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="type-register">Vou ser:</label>
            <div className='checkbox-wrapper'>
              <label htmlFor='freelancer' className="container">Freelancer
                <input type="checkbox" id='freelancer' name='freelancer' checked={isFreelancerChecked} onChange={handleOnChangeFreelancer} disabled={disabledFreelancer}/>
                <span className="checkmark"></span>
              </label>
              <label htmlFor='brand' className="container">Empresa
                <input type="checkbox" id='brand' name='brand' checked={isBrandChecked} onChange={handleOnChangeBrand} disabled={disabledBrand}/>
                <span className="checkmark"></span>
              </label>
            </div>

            <label htmlFor='cpfCnpj'>Informe seu {cpfCnpj}:</label>
            <IMaskInput
              mask={maskCpfCnpj}
              onComplete={(e: react.ChangeEvent<HTMLInputElement>) => setCpfCnpjInput(e?.target?.value)}
            />

            <label htmlFor='cpfCnpj'>Informe seu telefone:</label>
            <input type="text" id='cpjCnpj' name='cpjCnpj' onChange={(e) => setPhone(e.target.value)}/>
    
            <div className='cep-wrapper'>
              <div className='cep-wrapper__item'>
                <label htmlFor="cep">Informe seu CEP:</label>
                <input type="text" id='cep' name='cep' onBlur={(event => handleChangeCep(event))} onChange={(e) => setCep(e.target.value)}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="number">Informe o n??mero:</label>
                <input type="number" id='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="street">Informe o logradouro:</label>
                <input type="text" id='street' value={street} onChange={(e) => setStreet(e.target.value)}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="city">Informe a cidade:</label>
                <input type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="district">Informe o bairro:</label>
                <input type="text" id='district' value={district} onChange={(e) => setDistrict(e.target.value)}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="state">Informe o estado:</label>
                <input type="text" id='state' value={state} onChange={(e) => setState(e.target.value)}/>
              </div>
            </div>
           
            <div className='form-message'>
              <p className={`form-message__text ${hasErrorRegister ? 'error' : 'success'}`}>{formMessageRegister}</p>
            </div>
            <button type='submit' className='button-submit'>Cadastrar</button>
            </form>
          </div>   
        </div>
      </ContainerLogin>
      <Footer>
        <div className='devs'>
          <div className='devs__dev'>
            <p className='name'>Bruno Bordin</p>
            <p className='phone'>+55 51 99532-0714</p>
          </div>
          <div className='devs__dev'>
            <p className='name'>Gabriel Brum da Luz</p>
            <p className='phone'>+55 51 98282-0715</p>
          </div>
        </div>
        <div className='copy'>
          <p>&copy; DevEnvolve - {year} - Todos os direitos reservados.</p>
        </div>
      </Footer>
    </> 
  )
}

