import theme from "@styles/theme";
import styled from "styled-components";

export const FreelancerContainer = styled.div`
  background-color: ${theme.colors.lightGray};
  box-shadow: 2px 2px 5px ${theme.colors.blackGray};
  border-radius: 20px;
  color: ${theme.colors.darkGreen};
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  margin: 20px 0;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 15px 30px;
    justify-content: space-between;
  }

  .image {
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Antonio', sans-serif;
    width: 100%;
    height: 200px;

    &__layer {
      background-color: ${theme.colors.blackGray};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      color: ${theme.colors.lightGray};
      height: 100%;
      opacity: 0.6;

      > p {
        font-size: 22px;
      }
    }
  }

  .freelancer {
    display: flex;
    flex-direction: row;
    font-family: 'Antonio', sans-serif;
    gap: 0 15px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 550px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      &--name {
        font-size: 24px;
      }

      &--stars {

      }
    }
  }

  .freelancer-content {
    color: ${theme.colors.darkGreen};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Antonio', sans-serif;
    gap: 15px;
    margin-top: 20px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.tablet}) {
      align-items: end;
      justify-content: space-between;
      margin-top: 0;
      width: 450px;
    }

    &--description {
      border: 1px solid ${theme.colors.green};
      border-radius: 20px;
      padding: 10px;
      width: 100%;

      @media (min-width: ${theme.breakpoints.tablet}) {
        height: 100%;
      }
    }

    &--see-more {
      background-color: ${theme.colors.darkGreen};
      color: ${theme.colors.lightGreen};
      height: 40px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      outline: none;
      transition: all .5s;
      width: 100%;

      &:hover {
        background-color: ${theme.colors.darkGreenHover};
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        height: 60px;
      }
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  justify-content: center;
  align-items: center;
  font-family: 'Antonio', sans-serif;
  font-size: 16px;
  width: 100%;

  .wrapper-content {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    width: 100%;

    &--description {
      border: 1px solid ${theme.colors.darkGreen};
      padding: 10px;
      border-radius: 20px;
    }

    &--skills {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 0 15px;

      .skills {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 0 15px;
        font-size: 12px;
        margin-top: 10px;

        > span {
          display: flex;
          height: 20px;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.lightGreen};
          background-color: ${theme.colors.darkGreen};
          border-radius: 20px;
          width: 100%;
        }
      }
    }
  }
`