import { CardOne, CardThree, CardTwo } from "@components/card/styles";
import { ContainerCard } from "./styles";
import { CardsProps } from "./types";
import { Link } from "react-scroll";

export default function Cards({ type }: CardsProps) {

  function focusUserToRegister() {
    let inputName = document.getElementById('name')
    inputName.focus()
  }

  function renderCards() {
    if (type === 'freelancers') {
      return (
        <ContainerCard>
          <CardOne>
            <div className="initial">
              <p className="title">Start</p>
              <div className="content">
                <p>Tenha acesso a uma vasta quantidade das</p>
                <span>melhores</span>
                <p>demandas para freelancers</p>
              </div>
              <button className="button-card">Ver mais</button>
            </div>
            <div className="details one">
              <p className="title">Start</p>
              <div className="content">
                <p></p>
                <span>gratuito</span>
                <p></p>
              </div>
              <button className="button-card">
                <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
              </button>
            </div>
          </CardOne>
          <CardTwo>
            <div className="initial">
              <p className="title">Silver</p>
              <div className="content">
                <p>Para cada indicação ganhe até</p>
                <span>15%</span>
                <p>no valor da demanda</p>
              </div>
              <button className="button-card">Ver mais</button>
            </div>
            <div className="details two">
              <p className="title">Silver</p>
              <div className="content">
                <p>Por apenas</p>
                <span><span>R$</span>24,90</span>
                <p>ao mês</p>
              </div>
              <button className="button-card">
                <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
              </button>
            </div> 
          </CardTwo>
          <CardThree>
            <div className="initial">
              <p className="title">Gold</p>
              <div className="content">
                <p>Para cada indicação ganhe até</p>
                <span>30%</span>
              <p>no valor da demanda</p>
              </div>
              <button className="button-card">Ver mais</button>
            </div>
            <div className="details three">
              <p className="title">Gold</p>
              <div className="content">
                <p>Por apenas</p>
                <span><span>R$</span>39,90</span>
                <p>por mês</p>
              </div>
              <button className="button-card">
                <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
              </button>
            </div>
          </CardThree>
        </ContainerCard>
      )
    }

    return (
      <ContainerCard>
        <CardOne>
          <div className="initial">
            <p className="title">Start</p>
            <div className="content">
              <p>Cadastre até</p>
              <span>1</span>
              <p>demanda por mês</p>
            </div>
            <button className="button-card">Ver mais</button>
          </div>
          <div className="details one">
            <p className="title">Start</p>
            <div className="content">
              <p></p>
              <span>gratuito</span>
              <p></p>
            </div>
            <button className="button-card">
              <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
            </button>
          </div>
        </CardOne>
        <CardTwo>
          <div className="initial">
            <p className="title">Silver</p>
            <div className="content">
              <p>Cadastre até</p>
              <span>1</span>
              <p>demanda por semana</p>
            </div>
            <button className="button-card">Ver mais</button>
          </div>
          <div className="details two">
            <p className="title">Silver</p>
            <div className="content">
              <p>Por apenas</p>
              <span><span>R$</span>24,90</span>
              <p>por mês</p>
            </div>
            <button className="button-card">
              <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
            </button>
          </div>
        </CardTwo>
        <CardThree>
          <div className="initial">
            <p className="title">Gold</p>
            <div className="content">
              <p>Maior relevância em pesquisas e demandas</p>
              <span>livres</span>
              <p>para cadastro</p>
            </div>
            <button className="button-card">Ver mais</button>
          </div>
          <div className="details three">
            <p className="title">Gold</p>
            <div className="content">
              <p>Por apenas</p>
              <span><span>R$</span>39,90</span>
              <p>por mês</p>
            </div>
            <button className="button-card">
              <Link 
                to='login'
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
                onClick={() => focusUserToRegister()}
                >
                  Assinar
                </Link>
            </button>
          </div>
        </CardThree>
      </ContainerCard>
    )
  }

  return (
    <>
      {renderCards()}
    </>
  )
}