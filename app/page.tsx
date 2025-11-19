import { BentoGrid } from "@/components/ui/BentoGrid";
import { HeroWidget, TechStackWidget, ProjectWidget, BioWidget, ConnectWidget } from "@/components/BentoItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 p-4 md:p-8 pt-24">
      <BentoGrid className="pb-20">
        {/* Row 1: Hero (2x2) + Bio (1x1) + Connect (1x1) */}
        <HeroWidget />
        <BioWidget />
        <ConnectWidget />

        {/* Row 2: Tech Stack (2x1) + Project 1 (1x1) + Project 2 (1x1) */}
        <TechStackWidget />
        <ProjectWidget
          title="SMEats"
          desc="Connecting local markets with small businesses. A platform for sustainable growth."
          tags={["Next.js", "Supabase", "Flutter"]}
          color="from-orange-500 to-red-500"
        />
        <ProjectWidget
          title="DIAL"
          desc="Healthcare smartwatch interface for elderly monitoring and emergency response."
          tags={["React Native", "IoT", "Node.js"]}
          color="from-emerald-500 to-teal-500"
        />

        {/* Row 3: Project 3 (1x1) + Filler/More (3x1) */}
        <ProjectWidget
          title="BeMore"
          desc="Full-stack productivity platform for student developers."
          tags={["Next.js", "Prisma", "PostgreSQL"]}
          color="from-violet-500 to-purple-500"
        />
        {/* Add more widgets here if needed, or expand existing ones */}
      </BentoGrid>
    </main>
  );
}
