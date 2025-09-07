"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";

export default function Professional404() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="bg-primary text-card-foreground bg-card border-border rounded-lg border px-12 pb-12 shadow-sm">
                    <div className="text-center">
                        <div
                            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full"
                            style={{
                                backgroundColor: "var(--error-accent)",
                                opacity: 0.1,
                            }}
                        ></div>

                        <h1 className="text-foreground mb-4 text-8xl font-bold">
                            404
                        </h1>
                        <h2 className="text-foreground mb-4 text-3xl font-semibold">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-md text-balance text-lg">
                            The page you requested could not be found.
                        </p>
                        <div className="flex justify-center pb-5 pt-10">
                            <motion.button
                                className="button_primary group"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link href="/" className="flex">
                                    <AiFillHome className="mr-2 h-5 w-5" />
                                    Go Home
                                </Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
