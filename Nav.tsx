import Link from "next/link";

export default function Nav() {
    return (
        <header className="sticky top-0 z-40 border-b border-bone/10 bg-ink/85 backdrop-blur">
            <div className="container-editorial flex h-16 items-center justify-between">
                <Link href="/" className="flex items-baseline gap-3">
                    <span className="font-serif text-lg tracking-editorial text-bone">Ryan Bacher</span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-bronze md:inline">
                        Operator / Investor / Mentor
                    </span>
                </Link>
                <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/70 md:flex">
                    <Link href="/diagnostic" className="hover:text-bronze">
                        Diagnostic
                    </Link>
                    <Link href="/limitless" className="hover:text-bronze">
                        Limitless
                    </Link>
                    <Link href="/speaking" className="hover:text-bronze">
                        Speaking
                    </Link>
                    <Link href="/apply" className="btn-primary !py-3 !px-5 text-[11px]">
                        Apply
                    </Link>
                </nav>
                <Link href="/apply" className="btn-primary !py-2 !px-4 text-[11px] md:hidden">
                    Apply
                </Link>
            </div>
        </header>
    );
}
