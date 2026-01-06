"use client"

import { Heading, Text, Box } from "@chakra-ui/react";
import { IconType } from "react-icons"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

type FeatureProps = {
    icon: IconType;
    title: string;
    content: string;
}

export function FeatureCard ({icon: Icon, title , content}: FeatureProps){
    return(
        <MotionBox
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-pink-400/50 transition-colors duration-300 h-full"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-lg">
                    <Icon size={28} className="text-pink-400"/>
                </div>
                <Heading as='h5' size='md' className="text-white">
                    {title}
                </Heading>
            </div>

            <Text fontSize='sm' className="text-gray-400 leading-relaxed">
                {content}
            </Text>
        </MotionBox>
    )
}