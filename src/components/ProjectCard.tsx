import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, Hammer, Archive, Table, Package, Home } from 'lucide-react';
import { Project } from '@/data/projects';
import { DifficultyBadge } from './DifficultyBadge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  isCompleted?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Archive: Archive,
  Table: Table,
  Package: Package,
  Home: Home,
  Hammer: Hammer,
};

export const ProjectCard = ({ project, isCompleted = false }: ProjectCardProps) => {
  const IconComponent = iconMap[project.icon] || Hammer;

  return (
    <Link
      to={`/projects/${project.id}`}
      className={cn(
        'block p-4 rounded-lg bg-card border border-border',
        'transition-all duration-200 active:scale-[0.98]',
        'hover:border-primary/50 hover:bg-card/80',
        isCompleted && 'border-success/30 bg-success/5'
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          'p-2.5 rounded-lg shrink-0',
          isCompleted ? 'bg-success/20' : 'bg-accent/10'
        )}>
          <IconComponent className={cn(
            'h-6 w-6',
            isCompleted ? 'text-success' : 'text-accent'
          )} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-base leading-tight">
              {project.title}
            </h3>
            {isCompleted && (
              <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {project.description}
          </p>
          
          <div className="flex items-center gap-3 flex-wrap">
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {project.timeEstimate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
