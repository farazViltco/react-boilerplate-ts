import { Route } from 'react-router-dom';

const PublicRoute = (props: any) => {
    return <Route {...props} >{props.children}</Route>
}

export default PublicRoute;