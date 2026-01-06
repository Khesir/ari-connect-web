"use client"

import { Heading, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type OfferProps = {
    icon: IconType;
    title: string;
}

export function OfferCard({icon: Icon, title } : OfferProps){
    return(
        <MotionBox
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50 hover:border-pink-400/50 transition-colors duration-300"
        >
            <div className="flex justify-center items-center bg-gradient-to-br from-pink-400/20 to-purple-400/20 p-3 rounded-lg">
                <Icon size={24} className="text-pink-400"/>
            </div>
            <Heading as='h6' size='xs' className="text-white flex-1">
                {title}
            </Heading>
        </MotionBox>
    )
}