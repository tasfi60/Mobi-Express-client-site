import React from 'react';
import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation='border' variant='primary'/>
    }
    
    if(!user)
    {
        return <Navigate to='/Login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;