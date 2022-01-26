import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// components
import EditContact from "../containers/contact/edit-contact/EditContact"
import ListContacts from "../containers/contact/list-contact/ListContacts"
// Layouts
import EditRouter from "../layouts/edit/EditRouter"
import HomeRouter from "../layouts/home/HomeRouter"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={ListContacts} />
        <EditRouter exact path="/edit/:contactId" component={EditContact} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
