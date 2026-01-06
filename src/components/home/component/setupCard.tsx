"use client"

import { Heading, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type SetupProps = {
    title: string;
    count: number;
    description?: string;
}

export function SetupCard({ title, count, description } : SetupProps){
    return(
        <MotionBox
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-5 p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-pink-400/50 transition-colors duration-300"
        >
            <div className="flex justify-center items-center bg-gradient-to-br from-pink-400 to-purple-500 min-w-[60px] min-h-[60px] rounded-xl shadow-lg">
                <Heading as='h4' size='md' className="text-white font-bold">
                    {count + 1}
                </Heading>
            </div>
            <div className="flex flex-col gap-1">
                <Heading as='h5' size='sm' className="text-white">
                    {title}
                </Heading>
                {description && (
                    <Text fontSize='xs' className="text-gray-400">
                        {description}
                    </Text>
                )}
            </div>
        </MotionBox>
    )
}