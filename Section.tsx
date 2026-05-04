import { ReactNode } from "react";

type Props = {
    eyebrow?: string;
    title?: ReactNode;
    intro?: ReactNode;
    children?: ReactNode;
    className?: string;
    id?: string;
};

export default function Section({ eyebrow, title, intro, children, className = "", id }: Props) {
    return (
        <section id={id} className={`py-24 md:py-32 ${className}`}>
            <div className="container-editorial">
                {(eyebrow || title || intro) && (
                    <header className="mb-12 max-w-3xl">
                        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
                        {title && (
                            <h2 className="display text-3xl leading-[1.1] md:text-5xl">{title}</h2>
                        )}
                        {intro && <p className="mt-6 text-lg leading-relaxed text-bone/80">{intro}</p>}
                    </header>
                )}
                {children}
            </div>
        </section>
    );
}
