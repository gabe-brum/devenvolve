import theme from "@styles/theme";
import styled from "styled-components";

export const Menu = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&display=swap'); // Antonio
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap'); // Sacramento

  font-family: 'Antonio', sans-serif;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0.5rem 0rem;
  background-color: ${theme.colors.lightGreen};
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid ${theme.colors.darkGreen};
  z-index: 2;

  .home {
    text-decoration: none;
    color: ${theme.colors.darkGreen};
    font-size: ${theme.fontSizes.large};
  }

  .button > span {
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background-color: ${theme.colors.darkGreen};
  }

  .button > span:not(:last-child) {
    margin-bottom: 7px;
  }

  .button, .button > span {
    transition: all .4s ease-in-out;
  }

  .button.active {
    transition-delay: 0.2s;
    transform: rotate(45deg);

    > span:nth-child(2) {
      width: 0;
    }

    > span:nth-child(1), span:nth-child(3) {
      transition-delay: .4s;
    }

    > span:nth-child(1) {
      transform: translateY(9px);
    }

    > span:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
  }
`

export const MenuList = styled.div`
  ul {
    background-color: ${theme.colors.green};
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    position: fixed;
    width: 100%;
    z-index: 1;

    &.show {
      display: block;
      padding-top: 60px;
      max-height: 100vh;
    }

    > li {
    list-style-type: none;
    padding: 10vh 0;
    text-align: center;
    border-bottom: 1px solid ${theme.colors.lightGreen};

      > a {
      text-decoration: none;
      color: ${theme.colors.blackGray};
      font-size: ${theme.fontSizes.medium};
      font-family: 'Antonio', sans-serif;
      font-weight: 100;
      width: 100%;
      }
    }
  }  
`

export const MenuDesktop = styled.nav`
  background-color: ${theme.colors.lightGreen};
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  z-index: 1;

  ul {
    align-items: center;
    display: inline-flex;
    list-style-type: none;

    > li {
      font-size: ${theme.fontSizes.medium};
      padding: 0 5px;
      cursor: pointer;
     
      > a {
        color: ${theme.colors.darkGreen};
        font-family: 'Antonio', sans-serif;
        text-decoration: none;

        &.menuClicked {
          font-weight: ${theme.fontWeights.bold};
        }
      }
    }
  }
`