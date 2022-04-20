import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

function DisplayDrawer({ onClose, isOpen }) {

    const { keycloak } = useKeycloak();
    let NavigateTo = useNavigate();

    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </DrawerBody>
                <DrawerFooter>
                    {!!keycloak.authenticated && (
                        <Button
                            type="button"
                            className="text-blue-800"
                            onClick={() => {
                                keycloak.logout(NavigateTo("/"))
                            }}
                        >
                            Logout
                        </Button>
                    )}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default DisplayDrawer;