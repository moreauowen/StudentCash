import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const SESSION_ENDPOINT = 'http://localhost:5001/api/users/session';

export default function RequireAuth({children}) {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      axios.post(SESSION_ENDPOINT)
      .then((res) => {
        setIsAuth((res.status === 200))
        })
    }, [])
    
    return (isAuth ? 
      children
      :
      (<Navigate to="/login" replace />))
}
