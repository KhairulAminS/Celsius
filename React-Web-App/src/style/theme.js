import { extendTheme } from "@chakra-ui/react";
import { SidebarButton as Button } from "./components/sidebarButton";

export const CelsiusTheme = extendTheme({
    colors:{
        primary: '#f15a29',
        secondary: '#3c93b9'
    },

    components: {
        Button
    }
    
})