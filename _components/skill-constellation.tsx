"use client";

import Image from "next/image";

interface SkillConstellationProps {
    items: string[];
    positions: { x: number; y: number }[];
    connections?: [number, number][];
    flippedLabels?: number[];
}

const SPREAD = 1.3;

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export const SkillConstellation = ({
    items,
    positions,
    connections,
    flippedLabels,
}: SkillConstellationProps) => {
    const centroid = {
        x: positions.reduce((sum, p) => sum + p.x, 0) / positions.length,
        y: positions.reduce((sum, p) => sum + p.y, 0) / positions.length,
    };

    const spreadPositions = positions.map((p) => ({
        x: clamp(centroid.x + (p.x - centroid.x) * SPREAD, 6, 94),
        y: clamp(centroid.y + (p.y - centroid.y) * SPREAD, 14, 84),
    }));

    const lines =
        connections ??
        positions
            .slice(1)
            .map((_, index): [number, number] => [index, index + 1]);

    return (
        <div className="group relative aspect-square w-full">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {lines.map(([fromIndex, toIndex], index) => {
                    const from = spreadPositions[fromIndex];
                    const to = spreadPositions[toIndex];
                    return (
                        <line
                            key={index}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            strokeWidth="0.4"
                            className="stroke-white/15 transition-all duration-500 group-hover:stroke-white/50"
                        />
                    );
                })}
            </svg>

            {spreadPositions.map((point, index) => {
                const item = items[index];
                const isReserved = !item;

                return (
                    <div key={index}>
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        >
                            <Image
                                src="/paw.png"
                                alt=""
                                width={13}
                                height={13}
                                className={
                                    isReserved
                                        ? "opacity-30 transition-all duration-500 group-hover:opacity-60"
                                        : "transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                                }
                            />
                        </div>
                        {item &&
                            (() => {
                                const isFlipped =
                                    flippedLabels?.includes(index);
                                return (
                                    <span
                                        className={
                                            isFlipped
                                                ? "absolute -translate-x-1/2 -translate-y-full w-20 text-center text-[10px] text-white/60 transition-colors duration-500 group-hover:text-white"
                                                : "absolute -translate-x-1/2 w-20 text-center text-[10px] text-white/60 transition-colors duration-500 group-hover:text-white"
                                        }
                                        style={{
                                            left: `${point.x}%`,
                                            top: isFlipped
                                                ? `calc(${point.y}% - 9px)`
                                                : `calc(${point.y}% + 9px)`,
                                        }}
                                    >
                                        {item}
                                    </span>
                                );
                            })()}
                    </div>
                );
            })}
        </div>
    );
};
