import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useProgress } from '@/hooks/useProgress';
import { Hammer } from 'lucide-react';

const ProjectsPage = () => {
  const { isProjectComplete } = useProgress();

  return (
    <Layout>
      <Header title="Projects" subtitle="Build Something Useful" />
      
      <div className="px-4 py-4 max-w-lg mx-auto">
        {/* Intro */}
        <div className="text-center mb-6 py-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 mb-3">
            <Hammer className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Practical Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            Build furniture, shelves, and emergency structures with clear instructions.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
            Project Guides
          </h3>
          
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isCompleted={isProjectComplete(project.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
