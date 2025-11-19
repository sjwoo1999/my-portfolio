import { BentoCard } from "@/components/ui/BentoGrid";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Database, Layout, Terminal } from "lucide-react";
import Image from "next/image";

export const HeroWidget = () => (
    <BentoCard colSpan={2} rowSpan={2} className="flex flex-col justify-between bg-gradient-to-br from-violet-600 to-indigo-600 border-none">
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/80">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">Available for work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Hello, I'm <br />
                <span className="text-white/90">SJ.</span>
            </h1>
        </div>
        <div className="space-y-4">
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
                Service Maker based in Seoul. <br />
                Bridging the gap between <span className="text-white font-semibold">Development</span> & <span className="text-white font-semibold">Entrepreneurship</span>.
            </p>
            <div className="flex gap-3">
                <a href="#projects" className="px-5 py-2 bg-white text-indigo-600 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors">
                    View Projects
                </a>
                <a href="mailto:sjwoo1999@korea.ac.kr" className="px-5 py-2 bg-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/30 transition-colors backdrop-blur-sm">
                    Contact Me
                </a>
            </div>
        </div>
    </BentoCard>
);

export const TechStackWidget = () => (
    <BentoCard colSpan={2} className="flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10 pointer-events-none" />
        <div className="flex gap-8 animate-marquee whitespace-nowrap items-center">
            {[
                { icon: Code2, label: "React" },
                { icon: Layout, label: "Next.js" },
                { icon: Terminal, label: "TypeScript" },
                { icon: Database, label: "PostgreSQL" },
                { icon: Code2, label: "Node.js" },
                { icon: Layout, label: "Tailwind" },
                { icon: Terminal, label: "Python" },
                { icon: Database, label: "Supabase" },
                // Duplicate for seamless loop
                { icon: Code2, label: "React" },
                { icon: Layout, label: "Next.js" },
                { icon: Terminal, label: "TypeScript" },
                { icon: Database, label: "PostgreSQL" },
                { icon: Code2, label: "Node.js" },
                { icon: Layout, label: "Tailwind" },
                { icon: Terminal, label: "Python" },
                { icon: Database, label: "Supabase" },
            ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <tech.icon className="w-5 h-5" />
                    <span className="font-medium text-lg">{tech.label}</span>
                </div>
            ))}
        </div>
    </BentoCard>
);

export const ProjectWidget = ({
    title,
    desc,
    tags,
    color = "from-blue-500 to-cyan-500"
}: {
    title: string;
    desc: string;
    tags: string[];
    color?: string;
}) => (
    <BentoCard className="group flex flex-col justify-between min-h-[240px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className="space-y-2 z-10">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-sm text-neutral-400 line-clamp-2">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 z-10">
            {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-xs font-medium text-neutral-300 border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
    </BentoCard>
);

export const BioWidget = () => (
    <BentoCard className="flex flex-col justify-center items-center text-center space-y-4 bg-neutral-900">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-2xl">SJ</div>
        </div>
        <div>
            <h3 className="font-bold text-white">Korea Univ.</h3>
            <p className="text-xs text-neutral-400 mt-1">
                Computer Convergence & <br /> Industrial Engineering
            </p>
        </div>
    </BentoCard>
);

export const ConnectWidget = () => (
    <BentoCard className="flex flex-col justify-center gap-4">
        <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Connect</h3>
        <div className="flex gap-4">
            <a href="https://github.com/sjwoo1999" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-neutral-400">
                <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/우성종" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-neutral-400">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sjwoo1999@korea.ac.kr" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-neutral-400">
                <Mail className="w-5 h-5" />
            </a>
        </div>
    </BentoCard>
);
