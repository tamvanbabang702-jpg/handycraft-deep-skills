import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, Package, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { StepCard } from '@/components/StepCard';
import { SafetyWarning } from '@/components/SafetyWarning';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getSkillById } from '@/data/skills';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const SkillDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const skill = getSkillById(id || '');
  const { isSkillComplete, toggleSkillComplete, getSkillNote, setSkillNote } = useProgress();
  
  const [localNote, setLocalNote] = useState(getSkillNote(id || ''));
  const [showNotes, setShowNotes] = useState(false);

  if (!skill) {
    return (
      <Layout>
        <Header title="Skill Not Found" showBack />
        <div className="px-4 py-8 text-center">
          <p className="text-muted-foreground">This skill module doesn't exist.</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            Back to Skills
          </Button>
        </div>
      </Layout>
    );
  }

  const completed = isSkillComplete(skill.id);

  const handleSaveNote = () => {
    setSkillNote(skill.id, localNote);
  };

  return (
    <Layout>
      <Header title={skill.title} showBack />
      
      <div className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Overview */}
        <div className="space-y-3">
          <p className="text-muted-foreground">{skill.description}</p>
          
          <div className="flex items-center gap-3 flex-wrap">
            <DifficultyBadge difficulty={skill.difficulty} />
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {skill.timeEstimate}
            </span>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Package className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Materials Needed</h3>
          </div>
          <ul className="space-y-1.5">
            {skill.materials.map((material, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                {material}
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Notes */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-warning" />
            <h3 className="font-semibold text-foreground">Safety First</h3>
          </div>
          <div className="space-y-2">
            {skill.safetyNotes.map((note, index) => (
              <SafetyWarning key={index}>{note}</SafetyWarning>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Step-by-Step Instructions
          </h3>
          
          {skill.steps.map((step, index) => (
            <StepCard
              key={step.id}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              safetyWarning={step.safetyWarning}
              tip={step.tip}
            />
          ))}
        </div>

        {/* Notes section */}
        <div className="bg-card border border-border rounded-lg p-4">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="font-semibold text-foreground">My Notes</h3>
            <span className="text-sm text-muted-foreground">
              {showNotes ? 'Hide' : 'Show'}
            </span>
          </button>
          
          {showNotes && (
            <div className="mt-3 space-y-3">
              <Textarea
                placeholder="Write your notes, lessons learned, or reminders here..."
                value={localNote}
                onChange={(e) => setLocalNote(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
              />
              <Button 
                onClick={handleSaveNote}
                variant="secondary"
                className="w-full"
              >
                Save Notes
              </Button>
            </div>
          )}
        </div>

        {/* Complete button */}
        <Button
          onClick={() => toggleSkillComplete(skill.id)}
          className={cn(
            'w-full touch-target text-base font-semibold',
            completed 
              ? 'bg-success hover:bg-success/90' 
              : 'bg-primary hover:bg-primary/90'
          )}
        >
          {completed ? (
            <>
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Skill Completed
            </>
          ) : (
            'Mark as Complete'
          )}
        </Button>
      </div>
    </Layout>
  );
};

export default SkillDetailPage;
