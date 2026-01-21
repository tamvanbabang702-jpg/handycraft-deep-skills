import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { SkillCard } from '@/components/SkillCard';
import { skills } from '@/data/skills';
import { useProgress } from '@/hooks/useProgress';
import { Wrench } from 'lucide-react';

const SkillsPage = () => {
  const { isSkillComplete } = useProgress();

  return (
    <Layout>
      <Header title="HandyCraft" subtitle="Learn Carpentry Skills" />
      
      <div className="px-4 py-4 max-w-lg mx-auto">
        {/* Hero section */}
        <div className="text-center mb-6 py-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-3">
            <Wrench className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Build Skills, Build Confidence
          </h2>
          <p className="text-sm text-muted-foreground">
            Step-by-step guides for practical carpentry. Works offline.
          </p>
        </div>

        {/* Skills list */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
            Skill Modules
          </h3>
          
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isCompleted={isSkillComplete(skill.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
