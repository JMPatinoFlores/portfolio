import { About } from "@/_components/about";
import { Contact } from "@/_components/contact";
import { Hero } from "@/_components/hero";
import { Projects } from "@/_components/projects";
import { Skills } from "@/_components/skills";

export default function Home() {
    return (
        <div className="space-y-10">
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}
