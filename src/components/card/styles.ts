import theme from "@styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 5px ${theme.colors.blackGray};
  display: flex;
  flex-direction: column;
  font-family: 'Antonio', sans-serif;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 250px;
  position: relative;
  width: 100%;

  &:hover .details {
    transform: perspective(2000px) rotateY(0deg);
  }

  .initial {
    width: 100%;
    transition: .5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;

  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    transform-origin: left;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    transform: perspective(2000px) rotateY(-90deg);
    border-radius: 20px;

    &.one {
      background-color: ${theme.colors.lightGray};
    }

    &.two {
      background-color: ${theme.colors.green};
    }

    &.three {
      background-color: ${theme.colors.darkGreen};
    }

    > .content > span > span {
      font-size: 16px;
      margin-right: 10px;
    }
  }
 
  .title {
      font-size: ${theme.fontSizes.large};
    }

    p {
      font-size: ${theme.fontSizes.small};
    }

    .content {
      text-align: center;
    }

    span {
      font-size: ${theme.fontSizes.xxLarge}
    }

    .button-card {
      background-color: ${theme.colors.blackGray};
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 30px;
      font-family: 'Antonio', sans-serif;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.lightGreen};
      height: 30px;
      width: 150px;
    }

`

export const CardOne = styled(Card)`
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.darkGreen};

  .title {
    color: ${theme.colors.blackGray};
  }
`

export const CardTwo = styled(Card)`
  background-color: ${theme.colors.green};
  color: ${theme.colors.lightGreen};

  .title {
    color: ${theme.colors.lightGray};
  }
`

export const CardThree = styled(Card)`
  background-color: ${theme.colors.darkGreen};
  color: ${theme.colors.lightGray};

  .title {
    color: ${theme.colors.lightGreen};
  }
`
