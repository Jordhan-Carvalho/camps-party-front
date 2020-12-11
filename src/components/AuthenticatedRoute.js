import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jwt-decode";

import { userContext } from "../contexts/UserContext";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    if (user) verifyTokenExp();
  }, []);

  const verifyTokenExp = () => {
    if (jwt(user.token).exp < Date.now() / 1000) {
      setUser(null);
    }
  };

  return (
    <Route {...rest}>{user ? children : <Redirect to={`/login`} />}</Route>
  );
}
