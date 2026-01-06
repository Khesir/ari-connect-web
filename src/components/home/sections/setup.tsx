"use client"

import { Heading, Box } from "@chakra-ui/react";
import image1 from "../../../../public/setup_tutorial.png"
import Image from "next/image";
import { SetupCard } from "../component/setupCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MotionBox = motion(Box);

const setupSteps = [
    {
        title: "Use the command /connect",
        description: "Invoke the bot in your Discord server"
    },
    {
        title: "Choose a lobby",
        description: "Select the specific lobby you want to connect to"
    },
    {
        title: "Start Chatting",
        description: "Begin communicating across servers instantly"
    }
]

export default function SetupPage(){
    return(
        <section className="w-full flex flex-col items-center justify-center relative px-6 py-20">
            <div className="max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-16 text-white">
                <MotionBox
                    variants={fadeIn('right', 'tween', 0.2, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className='flex justify-center items-center lg:w-1/2'
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                        <Image
                            src={image1}
                            width={500}
                            height={500}
                            alt="setup-tutorial"
                            className="relative z-10 rounded-2xl shadow-2xl"
                        />
                    </div>
                </MotionBox>

                <MotionBox
                    variants={fadeIn('left', 'tween', 0.2, 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex flex-col gap-8 lg:w-1/2"
                >
                    <div className="flex flex-col items-start gap-4">
                        <Heading
                            as='h2'
                            size='2xl'
                            className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            How to Setup
                        </Heading>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"/>
                    </div>

                    <div className="flex flex-col gap-4">
                        {setupSteps.map((step, index) => (
                            <SetupCard
                                key={index}
                                title={step.title}
                                count={index}
                                description={step.description}
                            />
                        ))}
                    </div>
                </MotionBox>
            </div>
        </section>
    )
}