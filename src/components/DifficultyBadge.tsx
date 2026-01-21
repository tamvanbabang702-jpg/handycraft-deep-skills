import { cn } from '@/lib/utils';

interface DifficultyBadgeProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  className?: string;
}

const difficultyConfig = {
  beginner: {
    label: 'Beginner',
    className: 'bg-success/20 text-success border-success/30',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-warning/20 text-warning border-warning/30',
  },
  advanced: {
    label: 'Advanced',
    className: 'bg-accent/20 text-accent border-accent/30',
  },
};

export const DifficultyBadge = ({ difficulty, className }: DifficultyBadgeProps) => {
  const config = difficultyConfig[difficulty];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};
