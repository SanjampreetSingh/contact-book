import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import ContactCardComponent from "../components/contact/list-contacts/ContactCardComponent"

// Layouts
import HomeRouter from "../layouts/home/HomeRouter"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={ContactCardComponent} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
