import React from "react";
import { Redirect, Route } from "react-router-dom";
import { DataContext } from "../../Context/DataContextProvider";

// PrivateRoute component consumes isAuth state from DataContextProvider and redirects user to the corresponding page or login page based on that

export const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <DataContext.Consumer>
      {({ isAuth }) => {
        return isAuth ? (
          <Route {...rest} render={(props) => <Component {...props} />} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </DataContext.Consumer>
  );
};
