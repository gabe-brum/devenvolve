import Card from "@components/card";
import theme from "@styles/theme";
import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktopSmall}) {
    flex-direction: row;
  }
`
