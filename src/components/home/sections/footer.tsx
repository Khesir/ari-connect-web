"use client"

import { Heading, Text, Box } from "@chakra-ui/react";
import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MotionBox = motion(Box);

const footerLinks = {
    pages: [
        { label: "Rules", href: "/rules" },
        { label: "Partners", href: "/partners" },
        { label: "Feedback", href: "#" }
    ],
    info: [
        { label: "Team", href: "/team" },
        { label: "Legal", href: "/legal" }
    ],
    support: [
        { label: "Donation", href: "#" },
        { label: "Contribute", href: "https://github.com/Ari-World" }
    ]
};

const socialLinks = [
    { icon: IoLogoDiscord, href: "https://discord.gg/HnjyK33cJp", color: "#5865F2" },
    { icon: BsGithub, href: "https://github.com/Ari-World", color: "#ffffff" },
    { icon: AiFillTwitterCircle, href: "#", color: "#1DA1F2" }
];

export default function Footer(){
    return(
        <footer className="border-t border-gray-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <MotionBox
                    variants={fadeIn('up', 'tween', 0.2, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 text-white">
                        <div className="flex flex-col gap-4">
                            <Heading as='h5' size='sm' className="text-pink-400">Pages</Heading>
                            <div className="flex flex-col gap-2">
                                {footerLinks.pages.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        <Text fontSize='sm'>{link.label}</Text>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Heading as='h5' size='sm' className="text-pink-400">Info</Heading>
                            <div className="flex flex-col gap-2">
                                {footerLinks.info.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        <Text fontSize='sm'>{link.label}</Text>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Heading as='h5' size='sm' className="text-pink-400">Support Us</Heading>
                            <div className="flex flex-col gap-2">
                                {footerLinks.support.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Text fontSize='sm'>{link.label}</Text>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Heading as='h4' size='md' className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Ari Connect
                            </Heading>
                            <Text fontSize='sm' className="text-gray-400">
                                Connecting Discord communities worldwide
                            </Text>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
                            <Text fontSize='sm' className="text-gray-400">
                                © 2024 Ari Connect. All rights reserved.
                            </Text>
                            <Text fontSize='sm' className="text-gray-400">
                                Developed by <span className="text-pink-400">Khesir</span>
                            </Text>
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon size={24} color={social.color}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </MotionBox>
            </div>
        </footer>
    )
}