import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { useProgress } from '@/hooks/useProgress';
import { CheckCircle2, Circle, BookOpen, Hammer, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProgressPage = () => {
  const { isSkillComplete, isProjectComplete, getStats } = useProgress();
  const stats = getStats();

  const totalSkills = skills.length;
  const totalProjects = projects.length;
  const skillProgress = Math.round((stats.skillsCompleted / totalSkills) * 100);
  const projectProgress = Math.round((stats.projectsCompleted / totalProjects) * 100);

  return (
    <Layout>
      <Header title="Your Progress" subtitle="Track Your Journey" />
      
      <div className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Stats overview */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">
              {stats.skillsCompleted}/{totalSkills}
            </p>
            <p className="text-sm text-muted-foreground">Skills Learned</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Hammer className="h-6 w-6 text-accent" />
            </div>
            <p className="text-2xl font-bold text-foreground">
              {stats.projectsCompleted}/{totalProjects}
            </p>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
        </div>

        {/* Achievement message */}
        {stats.skillsCompleted + stats.projectsCompleted > 0 && (
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 text-center">
            <Trophy className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-sm text-success font-medium">
              Great progress! Keep building your skills.
            </p>
          </div>
        )}

        {/* Skills progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Skills ({skillProgress}%)
            </h3>
          </div>
          
          {/* Progress bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${skillProgress}%` }}
            />
          </div>

          <div className="space-y-2">
            {skills.map((skill) => {
              const completed = isSkillComplete(skill.id);
              return (
                <div
                  key={skill.id}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg',
                    'bg-card border border-border',
                    completed && 'border-success/30 bg-success/5'
                  )}
                >
                  {completed ? (
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                  <span className={cn(
                    'text-sm',
                    completed ? 'text-foreground' : 'text-muted-foreground'
                  )}>
                    {skill.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Projects ({projectProgress}%)
            </h3>
          </div>
          
          {/* Progress bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${projectProgress}%` }}
            />
          </div>

          <div className="space-y-2">
            {projects.map((project) => {
              const completed = isProjectComplete(project.id);
              return (
                <div
                  key={project.id}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg',
                    'bg-card border border-border',
                    completed && 'border-success/30 bg-success/5'
                  )}
                >
                  {completed ? (
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                  )}
                  <span className={cn(
                    'text-sm',
                    completed ? 'text-foreground' : 'text-muted-foreground'
                  )}>
                    {project.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Offline note */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            All progress is saved locally on your device.
            <br />
            No account or internet required.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProgressPage;
