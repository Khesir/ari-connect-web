"use client"

import { Heading, Text, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'

const MotionBox = motion(Box)

export default function AboutPage(){
    return(
        <section className="max-w-6xl mx-auto px-6 py-20 relative text-white">
            <div className="flex flex-col items-center gap-12">
                <MotionBox
                    variants={textVariant(0.2)}
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
                        Connect Your World
                    </Heading>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"/>
                </MotionBox>

                <MotionBox
                    variants={fadeIn('up', 'tween', 0.4, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <Text
                        fontSize="xl"
                        className="text-center max-w-3xl leading-relaxed text-gray-300"
                    >
                        Ari Connect World is a <span className="text-pink-400 font-semibold">Global Network</span> linking multiple Discord servers, enabling seamless cross-server communication. Whether you&apos;re gaming or chatting, our self-designed bot ensures you&apos;re always connected.
                    </Text>
                </MotionBox>

                <MotionBox
                    variants={fadeIn('up', 'tween', 0.6, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8"
                >
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-pink-400/50 transition-all duration-300">
                        <Heading as='h3' size='3xl' className="text-pink-400 mb-2">500+</Heading>
                        <Text fontSize="md" className="text-gray-400">Connected Servers</Text>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                        <Heading as='h3' size='3xl' className="text-purple-400 mb-2">50K+</Heading>
                        <Text fontSize="md" className="text-gray-400">Active Users</Text>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                        <Heading as='h3' size='3xl' className="text-blue-400 mb-2">24/7</Heading>
                        <Text fontSize="md" className="text-gray-400">Uptime</Text>
                    </div>
                </MotionBox>
            </div>
        </section>
    )
}