import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const SESSION_ENDPOINT = "http://localhost:5001/api/users/session";

export default function RequireAuth({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "POST",
      withCredentials: true,
      url: SESSION_ENDPOINT,
    }).then((res) => {
      setIsAuth(res.status === 200);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <></>
  ) : isAuth && !loading ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}
