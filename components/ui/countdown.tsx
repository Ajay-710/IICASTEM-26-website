"use client"

import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

// Target countdown date
const COUNTDOWN_FROM = "2026-12-18T09:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function Countdown() {
    return (
        <div className="flex w-full max-w-5xl items-center bg-transparent mx-auto">
            <CountdownItem unit="Day" label="Days" />
            <CountdownItem unit="Hour" label="Hours" />
            <CountdownItem unit="Minute" label="Mins" />
            <CountdownItem unit="Second" label="Secs" />
        </div>
    );
}

function CountdownItem({ unit, label }: { unit: string; label: string }) {
    const { ref, time } = useTimer(unit);
    // Ensure consistent display formatting
    const display = (unit === "Second" || unit === "Minute" || unit === "Hour")
        ? String(time).padStart(2, '0')
        : time;

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 px-2 py-4 md:gap-2 md:py-6">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-3xl font-mono font-semibold text-white md:text-5xl lg:text-6xl transition-colors duration-500 tabular-nums"
                >
                    {display}
                </span>
            </div>
            <span className="text-[10px] md:text-sm font-light text-slate-400 uppercase tracking-widest transition-colors duration-500">
                {label}
            </span>
            <div className="h-[1px] w-full bg-blue-500/30 mt-4 transition-colors duration-500"></div>
        </div>
    );
}

function useTimer(unit: string) {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeRef = useRef<number>(0);
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        handleCountdown();
        intervalRef.current = setInterval(handleCountdown, 1000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCountdown = async () => {
        const end = new Date(COUNTDOWN_FROM).getTime();
        const now = new Date().getTime();
        const distance = end - now;

        let newTime = 0;
        switch (unit) {
            case "Day":
                newTime = Math.max(0, Math.floor(distance / DAY));
                break;
            case "Hour":
                newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
                break;
            case "Minute":
                newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
                break;
            default:
                newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
        }

        if (newTime !== timeRef.current) {
            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["0%", "-50%"], opacity: [1, 0] },
                    { duration: 0.35 }
                );
            }

            timeRef.current = newTime;
            setTime(newTime);

            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["50%", "0%"], opacity: [0, 1] },
                    { duration: 0.35 }
                );
            }
        }
    };

    return { ref, time };
}
