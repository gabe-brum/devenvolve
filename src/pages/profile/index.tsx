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
  const [hasChanges, setHasChanges] = useState(false)
  const [newPasswordProfile, setNewPasswordProfile] = useState('')

  function renderBalanceFreelancer() {
    if (userData?.tipo !== 'freela') return null

    return (
      <div className='wrapper-content'>
        <p className='wrapper-content__title'>Seu saldo é de: <span>R${returnBalance(userData?.saldo)}</span></p>
        <button onClick={() => notImplements()} className='button secondary'>Sacar saldo</button>
      </div>
    )
  }

  function closeModal() {
    setOpenModal(prevState => { return { ...prevState, isOpen: false} })
  }

  function goToHome() {
    if (userData?.tipo === 'freela') return '/initial-page'

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

    if (openModal.type === 'new-password') {
      return (
        <Modal
          isOpen={openModal.isOpen}
          onRequestClose={() => closeModal()}
        >
          <ContentModal>
            <p>Informe sua senha abaixo:</p>
            <div className='password'>
              <label htmlFor="new-password">Nova senha:</label>
              <input type="password" id='new-password' name='new-password' onChange={(e) => setNewPasswordProfile(e.target.value)}/>
              <button onClick={() => newPassword()}>Alterar</button>
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
    userData?.tipo === 'freela' ? disableProfileFreelancers() : disableProfileBrand()
  }

  function saveChanges() {
    sendMySkills()
    alert('Alterações salvas com sucesso!')

    if (userData?.tipo === 'freela') router.push('/initial-page')
    if (userData?.tipo === 'empresa') router.push('/initial-page-brand')
  }

  function returnBalance(balance: number) {
    return '0,00'
  }

  function notImplements() {
    alert('Desculpe, funcionalidade não implementada!')
  }

  async function newPassword() {
    const isFreelancer = userData?.tipo === 'freela'

    try {
      if (!isFreelancer) {
        const response = await api.patch(`/api/Empresa/SenhaEmpresa?senha=${newPasswordProfile}`)
        if (response.status === 200) { 
          alert("Senha alterada com sucesso")
          window.location.reload()
        }
      }

      const response = await api.patch(`/api/Freelancer/SenhaFreela?senha=${newPasswordProfile}`)
      if (response.status === 200) { 
        alert("Senha alterada com sucesso")
        window.location.reload()
      }
  
    } catch (error) {
      console.log(`Não foi possível alterar a senha do usuário devido ao erro [${error}]`)
    }
  }

  async function disableProfileFreelancers() {
    try {
      const response = await api.delete('/api/Freelancer/DeletarFreelancer')

      if (response.status === 200) router.push('/')

      return response
    } catch (error) {
      console.log(`Não foi possível excluir o perfil do freelancer devido ao erro [${error}]`)
    }
  }

  async function disableProfileBrand() {
    try {
      const response = await api.delete('/api/Empresa/DeletarEmpresa')

      if (response.status === 200) router.push('/')

      return response
    } catch (error) {
      console.log(`Não foi possível excluir o perfil da empresa devido ao erro [${error}]`)
    }
  }

  function renderSkills() {
    if (!skills.length) return <p>Nenhuma skill cadastrada</p>
  
    return skills.map((skill) => {
      return <CheckboxSkill name={skill.descricao} id={skill.idSkill} key={skill.idSkill} onChecked={() => setMySKills(skill.idSkill)}/>
    })
  }

  function renderSkillsFreelancer() {
    if (userData?.tipo !== 'freela') return null

    return (
      <Skills>
      <h2>Marque e atribua as skills que você se identifica</h2>
      <div className='wrapper-skills'>
        {renderSkills()}
      </div>
      
    </Skills>
    )
  }

  async function sendMySkills() {
    try {
      const response = await api.post('/api/Skills/PostSkillsFreelancer', mySkills)
      return response.data

    } catch (error) {
      console.log(`Ocorreu o erro [${error}] ao tentar atribuir as skills selecionadas.`)
    }
  }

  useEffect(() => {
    async function getSkills() {
      try {
        const response = await api.get('/api/Skills/getSkills')
        setSkills(response.data)
  
      } catch (error) {
        console.log(`Ocorreu o erro [${error}] ao tentar listar as skills cadastradas.`)
      }
    }

    getSkills()
  }, [])

  function returnPlan(plan: number) {
    if (plan === 0) return 'Start'
    if (plan === 1 ) return 'Silver'
    if (plan === 2) return 'Gold'

    return 'Start'
  }

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
            <input type='text' id='name' defaultValue={userData?.nome} className='input-profile' onChange={() => setHasChanges(true)}/>
            <input type='text' id='name' defaultValue={userData?.email} className='input-profile' disabled={true}/>
            <div className='wrapper-content'>
              <input type='password' id='name' defaultValue={userData?.senha} className='wrapper-content__input input-profile' disabled={true}/>
              <button onClick={() => setOpenModal({isOpen: true, type: 'new-password'})} className='button secondary'>Solicitar alteração de senha</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Sua reputação: </p>
              <div className='wrapper-content__stars'><Stars stars={0} /></div>
            </div>
            <input type="text" id='phone' defaultValue={userData?.celular} className='input-profile' onChange={() => setHasChanges(true)}/>
            <div className='wrapper-address'>
              <input type="text" id='cep' name='id' defaultValue={userData?.cep} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
              <input type="text" id='number' name='number' defaultValue={userData?.numero} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
              <input type="text" id='address' name='address' defaultValue={userData?.logradouro} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
              <input type="text" id='city' name='city' defaultValue={userData?.cidade} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
              <input type="text" id='district' name='district' defaultValue={userData?.bairro} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
              <input type="text" id='state' name='state' defaultValue={userData?.estado} className='wrapper-address__input input-profile' onChange={() => setHasChanges(true)}/>
            </div>
            <div className='wrapper-content'>
              <button className='button primary' disabled={!hasChanges} onClick={() => setOpenModal({isOpen: true, type: 'cancel'})} >Cancelar alterações</button>
              <button className='button tertiary' onClick={() => setOpenModal({isOpen: true, type: 'save'})}>Salvar</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Seu plano é o: <span>{returnPlan(userData?.idPlano)}</span></p>
              <button onClick={() => notImplements()} className='button secondary'>Alterar plano</button>
            </div>
            {renderBalanceFreelancer()}
          </DataProfile>
        </InfosProfile>
        <DescriptionUser>
          <label htmlFor="description-user">Descreva-se:</label>
          <textarea name="description-user" id="description-user" className='description-user' placeholder='Use esse espaço para definir quem é você...' defaultValue={userData?.descricao}></textarea>
        </DescriptionUser>
        {renderSkillsFreelancer()}
        <button className='button-disable-profile' onClick={() => setOpenModal({isOpen: true, type: 'delete'})} >Excluir perfil</button>
      </ContainerProfile>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}