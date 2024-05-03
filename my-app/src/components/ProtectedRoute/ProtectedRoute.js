import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
  console.log({ isLoggedIn, children });
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}

export default ProtectedRoute;
