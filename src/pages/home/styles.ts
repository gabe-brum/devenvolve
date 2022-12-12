import theme from "@styles/theme";
import styled from "styled-components";
import background from '../../imgs/assets/background.png'

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&display=swap'); // Antonio
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap'); // Sacramento

  display: flex;
  flex-direction: column;
  font-family: 'Antonio', sans-serif;
  justify-content: center;
  padding: 200px 20px;

  h2 {
    margin-bottom: 20px;
    color: ${theme.colors.darkGreen};
  }
`

export const ContainerHome = styled(Container)`
  background-image: url(https://www.pngmart.com/files/8/Lines-PNG-Free-Image.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  height: 105vh;

  @media (min-width: ${theme.breakpoints.tablet}) {
    background-image: none;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 105vh;
  }

  @media (min-width: ${theme.breakpoints.desktopSmall}) {
    height: 105vh;
  }

  h1 {
    font-family: 'Sacramento', cursive;
    text-align: center;
    font-size: 36px;
    color: ${theme.colors.darkGreen};
    font-weight: ${theme.fontWeights.light};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fontSizes.xxLarge};
    }
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    align-items: center;

    > img {
      width: 110px;
      height: 125px;

      @media (min-width: ${theme.breakpoints.tablet}) {
        width: 150px;
        height: 100%;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      > p:first-child {
        color: ${theme.colors.darkGreen};
        font-family: 'Antonio', sans-serif;
        font-size: ${theme.fontSizes.larger};

        @media (min-width: ${theme.breakpoints.tablet}) {
          font-size: 3.2em;
        }
      }

      > p:last-child {
        color: ${theme.colors.lightGray};
        font-family: 'Sacramento', cursive;
        font-size: ${theme.fontSizes.large};

        @media (min-width: ${theme.breakpoints.tablet}) {
          font-size: 2em;
        }
      }
    }
  }

  .message {
    color: ${theme.colors.darkGreen};
    font-family: 'Antonio', sans-serif;
    font-size: ${theme.fontSizes.medium};
    text-align: center;
    margin: 40px 15px 0;


    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 2.5em;
      max-width: 1024px;
      margin: 70px 15px 0;
    }
  }
` 

export const ContainerPlans = styled(Container)`
  height: 295vh;

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 215vh;
  }

  @media (min-width: ${theme.breakpoints.desktopSmall}) {
    height: 115vh;
  }
`

export const ContainerAbout = styled(Container)`
  height: 150vh;

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 110vh;
  }

  @media (min-width: ${theme.breakpoints.desktopSmall}) {
    height: 90vh;
  }

  .about__content {
    text-align: justify;
    font-size: 12px;
    color: ${theme.colors.blackGray};
    font-family: 'Antonio', sans-serif;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.darkGreen};

    @media (min-width: ${theme.breakpoints.desktopSmall}) {
      font-size: 16px;
    }
  } 

  .about__call {
    font-size: 14px;
    text-align: center;
    font-style: italic;
    color: ${theme.colors.green};
    margin-bottom: 20px;
  }

  .about-devs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: ${theme.breakpoints.desktopSmall}) {
      flex-direction: row;
      gap: 0 100px;
      margin-top: 50px;
    }

    &__dev {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px 0;
      margin-bottom: 30px;

      > img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      > p {
        color: ${theme.colors.blackGray};
        font-size: 16px;
      }

      &--media {
        display: flex;
        flex-direction: row;
        gap: 0 10px;

        .icon {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`

export const ContainerLogin = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  height: 240vh;

  @media (min-width: ${theme.breakpoints.mobile}) {
    height: 120vh;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 0 20px;
    padding: 0 100px;
    justify-content: center;
    align-items: center;
    height: 150vh;
  }

  .login-wrapper__type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > p {
      font-size: 36px;
      font-family: "Sacramento", cursive;
      margin-bottom: 10px;
    }

    &:first-child {
      border-bottom: 3px solid ${theme.colors.darkGreen};
      padding-bottom: 50px;

      > div {
        min-height: 400px;

        @media (min-width: ${theme.breakpoints.tablet}) {
          min-height: 840px;
        }
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        border-bottom: 0;
        padding-bottom: 0;
        border-right: 3px solid ${theme.colors.darkGreen};
        padding-right: 20px;
      }
    }

    &--card {
      background-color: ${theme.colors.lightGray};
      border-radius: 20px;
      box-shadow: 2px 2px 5px ${theme.colors.blackGray};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      min-height: 840px;
      width: 100%;

      > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Antonio', sans-serif;
        width: 100%;

        > label, .cep-wrapper__item > label {
          font-size: 14px;
          color: ${theme.colors.darkGreen};
          margin-bottom: 5px;
        }

        > input, .cep-wrapper__item > input {
          background-color: ${theme.colors.darkGreen};
          border-radius: 25px;
          padding-left: 10px;
          border: none;
          outline: none;
          height: 45px;
          margin-bottom: 15px;
          color: ${theme.colors.lightGray};
        }

        > small {
          color: ${theme.colors.darkGreen};
          font-size: 10px;
        }

        .cep-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;

          &__item {
            display: flex;
            flex-direction: column;
            width: 140px;

            @media (min-width: ${theme.breakpoints.tablet}) {
              width: 245px;
            }
          }
        }

        .checkbox-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        // checkbox
        .container {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 14px;
          user-select: none;
          color: ${theme.colors.darkGreen};
        }

        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: ${theme.colors.lightGray};
          border: 1px solid ${theme.colors.darkGreen};
        }

        .container:hover input ~ .checkmark {
          background-color: ${theme.colors.lightGreen};
        }

        .container input:checked ~ .checkmark {
          background-color: ${theme.colors.darkGreen};
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .container input:checked ~ .checkmark:after {
          display: block;
        }

        .container .checkmark:after {
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }

        .form-message {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 12px;
          margin: 20px 0;

          &__text {
            font-size: 12px;
            text-transform: uppercase;
            
            &.error {
              color: ${theme.colors.error};
            }

            &.success {
              color: ${theme.colors.green};
            }
          }
        }

        .button-submit {
          background-color: ${theme.colors.blackGray};
          color: ${theme.colors.lightGreen};
          cursor: pointer;
          border-radius: 25px;
          border: none;
          outline: none;
          height: 40px;
          font-family: "Antonio", sans-serif;
          font-weight: ${theme.fontWeights.bold};
          transition: all .5s;
          width: 100%;

          &:hover {
            background-color: ${theme.colors.blackGrayHover};
          }
        }
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to bottom, ${theme.colors.lightGreen}, ${theme.colors.darkGreen});
  font-family: 'Antonio', sans-serif;
  color: ${theme.colors.lightGray};
  justify-content: end;
  padding-bottom: 20px;

  .devs {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &__dev {
      .name {
        font-size: 16px;
      }

      .phone {
        font-size: 11px;
      }
    }
  }

  .copy {
    font-size: 14px;
    text-align: center;
    font-style: italic;
  }
`
