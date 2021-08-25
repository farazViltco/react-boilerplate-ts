import { Route, Redirect } from "react-router-dom";
import { LOGIN_URL } from "./Urls";

const PrivateRoute = (props: any) => {
  const Redux_Auth_token = true;

  if (Redux_Auth_token) return <Route {...props}>{props.children}</Route>;
  return <Redirect to={LOGIN_URL} />;
};

export default PrivateRoute;
