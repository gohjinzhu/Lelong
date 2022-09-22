import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode,Button } from '@chakra-ui/react'

function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <SunIcon/> : <MoonIcon/> }
            </Button>
    )
}

export default ColorModeToggle