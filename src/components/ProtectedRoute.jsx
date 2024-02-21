import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AppContext from "../contexts/AppContext.js";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(AppContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
