import { removeUserSession } from "utils/authUtils";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Logout() {
  const navigate = useNavigate();
    useEffect(() => {
      removeUserSession();
      navigate('/auth/login', { replace: true })
    }, []
    )
    return <></>
  }