import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <button type="button" className="logout-btn" onClick={onClickLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
