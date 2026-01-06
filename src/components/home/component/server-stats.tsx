"use client"

import { Heading, Text } from "@chakra-ui/react";

// TODO: Replace hardcoded stats with actual working data from backend API
// Consider creating an API endpoint that returns real-time server statistics
// Example: GET /api/stats -> { servers: number, activeUsers: number, uptime: string }
const stats = [
    { value: "500+", label: "Servers" },
    { value: "50K+", label: "Users" },
    { value: "24/7", label: "Uptime" }
];

export default function ServerStats() {
    return(
        <div className="inline-flex gap-6 bg-white px-8 py-4 rounded-xl shadow-md border border-gray-200">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center gap-1 px-4 ${
                        index !== stats.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                >
                    <Heading as='h3' size='xl' className="text-gray-900 font-bold">
                        {stat.value}
                    </Heading>
                    <Text fontSize='sm' className="text-gray-500">
                        {stat.label}
                    </Text>
                </div>
            ))}
        </div>
    )
}