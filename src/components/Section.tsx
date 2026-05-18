import { ScrollReveal } from "./Reveal";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    reveal?: boolean;
}

export default function Section ({children, className = "", reveal = true} : SectionProps) {
    if (!reveal) {
        return <section>{children}</section>;
    }

    return (
        <ScrollReveal>
            <section className={`${className}`}>{children}</section>
        </ScrollReveal>
    )
}