import { Route } from "react-router-dom"

import EditLayout from "./EditLayout"

export default function EditRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <EditLayout>
          <Component {...props} />
        </EditLayout>
      )}
    />
  )
}
