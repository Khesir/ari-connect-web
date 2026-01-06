"use client"

import { Button, Heading, Text, Box } from "@chakra-ui/react";
import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";

const MotionBox = motion(Box);

const contactMethods = [
    {
        icon: IoLogoDiscord,
        title: "Discord Support",
        description: "Join our community server for instant help",
        link: "https://discord.gg/HnjyK33cJp",
        color: "#5865F2"
    },
    {
        icon: BsGithub,
        title: "Contribute",
        description: "Help us improve - this project is open source",
        link: "https://github.com/Ari-World",
        color: "#ffffff"
    },
    {
        icon: AiFillTwitterCircle,
        title: "Twitter",
        description: "Follow us for updates and announcements",
        link: "#",
        color: "#1DA1F2"
    }
];

export default function ContactPage(){
    return(
        <section className="max-w-6xl mx-auto px-6 py-20 text-white">
            <div className="flex flex-col justify-center items-center gap-16">
                <MotionBox
                    variants={fadeIn('down', 'tween', 0.2, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Heading
                        as='h2'
                        size='2xl'
                        className="text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </Heading>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"/>
                </MotionBox>

                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 w-full">
                    <MotionBox
                        variants={fadeIn('right', 'tween', 0.3, 0.8)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col items-center justify-center gap-8 p-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl border border-pink-400/30 flex-1"
                    >
                        <Heading as='h4' size='md' className="text-center">
                            Need Help?
                        </Heading>
                        <Text fontSize='lg' className="text-center text-gray-300">
                            Contact us by creating a support ticket
                        </Text>
                        <Button
                            size="lg"
                            colorScheme="pink"
                            className="hover:scale-105 transition-transform duration-200 shadow-lg"
                        >
                            Create a Ticket
                        </Button>
                    </MotionBox>

                    <MotionBox
                        variants={fadeIn('left', 'tween', 0.3, 0.8)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col gap-6 flex-1"
                    >
                        {contactMethods.map((method, index) => (
                            <Link
                                key={index}
                                href={method.link}
                                target="_blank"
                                className="group"
                            >
                                <div className="flex gap-4 items-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                                    <div className="p-4 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-lg group-hover:from-pink-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                                        <method.icon size={40} color={method.color}/>
                                    </div>
                                    <div className="flex-1">
                                        <Heading as='h5' size='sm' className="mb-2 text-white">
                                            {method.title}
                                        </Heading>
                                        <Text fontSize='sm' className="text-gray-400">
                                            {method.description}
                                        </Text>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </MotionBox>
                </div>
            </div>
        </section>
    )
}