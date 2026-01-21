import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SafetyWarningProps {
  children: React.ReactNode;
  className?: string;
}

export const SafetyWarning = ({ children, className }: SafetyWarningProps) => {
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-3 rounded-lg',
        'bg-warning/10 border border-warning/30',
        className
      )}
    >
      <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
      <p className="text-sm text-warning font-medium">{children}</p>
    </div>
  );
};
