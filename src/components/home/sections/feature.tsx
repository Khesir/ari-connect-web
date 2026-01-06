"use client"

import { Heading, Box } from "@chakra-ui/react";
import { FaGlobe, FaShieldAlt, FaBolt, FaUsers, FaCog, FaRocket } from "react-icons/fa";
import { FeatureCard } from "../component/featureCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const MotionDiv = motion.div;

const features = [
    {
        icon: FaGlobe,
        title: "Cross-Server Messaging",
        content: "Connect multiple Discord servers seamlessly. Send messages across different communities and stay connected with everyone.",
    },
    {
        icon: FaBolt,
        title: "Lightning Fast",
        content: "Experience real-time messaging with minimal latency. Our optimized infrastructure ensures your messages are delivered instantly.",
    },
    {
        icon: FaShieldAlt,
        title: "Secure & Private",
        content: "Your data is protected with enterprise-grade security. We prioritize privacy and ensure safe communication across all servers.",
    },
    {
        icon: FaUsers,
        title: "Community Building",
        content: "Foster connections between communities. Build a network of servers and create a unified experience for all members.",
    },
    {
        icon: FaCog,
        title: "Easy Configuration",
        content: "Simple setup process with an intuitive dashboard. Configure your bot in minutes and start connecting servers right away.",
    },
    {
        icon: FaRocket,
        title: "Scalable Solution",
        content: "From small communities to large networks. Our infrastructure scales with your needs, supporting unlimited server connections.",
    },
];

export default function FeaturePage(){
    return(
        <section className="max-w-6xl mx-auto px-6 py-20">
            <MotionDiv
                // @ts-ignore
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-col items-center justify-center gap-16 text-white"
            >
                <motion.div
                    variants={fadeIn('down', 'tween', 0.2, 0.6)}
                    className="flex flex-col items-center gap-4"
                >
                    <Heading
                        as='h2'
                        size='2xl'
                        className="text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Powerful Features
                    </Heading>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"/>
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 'tween', 0.4, 0.8)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                   {features.map((feature, index)=>(
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            content={feature.content}
                        />
                    ))}
                </motion.div>
            </MotionDiv>
        </section>
    )
}