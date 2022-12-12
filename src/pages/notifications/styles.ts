import theme from "@styles/theme";
import styled from "styled-components";

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Sacramento', cursive;
  color: ${theme.colors.darkGreen};
  align-items: center;

  .not-found-notifications {
    font-size: 36px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 55px;
    }
  }
`