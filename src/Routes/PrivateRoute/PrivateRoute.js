import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (<button type="button" className="bg-indigo-500" disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>)
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
        // return <Navigate to="/signin"></Navigate>
    }
    return children;
};

export default PrivateRoute;