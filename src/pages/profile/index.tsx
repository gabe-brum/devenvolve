import CheckboxSkill from '@components/checkbox-skills'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '@styles/pages/default'
import react, { useEffect, useState } from 'react'
import { ContainerProfile, ContentModal, DataProfile, DescriptionUser, ImageProfile, InfosProfile, Skills} from './styles'
import { ButtonLogout } from '@components/button-logout'
import api from 'src/services/api'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/modules/rootReducer'
import { useRouter } from 'next/router'
import { Stars } from '@components/stars'
import { Modal } from '@components/modal'

export default function ProfilePage() {
  const [skills, setSkills] = useState([])
  const userData = useSelector((state: RootState) => state?.user)
  const [mySkills, setMySKills] = useState([])
  const [openModal, setOpenModal] = useState({isOpen: false, type: ''})
  const router = useRouter()

  useEffect(() => {
    if (!true) {} // user.data !== 'freela'

    renderBalance()
  })

  function closeModal() {
    setOpenModal(prevState => { return { ...prevState, isOpen: false} })
  }

  function goToHome() {
    if (userData.tipoe === 'freela') return '/initial-page'

    return '/initial-page-brand'
  }

  function renderModal() {
    if (!openModal.isOpen) return null

    if (openModal.type === 'cancel') {
      return (
        <Modal
          isOpen={openModal.isOpen}
          onRequestClose={() => closeModal()}
        >
          <ContentModal>
            <p>Você tem certeza que deseja cancelar?</p>
            <div className='buttons'>
              <button className='button yes' onClick={() => router.push(goToHome())}>Sim</button>
              <button className='button no' onClick={() => closeModal()}>Não</button>
            </div>
          </ContentModal>
        </Modal>
      )
    }

    if (openModal.type === 'delete') {
      return (
        <Modal
          isOpen={openModal.isOpen}
          onRequestClose={() => closeModal()}
        >
          <ContentModal>
            <p>Você tem certeza que deseja excluir seu perfil?</p>
            <div className='buttons'>
              <button className='button yes' onClick={() => deleteProfile()}>Sim</button>
              <button className='button no' onClick={() => closeModal()}>Não</button>
            </div>
          </ContentModal>
        </Modal>
      )
    }

    return (
      <Modal
        isOpen={openModal.isOpen}
        onRequestClose={() => closeModal()}
      >
        <ContentModal>
          <p>Você tem certeza que deseja salvar?</p>
          <div className='buttons'>
            <button className='button yes' onClick={() => saveChanges()}>Sim</button>
            <button className='button no' onClick={() => closeModal()}>Não</button>
          </div>
        </ContentModal>
      </Modal>
    )
  }

  function deleteProfile() {
    userData.tipo === 'freela' ? disableProfileFreelancers() : disableProfileBrand()
  }

  function saveChanges() {

  }

  function renderBalance() {
    return (
      <div className='wrapper-content'>
        <p className='wrapper-content__title'>Seu saldo é de: <span>R${'user.balance'}</span></p>
        <button onClick={() => notImplements()} className='button secondary'>Sacar saldo</button>
      </div>
    )
  }

  function notImplements() {
    alert('Desculpe, funcionalidade não implementada!')
  }

  async function disableProfileFreelancers() {
    try {
      const response = await api.delete('api/Freelancer/DeletarFreelancer')

      if (response.status === 200) router.push('/')

      return response
    } catch (error) {
      console.log(`Não foi possível excluir o perfil do freelancer devido ao erro [${error}]`)
    }
  }

  async function disableProfileBrand() {
    try {
      const response = await api.delete('api/Empresa/DeletarEmpresa')

      if (response.status === 200) router.push('/')

      return response
    } catch (error) {
      console.log(`Não foi possível excluir o perfil da empresa devido ao erro [${error}]`)
    }
  }

  function renderSkills() {
    if (!skills) return <p>Nenhuma skill cadastrada</p>
  
    return skills.map((skill) => {
      return <CheckboxSkill name={skill.nome} id={skill.id} key={skill.id} onChecked={() => setMySKills(skill.id)}/>
    })
  }

  async function sendMySkills() {
    try {
      const response = await api.post('/api/', mySkills)
    } catch (error) {
      console.log(`Ocorreu o erro [${error}] ao tentar atribuir as skills selecionadas.`)
    }
  }

  useEffect(() => {
    async function getSkills() {
      try {
        const response = await api.get('/api/Sklls/getSkills')
        setSkills(response.data)
  
      } catch (error) {
        console.log(`Ocorreu o erro [${error}] ao tentar listar as skills cadastradas.`)
      }
    }

    getSkills()
  }, [])

  return (
    <Main>
      {renderModal()}
      <ButtonLogout />
      <ContainerProfile>
        <InfosProfile>
          <ImageProfile>
            <div className='image'>
              user
            </div>
            <div>
            <label htmlFor="change-image" className='button image-button tertiary' >Alterar</label>
            <input type='file' id='change-image' name='change-image'/>
            </div>
          </ImageProfile>
          <DataProfile>
            <input type='text' id='name' defaultValue={'user.nome'} className='input-profile' />
            <input type='text' id='name' defaultValue={'user.email'} className='input-profile' disabled={true}/>
            <div className='wrapper-content'>
              <input type='password' id='name' defaultValue={'user.senha'} className='wrapper-content__input input-profile' disabled={true}/>
              <button onClick={() => notImplements()} className='button secondary'>Solicitar alteração de senha</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Sua reputação: </p>
              <div className='wrapper-content__stars'><Stars stars={0} /></div>
            </div>
            <input type="text" id='phone' defaultValue={'user.telefone'} className='input-profile'/>
            <div className='wrapper-address'>
              <input type="text" id='cep' name='id' defaultValue={'user.cep'} className='wrapper-address__input input-profile'/>
              <input type="text" id='number' name='number' defaultValue={'user.numero'} className='wrapper-address__input input-profile'/>
              <input type="text" id='address' name='address' defaultValue={'user.logradouro'} className='wrapper-address__input input-profile'/>
              <input type="text" id='city' name='city' defaultValue={'user.cidade'} className='wrapper-address__input input-profile'/>
              <input type="text" id='district' name='district' defaultValue={'user.bairro'} className='wrapper-address__input input-profile'/>
              <input type="text" id='state' name='state' defaultValue={'user.estado'} className='wrapper-address__input input-profile'/>
            </div>
            <div className='wrapper-content'>
              <button className='button primary' onClick={() => setOpenModal({isOpen: true, type: 'cancel'})} >Cancelar alterações</button>
              <button className='button tertiary' onClick={() => setOpenModal({isOpen: true, type: 'save'})}>Salvar</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Seu plano é o: <span>{'user.plano'}</span></p>
              <button onClick={() => notImplements()} className='button secondary'>Alterar plano</button>
            </div>
            {renderBalance()}
          </DataProfile>
        </InfosProfile>
        <DescriptionUser>
          <label htmlFor="description-user">Descreva-se:</label>
          <textarea name="description-user" id="description-user" className='description-user' placeholder='Use esse espaço para definir quem é você...'></textarea>
        </DescriptionUser>
        <Skills>
          <h2>Marque e atribua as skills que você se identifica</h2>
          <div className='wrapper-skills'>
            {renderSkills()}
          </div>
          
        </Skills>
        <button className='button-disable-profile' onClick={() => setOpenModal({isOpen: true, type: 'delete'})} >Excluir perfil</button>
      </ContainerProfile>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}