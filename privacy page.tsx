import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy",
};

export default function PrivacyPage() {
    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-24 md:py-32">
                <p className="eyebrow mb-6">Privacy</p>
                <h1 className="display text-4xl leading-tight md:text-6xl">Plain English.</h1>
                <div className="mt-10 max-w-prose space-y-6 text-bone/80 leading-relaxed">
                    <p>
                        We collect only what we need to respond to you: your name, email, and what you tell us
                        about your business. That's it.
                    </p>
                    <p>
                        We don't sell your information. We don't share it with third parties for advertising.
                        We use a CRM and an email tool to operate this business, just like you do, and we're
                        careful with both.
                    </p>
                    <p>
                        If you ever want your data deleted, email us and we'll delete it. No process. No form.
                        No friction.
                    </p>
                    <p className="text-muted text-sm">
                        This is a placeholder. Replace with the final privacy policy reviewed by counsel
                        before launch.
                    </p>
                </div>
            </div>
        </section>
    );
}
