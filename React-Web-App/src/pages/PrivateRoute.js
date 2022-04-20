import { useKeycloak } from "@react-keycloak/web";
import React from 'react';
import {} from '@chakra-ui/react'


const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : notLoggedIn;
};

function notLoggedIn(){
    return <div>You are not authorized to view this page.</div>
}

export default PrivateRoute;