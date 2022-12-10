/* eslint-disable @next/next/no-html-link-for-pages */
import react, { useEffect, useState } from 'react'
import { Menu, MenuDesktop, MenuList } from './styles'
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import Link from 'next/link';

export default function HeaderMenu() {
  const [shouldShowListMenu, setShouldShowListMenu] = useState(false)

  let isMobile: boolean;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 768
  }

  function handleClickMenu() {
    setShouldShowListMenu(!shouldShowListMenu)
  }

  function renderMenu() {
    if (isMobile) {
      return (
        <>
        <Menu>
          <a href="/home" className='home'>DevEnvolve</a>
          <div onClick={() => handleClickMenu()} className={`button ${shouldShowListMenu ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Menu>
        <MenuList>
        <ul className={`${shouldShowListMenu? 'show' : ''}`}>
          <li onClick={() => setShouldShowListMenu(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setShouldShowListMenu(false)}>
            <a href="#plans">Planos</a>
          </li>
          <li onClick={() => setShouldShowListMenu(false)}>
            <a href="#about">Sobre a DevEnvolve</a>
          </li>
          <li onClick={() => setShouldShowListMenu(false)}>
            <a href="#login">Login</a>
          </li>
        </ul>
      </MenuList>
      </>
      )
    }

    return (
      <MenuDesktop>
        <ul>
          <li>
            <LinkScroll 
            activeClass='menuClicked'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Home
            </LinkScroll>
          </li>
          <li>|</li>
          <li>
            <LinkScroll 
            activeClass='menuClicked'
            to='plans'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Planos
            </LinkScroll>
          </li>
          <li>|</li>
          <li>
            <LinkScroll 
            activeClass='menuClicked'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Sobre a DevEnvolve
            </LinkScroll>
          </li>
          <li>|</li>
          <li>
            <LinkScroll 
            activeClass='menuClicked'
            to='login'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              Login
            </LinkScroll>
          </li>
        </ul>
      </MenuDesktop>
    )
  }

  return renderMenu()
}