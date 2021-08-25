import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import { HOME_URL, LOGIN_URL, PROFILE_URL } from "./Urls";
import Auth from "../pages/Auth";
import Counter from "../pages/Counter";
import Profile from "../pages/Profile";

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path={HOME_URL} exact>
        <Counter />
      </PublicRoute>
      <PublicRoute path={LOGIN_URL}>
        <Auth />
      </PublicRoute>
      <PrivateRoute path={PROFILE_URL}>
        <Profile />
      </PrivateRoute>
      <Redirect to={HOME_URL} />
    </Switch>
  </Router>
);

export default AppRouter;
