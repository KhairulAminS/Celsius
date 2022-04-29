import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import { RiAddFill } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'


function TableMenu() {

const bgColor = useColorModeValue('bgColor.light', 'bgColor.dark')
const color = useColorModeValue('light', 'dark')

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HiMenu />}
                variant='ghost'
                size='sm'
                fontSize='20'
                bgColor={bgColor} color={color}
            />
            <MenuList>
                <MenuItem icon={<RiAddFill />} bgColor={bgColor} color={color}>
                    New Tab
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default TableMenu;