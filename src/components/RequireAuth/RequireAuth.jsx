import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth(props) {

    const [isAuth, setIsAuth] = useState(false);

    // useEffect(() => {
    //   axios.get('/is-auth')
    //   .then((res) => {
    //     setIsAuth((res.status == 200))
    //     })
    // }, [])
    
    return (isAuth ? 
      (props.children) 
      :
      (<Navigate to="/login" replace />))
}