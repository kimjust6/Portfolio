"use client";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    return (
        <AnimatePresence>
            <main className="">
                <div className="flex min-h-xl flex-col items-center justify-between p-24 ">
                    Home Page
                </div>
            </main>
        </AnimatePresence>
    );
}
