"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsDownload, BsEye, BsEyeSlash, BsLock, BsX } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";

interface CvModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setPassword("");
            setErrorMessage("");
            setShowPassword(false);
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen && !isLoading) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, isLoading, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!password.trim() || isLoading) return;

        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/cv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                setErrorMessage(data.error || "Incorrect password. Please try again.");
                setIsLoading(false);
                return;
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "Justin Kim Resume 2026.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(downloadUrl);

            setIsLoading(false);
            onClose();
        } catch {
            setErrorMessage("Failed to download CV. Please try again later.");
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cv-modal-title"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            if (!isLoading) onClose();
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: "spring", duration: 0.25 }}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                            aria-label="Close modal"
                            className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-200"
                        >
                            <BsX size={24} />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-yellow-400/20 dark:text-yellow-400">
                                <BsLock size={20} />
                            </div>
                            <div>
                                <h3
                                    id="cv-modal-title"
                                    className="text-lg font-bold text-gray-900 dark:text-gray-100"
                                >
                                    Download Resume / CV
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Please enter the password to download Justin's CV.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    ref={inputRef}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errorMessage) setErrorMessage("");
                                    }}
                                    disabled={isLoading}
                                    placeholder="Enter password"
                                    required
                                    className="h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 pr-11 text-sm text-gray-900 shadow-sm focus:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800 disabled:opacity-70 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-100 dark:focus:border-yellow-400 dark:focus:ring-yellow-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
                                </button>
                            </div>

                            {errorMessage && (
                                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                                    {errorMessage}
                                </p>
                            )}

                            <div className="mt-2 flex flex-col-reverse justify-end gap-2 sm:flex-row sm:gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    disabled={isLoading}
                                    className="button_secondary !w-full sm:!w-auto justify-center"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading || !password.trim()}
                                    className="button_primary !w-full sm:!w-auto justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            Downloading...
                                            <AiOutlineLoading className="animate-spin" size={16} />
                                        </>
                                    ) : (
                                        <>
                                            Download
                                            <BsDownload size={14} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CvModal;
