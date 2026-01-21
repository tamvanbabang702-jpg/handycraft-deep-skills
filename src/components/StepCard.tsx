import { Lightbulb } from 'lucide-react';
import { SafetyWarning } from './SafetyWarning';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  safetyWarning?: string;
  tip?: string;
}

export const StepCard = ({ stepNumber, title, description, safetyWarning, tip }: StepCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
          {stepNumber}
        </div>
        
        <div className="flex-1 space-y-3">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          
          {safetyWarning && (
            <SafetyWarning>{safetyWarning}</SafetyWarning>
          )}
          
          {tip && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
              <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Tip:</span> {tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
