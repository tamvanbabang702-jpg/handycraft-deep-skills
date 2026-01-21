import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, Package, Wrench, Shield, RefreshCw } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { DifficultyBadge } from '@/components/DifficultyBadge';
import { StepCard } from '@/components/StepCard';
import { SafetyWarning } from '@/components/SafetyWarning';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getProjectById } from '@/data/projects';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');
  const { isProjectComplete, toggleProjectComplete, getProjectNote, setProjectNote } = useProgress();
  
  const [localNote, setLocalNote] = useState(getProjectNote(id || ''));
  const [showNotes, setShowNotes] = useState(false);

  if (!project) {
    return (
      <Layout>
        <Header title="Project Not Found" showBack />
        <div className="px-4 py-8 text-center">
          <p className="text-muted-foreground">This project doesn't exist.</p>
          <Button onClick={() => navigate('/projects')} className="mt-4">
            Back to Projects
          </Button>
        </div>
      </Layout>
    );
  }

  const completed = isProjectComplete(project.id);

  const handleSaveNote = () => {
    setProjectNote(project.id, localNote);
  };

  return (
    <Layout>
      <Header title={project.title} showBack />
      
      <div className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Overview */}
        <div className="space-y-3">
          <p className="text-muted-foreground">{project.description}</p>
          
          <div className="flex items-center gap-3 flex-wrap">
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {project.timeEstimate}
            </span>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Package className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Materials</h3>
          </div>
          <ul className="space-y-1.5">
            {project.materials.map((material, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                {material}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="h-5 w-5 text-accent" />
            <h3 className="font-semibold text-foreground">Tools Required</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-muted rounded-md text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Alternatives */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="h-5 w-5 text-success" />
            <h3 className="font-semibold text-foreground">Material Alternatives</h3>
          </div>
          <ul className="space-y-1.5">
            {project.alternatives.map((alt, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-success mt-1.5">→</span>
                {alt}
              </li>
            ))}
          </ul>
        </div>

        {/* Safety */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-warning" />
            <h3 className="font-semibold text-foreground">Safety Notes</h3>
          </div>
          <div className="space-y-2">
            {project.safetyNotes.map((note, index) => (
              <SafetyWarning key={index}>{note}</SafetyWarning>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Build Instructions
          </h3>
          
          {project.steps.map((step, index) => (
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

        {/* Notes */}
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
                placeholder="Notes about your build, modifications, or improvements..."
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
          onClick={() => toggleProjectComplete(project.id)}
          className={cn(
            'w-full touch-target text-base font-semibold',
            completed 
              ? 'bg-success hover:bg-success/90' 
              : 'bg-accent hover:bg-accent/90'
          )}
        >
          {completed ? (
            <>
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Project Completed
            </>
          ) : (
            'Mark as Complete'
          )}
        </Button>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
