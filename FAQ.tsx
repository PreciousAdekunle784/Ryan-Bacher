"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function FAQ({ items }: { items: Item[] }) {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <ul className="divide-y divide-bone/10 border-y border-bone/10">
            {items.map((it, i) => {
                const isOpen = open === i;
                return (
                    <li key={i}>
                        <button
                            onClick={() => setOpen(isOpen ? null : i)}
                            className="flex w-full items-start justify-between gap-8 py-6 text-left transition hover:text-bronze"
                        >
                            <span className="font-serif text-lg leading-snug md:text-xl">{it.q}</span>
                            <span className="font-mono text-xs text-bronze">{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && (
                            <p className="max-w-prose pb-8 text-bone/75 leading-relaxed">{it.a}</p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
