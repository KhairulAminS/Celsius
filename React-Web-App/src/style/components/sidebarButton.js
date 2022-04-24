
export const SidebarButton = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary: (props) => ({
            boxSize: '7vh',
            bg: 'primary',
            color: 'white',
            fontSize: '3vh',
            borderRadius: '50%',
            transition: 'all 0.2s ease-out',
            _hover:{
                borderRadius: '10%'
            },
            _active:{
                borderRadius: '10%'
            }
        })
    },
    // The default `size` or `variant` values
    defaultProps: {},
}