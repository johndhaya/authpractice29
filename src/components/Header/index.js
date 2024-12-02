import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="head">
    <ul className="nav-menu">
      <li>
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
