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
import { useDispatch } from 'react-redux';
import * as UserActions from '../../store/modules/user/actions'
import { useRouter } from 'next/router'

export default function HomePage() {
  const [formMessage, setFormMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [cpfCnpj, setCpfCnpj] = useState('')
  const [isFreelancerChecked, setIsFreelancerChecked] = useState(false)
  const [isBrandChecked, setIsBrandChecked] = useState(false)
  const [maskCpfCnpj, setMaskCpfCnpj] = useState('')
  const [disabledFreelancer, setDisabledFreelancer] = useState(false)
  const [disabledBrand, setDisabledBrand] = useState(false)
  const { register, handleSubmit, setValue, setFocus } = useForm()
  const dispatch = useDispatch()
  const router = useRouter()
  const [dataForm, setDataForm] = useState({ name: '', email: '', password: '', type: '', cpfCnpj: '', phone: '', cep: '', number: '', street: '', district: '', city: '', state: '' })

  let date = new Date();
  let year = date.getFullYear();

  let isMobile: boolean;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 768
  }

  useEffect(() => {
  }, [])

  async function onLoginSubmit() {
    const { email, password, type } = dataForm

    try {
      const response = await api.post('/login', {
        email, password, type
      })

      if (response) {
        dispatch(
          UserActions.login(response.data)
        )
        router.replace('/initial-page')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function onRegisterSubmit(e: FormDataEvent) {
    e.preventDefault()
    const { name, email, password, type, cpfCnpj, phone, cep, number, street, district, city, state } = dataForm

    try {
      const response = await api.post('/Usuario/AddUsuario', {
        name, email, password, type, cpfCnpj, phone, cep, number, street, district, city, state
      })

      if (response.status === 201) { 
        onLoginSubmit()
        dispatch(UserActions.login(response.data))
      }

      setFormMessage('Usuário cadastrado com sucesso!')

    } catch (error) {
      setHasError(true)
      setFormMessage('Erro ao tentar cadastrar o usuário. Tente novamente mais tarde!')
    }

    setDataForm({name: '', email: '', password: '', type: '', cpfCnpj: '', phone: '', cep: '', number: '', street: '', district: '', city: '', state: ''})
  }

  const handleOnChangeFreelancer = () => {
    setIsFreelancerChecked(!isFreelancerChecked);
    setCpfCnpj('CPF')
    setMaskCpfCnpj('000.000.000-00')
    setDisabledBrand(!disabledBrand)
    // setDataForm(prevState => [...prevState, type: 'freelancer'])}
  };

  const handleOnChangeBrand = () => {
    setIsBrandChecked(!isBrandChecked);
    setCpfCnpj('CNPJ')
    setMaskCpfCnpj('00.000.000/0000-00')
    setDisabledFreelancer(!disabledFreelancer)
    // setDataForm(prevState => [...prevState, type: 'brand'])}
  };


  function handleChangeCep(event: react.ChangeEvent<HTMLInputElement>) {
    let cep = event.target.value.replace(/\D/g, '')
    let url = `https://viacep.com.br/ws/${cep}/json`

    const options: RequestInit = {
      method: "GET",
      mode: "cors",
      headers: {
        'content-type': 'application/json;charset=utf-8',
      }
    }

    fetch(url, options).then(res => res.json()).then(data => {
      setValue('street', data.logradouro);
      setValue('district', data.bairro);
      setValue('city', data.localidade);
      setValue('state', data.uf);
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
        <p className='message'>A única plataforma para freelancers em que você ganha por ter um amigo dev</p>
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
          Projeto desenvolvido pelos alunos Gabriel Brum da Luz e Bruno Bordin, do curso de Análise e Desenvolvimento de Sistemas na Feevale. A DevEnvolve visa trazer um diferencial para os desenvolvedores freelancers que estão buscando colocar seus conhecimentos em prática através de tarefas que se identifiquem, mas que além disso tem amigos e conhecidos que também são desenvolvedores, indiferente da stack de atuação. Com esses amigos e conhecidos, por meio da indicação, cada dev poderá ganhar até 30% no valor da demanda indicada!
        </p>
        <p className='about__call'>Conheça mais sobre quem desenvolveu essa plataforma!</p>
        <div className='about-devs'>
          <div className='about-devs__dev'>
            <Image src={Bruno} alt="Bruno Bordin" />
            <p>Bruno: responsável pelo backend</p>
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
            <p>Gabriel: responsável pelo frontend</p>
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
            <form onSubmit={handleSubmit(onLoginSubmit)}>
              <label htmlFor='email'>E-mail:</label>
              <input type="email" id='email'/>
              <label htmlFor='password'>Senha:</label>
              <input type="password" id='password'/>
              <small>Ainda não tem cadastro? Cadastre-se {isMobile ? 'abaixo': 'ao lado'}</small>
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
            <input type="text" id='name' onChange={(e) => setDataForm(prevState => { return {...prevState, name: e.target.value}})}/>

            <label htmlFor='newEmail'>E-mail:</label>
            <input type="email" id='newEmail' onChange={(e) => setDataForm(prevState => { return {...prevState, email: e.target.value}})}/>

            <label htmlFor='newPassword'>Senha:</label>
            <input type="password" id='newPassword' onChange={(e) => setDataForm(prevState => { return {...prevState, password: e.target.value}})}/>

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
              onComplete={(e: react.ChangeEvent<HTMLInputElement>) => setDataForm(prevState => { return {...prevState, cpfCnpj: e?.target?.value}})}
            />

            <label htmlFor='cpfCnpj'>Informe seu telefone:</label>
            <IMaskInput
              mask='(00) 00000-0000'
              onComplete={(e: react.ChangeEvent<HTMLInputElement>) => setDataForm(prevState => { return {...prevState, phone: e?.target?.value}})}
            />
    
            <div className='cep-wrapper'>
              <div className='cep-wrapper__item'>
                <label htmlFor="cep">Informe seu CEP:</label>
                <input type="text" id='cep' name='cep' onBlur={(event => handleChangeCep(event))} onChange={(e) => setDataForm(prevState => { return {...prevState, cep: e.target.value}})}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="number">Informe o número:</label>
                <input type="number" id='number' {...register('number')} onChange={(e) => setDataForm(prevState => { return {...prevState, number: e.target.value}})}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="street">Informe o logradouro:</label>
                <input type="text" id='street' {...register('street')} onChange={(e) => setDataForm(prevState => { return {...prevState, street: e.target.value}})}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="city">Informe a cidade:</label>
                <input type="text" id='city' {...register('city')} onChange={(e) => setDataForm(prevState => { return {...prevState, city: e.target.value}})}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="district">Informe o bairro:</label>
                <input type="text" id='district' {...register('district')} onChange={(e) => setDataForm(prevState => { return {...prevState, district: e.target.value}})}/>
              </div>
              <div className='cep-wrapper__item'>
                <label htmlFor="state">Informe o estado:</label>
                <input type="text" id='state' {...register('state')} onChange={(e) => setDataForm(prevState => { return {...prevState, state: e.target.value}})}/>
              </div>
            </div>
           
            <div className='form-message'>
              <p className={`form-message__text ${hasError ? 'error' : 'success'}`}>{formMessage}</p>
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

