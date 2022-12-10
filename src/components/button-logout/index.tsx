import { ContainerButton } from "./styles";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import * as UserActions from '../../store/modules/user/actions'

export function ButtonLogout() {
  const dispatch = useDispatch()
  const router = useRouter()

  function logout() {
    dispatch(UserActions.logout())
    router.push('/')
  }

  return (
    <ContainerButton onClick={() => logout()}>
      Sair
    </ContainerButton>
  )
}