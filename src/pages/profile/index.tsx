import CheckboxSkill from '@components/checkbox-skills'
import NavigationFooter from '@components/navigation-footer'
import { Footer, Main } from '@styles/pages/default'
import react, { useEffect } from 'react'
import { ContainerProfile, DataProfile, DescriptionUser, ImageProfile, InfosProfile, Skills} from './styles'

export default function ProfilePage() {

  useEffect(() => {
    if (!true) // usuário empresa

    renderBalance()
  })

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

  function disableProfile() {

  }

  function renderSkills() {
    // fazer requisição das skills cadastradas
    const skills = []

    return skills.map((skill) => {
      return <CheckboxSkill name={skill.name} id={skill.id} key={skill.id} />
    })
  }

  return (
    <Main>
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
            <input type='text' id='name' defaultValue={'user.name'} className='input-profile' />
            <input type='text' id='name' defaultValue={'user.email'} className='input-profile' disabled={true}/>
            <div className='wrapper-content'>
              <input type='password' id='name' defaultValue={'user.password'} className='wrapper-content__input input-profile' disabled={true}/>
              <button onClick={() => notImplements()} className='button secondary'>Solicitar alteração de senha</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Sua reputação: </p>
              <div className='wrapper-content__stars'>{'user.stars'}</div>
            </div>
            <input type="text" id='phone' defaultValue={'user.phone'} className='input-profile'/>
            <div className='wrapper-address'>
              <input type="text" id='cep' name='id' defaultValue={'user.cep'} className='wrapper-address__input input-profile'/>
              <input type="text" id='number' name='number' defaultValue={'user.number'} className='wrapper-address__input input-profile'/>
              <input type="text" id='address' name='address' defaultValue={'user.address'} className='wrapper-address__input input-profile'/>
              <input type="text" id='city' name='city' defaultValue={'user.city'} className='wrapper-address__input input-profile'/>
              <input type="text" id='district' name='district' defaultValue={'user.district'} className='wrapper-address__input input-profile'/>
              <input type="text" id='state' name='state' defaultValue={'user.state'} className='wrapper-address__input input-profile'/>
            </div>
            <div className='wrapper-content'>
              <button className='button primary'>Cancelar alterações</button>
              <button className='button tertiary'>Salvar</button>
            </div>
            <div className='wrapper-content'>
              <p className='wrapper-content__title'>Seu plano é o: <span>{'user.plan'}</span></p>
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
        <button className='button-disable-profile' onClick={() => disableProfile()}>Desativar perfil</button>
      </ContainerProfile>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}