import NavigationFooter from "@components/navigation-footer";
import { Footer, Main } from "@styles/pages/default";
import { Notifications } from "./styles";
import { ButtonLogout } from '@components/button-logout'

export default function Notification() {

  function renderNotifications() {
    const notifications = [] // TODO: implementar

    if (notifications.length === 0) {
      return (
        <p className="not-found-notifications">Você não tem nenhuma notificação!</p>
      )
    }

    return notifications.map((notification) => {
      // componente de notificação
    })
  }

  return (
    <Main>
      <ButtonLogout />
      <Notifications>
        {renderNotifications()}
      </Notifications>
      <Footer>
        <NavigationFooter active={true}/>
      </Footer>
    </Main>
  )
}