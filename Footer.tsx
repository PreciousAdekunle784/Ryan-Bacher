import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-32 border-t border-bone/10 bg-graphite">
            <div className="container-editorial grid gap-10 py-16 md:grid-cols-4">
                <div className="md:col-span-2">
                    <p className="font-serif text-2xl text-bone tracking-editorial">
                        Real operator. Real exits. Real scars. Real systems.
                    </p>
                    <p className="mt-4 max-w-prose text-sm text-muted">
                        Direct mentorship for founders building between $1M and $20M in revenue. No theater.
                        No theory. Just the judgment that comes from having been in your seat.
                    </p>
                </div>
                <div>
                    <p className="eyebrow mb-4">Work With Ryan</p>
                    <ul className="space-y-2 text-sm text-bone/80">
                        <li><Link href="/apply" className="hover:text-bronze">1-on-1 Coaching</Link></li>
                        <li><Link href="/limitless" className="hover:text-bronze">Limitless Society</Link></li>
                        <li><Link href="/speaking" className="hover:text-bronze">Speaking & Advisory</Link></li>
                        <li><Link href="/diagnostic" className="hover:text-bronze">Founder Diagnostic</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="eyebrow mb-4">Elsewhere</p>
                    <ul className="space-y-2 text-sm text-bone/80">
                        <li><a href="https://x.com/racefly" className="hover:text-bronze">X / @racefly</a></li>
                        <li><a href="https://linkedin.com" className="hover:text-bronze">LinkedIn</a></li>
                        <li><a href="https://instagram.com" className="hover:text-bronze">Instagram</a></li>
                        <li><Link href="/privacy" className="hover:text-bronze">Privacy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-bone/10">
                <div className="container-editorial flex flex-col items-start justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:flex-row md:items-center">
                    <span>© {new Date().getFullYear()} Ryan Bacher. All rights reserved.</span>
                    <span>Built for founders who are tired of theater.</span>
                </div>
            </div>
        </footer>
    );
}
