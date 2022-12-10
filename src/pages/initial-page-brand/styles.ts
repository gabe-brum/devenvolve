import theme from "@styles/theme";
import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .welcome {
    text-align: center;

    @media (min-width: ${theme.breakpoints.tablet}) {
      text-align: start;
    }

    h1 {
      font-family: 'Antonio', sans-serif;
    }

    p {
      font-family: 'Sacramento', cursive;
      font-size: 24px;
    }
  }

  .input-search {
    display: flex;
    position: relative;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      height: 30px;
      width: auto;
    }

    &__input {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid ${theme.colors.blackGray};
      font-size: 18px;
      font-family: 'Antonio', sans-serif;
      outline: none;
      padding: 5px 25px 5px 0;
      width: 100%;

      &::placeholder {
        color: ${theme.colors.blackGray};
      }
    }

    &__button {
      background-color: transparent;
      border: none;
      bottom: 5px;
      cursor: pointer;
      position: absolute;
      right: 0;

      > img {
        height: 25px;
        width: 25px;

        @media (min-width: ${theme.breakpoints.tablet}) {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`

export const FreelancerList = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Sacramento', cursive;
  margin: 40px 0;
  width: 100%;

  .not-found-freelancers {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    text-align: center;
    gap: 20px;
    flex-direction: column;

    > p {
      color: ${theme.colors.darkGreen};
      font-size: 32px;

      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 55px;
      }
    }
  }
`

export const FooterInfos = styled.div`
  color: ${theme.colors.darkGreen};
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Antonio', sans-serif;
    position: fixed;
    bottom: 15px;
    width: 95%;
    z-index: -1;
  }
`