import Image from 'next/image'
import react, { useState } from 'react'
import { Footer } from './styles'
import home from '../../imgs/icons/home.png'
import demands from '../../imgs/icons/application.png'
import registerDemands from '../../imgs/icons/demand.png'
import notification from '../../imgs/icons/bell.png'
import user from '../../imgs/icons/new-user.png'
import Link from 'next/link'
import { NavigationFooterProps } from './types'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/modules/rootReducer'

export default function NavigationFooter({ active }: NavigationFooterProps) {
  const userData = useSelector((state: RootState) => state?.user)

  function renderItems() {
    if (true) { // userData.tipo === 'freela'
      return (
        <Footer>
          <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/initial-page"} passHref >
            <Image src={home} alt="Página inicial" />
          </Link>
          <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/application-demand"} passHref >
            <Image src={demands} alt="Candidatura às demandas" />
          </Link>
          <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/notifications"} passHref >
            <Image src={notification} alt="Notificações" />
          </Link>
          <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/profile"} passHref >
            <Image src={user} alt="Perfil do usuário" />
          </Link>
        </Footer>
      )
    }
  
    return (
      <Footer>
       <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/initial-page"} passHref >
          <Image src={home} alt="Página inicial" />
        </Link>
        <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/registers-demands"} passHref >
          <Image src={registerDemands} alt="Demandas cadastradas" />
        </Link>
        <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/notifications"} passHref >
          <Image src={notification} alt="Notificações" />
        </Link>
        <Link className={`itemMenu ${active ? 'clicked' : ''}`} href={"/profile"} passHref >
          <Image src={user} alt="Perfil do usuário" />
        </Link>
      </Footer>
    )
  }

  return renderItems()
}