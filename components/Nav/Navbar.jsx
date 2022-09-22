import {
    Image, Flex, Button, HStack, chakra, Text, VStack, Spacer, Divider, Center,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,
    Tooltip, Avatar,
} from '@chakra-ui/react';
import Logo from '../../assets/images/logo.png';
import Link from 'next/link';
import React, { useContext } from "react";
import { IoMdMenu } from 'react-icons/io';
import Register from './Register';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';
import DefaultProfilePhoto from '../../assets/images/defaultProfilePhoto.jpg'
import ColorModeToggle from '../ColorModeToggle';

export default function Header() {
    const { currentUser, logout } = useContext(AuthContext)


    return (
        <chakra.header id="header" >
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="flex-start"
                gap={10}
            >
                <Link href='/' passHref>
                    <Button variant="nav">
                        <Image src={Logo.src} h="50px" borderRadius='50%' />
                    </Button>
                </Link>
                <HStack ml='auto'>
                    <MobileDrawer />
                </HStack>
                <HStack ml='auto' display={{ base: "none", md: "flex" }}>
                    <ColorModeToggle />
                    {currentUser ? (
                        <>
                            <Tooltip label={currentUser.email}>
                                <Avatar src={DefaultProfilePhoto} />
                            </Tooltip>
                            <Link href='/new' passHref>
                                <Button colorScheme="blue" px={5}>List</Button>
                            </Link>
                            <Button onClick={() => logout()} variant="solid">Logout</Button>
                        </>
                    ) : (
                        <>
                            <Register />
                            <Login />
                        </>
                    )}
                </HStack>


            </Flex>

        </chakra.header>
    );
}

const DrawerExample = ({
    p = 15,
    placement = "right",
    width,
    isOpen,
    children,
    onClose,
    btnRef,
    title =
    <Button variant="nav">
        <Image src={Logo.src} h="10px" />
    </Button>,
    footer,
}) => {
    return (
        <Flex w={width}>
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
                size='full'
            >
                <DrawerOverlay />
                <DrawerContent alignItems="center">
                    <DrawerCloseButton alignSelf="end" mx={p} my={p} />
                    <DrawerHeader my={p}>
                        <Text as="p"> {title} </Text>
                    </DrawerHeader>
                    <DrawerBody>{children}</DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Flex display={{ base: "flex", md: "none" }} >
            {/* // Menu Button */}
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>
            {/* // Drawer Component */}
            <DrawerExample
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left" size='100%'>
                    <Button>Log in / Sign Up</Button>
                    <Link href='/new' passHref>
                        <Button>List now</Button>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <Button variant="nav">Buy</Button>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <Button variant="nav">Rent</Button>
                    </Link>
                    <Link href='/services' passHref>
                        <Button variant="nav">Services</Button>
                    </Link>
                    <Link href='/news' passHref>
                        <Button variant="nav">News</Button>
                    </Link>
                    <Link href='/forums' passHref>
                        <Button variant="nav">Smart Contract</Button>
                    </Link>
                </VStack>
            </DrawerExample>
        </Flex>
    );
};
