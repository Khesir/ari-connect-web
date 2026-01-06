"use client"

import { useState, useEffect } from 'react';
import { Button, Heading, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from 'next/link';

export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#", label: "News" },
        { href: "https://discord.com/oauth2/authorize?client_id=895242125208342548", label: "Invite", external: true },
        { href: "https://discord.gg/HnjyK33cJp", label: "Support", external: true },
    ];

    return(
        <nav className={`w-full px-6 lg:px-10 py-4 fixed top-0 flex items-center justify-between z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#1A202C] shadow-lg' : 'bg-white'
        }`}>
            <Heading
                as='h4'
                size='md'
                className={`transition-colors duration-300 ${scrolled ? 'text-white' : 'text-gray-900'}`}
            >
                Ari Connect
            </Heading>

            {/* Desktop Navigation - Hidden on mobile, visible on tablet and up */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        className={`transition-all duration-200 hover:scale-105 font-medium ${
                            scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        <Text fontSize='md'>{link.label}</Text>
                    </Link>
                ))}

                <Button
                    colorScheme='blue'
                    size='md'
                    className="hover:scale-105 transition-transform duration-200"
                >
                    Login
                </Button>
            </div>

            {/* Mobile Hamburger Menu - Only visible on mobile devices */}
            <div className="md:hidden">
                <IconButton
                    aria-label="Open menu"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    variant="ghost"
                    colorScheme={scrolled ? 'whiteAlpha' : 'gray'}
                    size="lg"
                />
            </div>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="#1A202C">
                    <DrawerCloseButton color="white" />
                    <DrawerHeader color="white">Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={6} align="stretch">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target={link.external ? '_blank' : '_self'}
                                    onClick={onClose}
                                >
                                    <Heading
                                        as='h6'
                                        size='sm'
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Heading>
                                </Link>
                            ))}
                            <Button
                                colorScheme='blue'
                                size='md'
                                width="full"
                                onClick={onClose}
                            >
                                Login
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </nav>
    )
}