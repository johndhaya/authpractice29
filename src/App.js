import {Route, Switch} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'
import Login from '../Login'
import ProtectedRoute from '../ProtectedRoute'

import './index.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exxact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)
export default App
