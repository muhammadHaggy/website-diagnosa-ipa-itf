import { removeUserSession } from "utils/authUtils";
import { Navigate } from "react-router-dom";
export default function Logout() {
    removeUserSession()
    return <Navigate to="/" />
  }