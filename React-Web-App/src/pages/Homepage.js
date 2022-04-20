import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const { keycloak } = useKeycloak();
    let navigate = useNavigate();

    return (
        <Flex>
            Welcome to the Homepage
            {!keycloak.authenticated && (
                   <Button
                     onClick={() => {
                         keycloak.login(navigate("/secured"))
                        }}
                   >
                     Login
                   </Button>
                 )}
        </Flex>
    );
}

export default Home;