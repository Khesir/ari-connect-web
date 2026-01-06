"use client"

import {motion} from 'framer-motion';
import { Button, Heading, Text, Box } from "@chakra-ui/react";
import icon from "@/assets/hero-logo.png"
import Image from "next/image";
import { fadeIn, textVariant } from '@/utils/motion';
import ServerStats from '../component/server-stats';
import ParticlesBackground from '../component/particles-background';

const MotionDiv = motion.div;
const MotionBox = motion(Box);

export default function HeroPage(){
    return(
        <section className="min-h-screen flex items-center justify-center max-w-[1920px] mx-auto px-6 lg:px-12 pt-24 pb-20 relative z-0 overflow-hidden">
            <ParticlesBackground />
            <div className="flex justify-between lg:flex-row items-center flex-col-reverse gap-20 lg:gap-16 relative w-full max-w-7xl z-10">
                <MotionDiv
                    variants={fadeIn('right', 'tween', 0.2, 0.8)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 max-w-2xl"
                >
                    <Heading
                        as='h1'
                        size='3xl'
                        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 leading-tight"
                    >
                        A Global Chat Bot for Discord
                    </Heading>
                    <Text
                        fontSize='xl'
                        className="text-gray-700 leading-relaxed"
                    >
                        Ari Connect brings communities together - seamlessly connecting your favorite Discord servers to a single channel for unified communication.
                    </Text>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <Button
                            colorScheme='blue'
                            size="lg"
                            className="hover:scale-105 transition-transform duration-200 shadow-lg"
                        >
                            Dashboard
                        </Button>
                        <Button
                            colorScheme='blue'
                            size="lg"
                            variant="outline"
                            className="hover:scale-105 transition-transform duration-200"
                        >
                            Learn More
                        </Button>
                    </div>
                    <div className='hidden lg:block mt-8'>
                        <ServerStats/>
                    </div>
                </MotionDiv>

                <MotionBox
                    variants={fadeIn('left', 'tween', 0.2, 0.8)}
                    initial="hidden"
                    animate="show"
                    className='flex justify-center items-center relative'
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <Image
                            src={icon}
                            width={500}
                            height={500}
                            alt="ari-hero-logo"
                            className="relative z-10"
                            priority
                        />
                    </div>
                    <div className='block lg:hidden absolute -bottom-16'>
                        <ServerStats/>
                    </div>
                </MotionBox>
            </div>
        </section>
    )
}