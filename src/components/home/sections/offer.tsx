"use client"

import { Heading, Box } from "@chakra-ui/react";
import image1 from "../../../../public/cross_server_chatting.png"
import Image from "next/image";
import { IoCheckmarkCircleSharp, IoShieldCheckmark, IoRocket } from "react-icons/io5";
import { FaCrown, FaUsers, FaLock } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { OfferCard } from "../component/offerCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MotionBox = motion(Box);

const offers = [
    {
        icon: IoRocket,
        title: "Easy 2 Step Setup"
    },
    {
        icon: IoShieldCheckmark,
        title: "Instant Mod & Staff Contact"
    },
    {
        icon: FaCrown,
        title: "Achievement and Vanity Badges"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Seamless Multi-server Chatting"
    },
    {
        icon: FaUsers,
        title: "Friendly Global Community"
    },
    {
        icon: MdDashboard,
        title: "Dashboard Control for Private Lobbies"
    },
    {
        icon: FaLock,
        title: "Safety & Security on Lobbies"
    }
]

export default function OfferPage(){
    return(
        <section className="w-full flex flex-col items-center justify-center relative px-6 py-20">
            <div className="max-w-6xl flex flex-col-reverse lg:flex-row justify-between items-center gap-16 text-white">
                <MotionBox
                    variants={fadeIn('right', 'tween', 0.2, 0.8)}
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
                            What We Offer
                        </Heading>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"/>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {offers.map((offer, index) => (
                            <OfferCard key={index} icon={offer.icon} title={offer.title}/>
                        ))}
                    </div>
                </MotionBox>

                <MotionBox
                    variants={fadeIn('left', 'tween', 0.2, 0.8)}
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
                            alt="cross-server-chatting"
                            className="relative z-10 rounded-2xl shadow-2xl"
                        />
                    </div>
                </MotionBox>
            </div>
        </section>
    )
}