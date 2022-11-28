import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Allpages/hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


// import useAdmin from '../../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email);
    console.log(user.email)
    const location = useLocation();


    //spinner

    // if (loading || isAdminLoading) {
    //     return <Loading></Loading>
    // }

    if (loading || isAdminLoading) {
        return <Spinner animation='border' variant='primary' />

    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;