import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { SafetyWarning } from '@/components/SafetyWarning';
import { Shield, Eye, Hand, Heart, Zap, AlertTriangle } from 'lucide-react';

interface SafetySection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const safetySections: SafetySection[] = [
  {
    title: 'Eye Protection',
    icon: Eye,
    items: [
      'Always wear safety glasses when sawing, drilling, or hammering',
      'Wood chips and metal fragments can cause serious eye injuries',
      'Keep a spare pair of safety glasses in your toolkit',
    ],
  },
  {
    title: 'Hand Safety',
    icon: Hand,
    items: [
      'Never hold wood with your hand while cutting',
      'Use clamps to secure workpieces',
      'Keep fingers away from blade paths and hammer zones',
      'Wear work gloves when handling rough lumber',
    ],
  },
  {
    title: 'Tool Safety',
    icon: Zap,
    items: [
      'Keep all tools clean, sharp, and in good condition',
      'Dull tools require more force and are more dangerous',
      'Store sharp tools safely when not in use',
      'Never use damaged or improvised tools for critical work',
    ],
  },
  {
    title: 'Work Environment',
    icon: Shield,
    items: [
      'Work in well-lit areas',
      'Keep your workspace clean and organized',
      'Ensure good ventilation when sanding or finishing',
      'Have a first aid kit nearby',
    ],
  },
];

const firstAidTips = [
  {
    injury: 'Splinter',
    treatment: 'Clean area with soap and water. Use sterilized tweezers to remove. Apply antiseptic and bandage if needed.',
  },
  {
    injury: 'Minor Cut',
    treatment: 'Apply pressure with clean cloth to stop bleeding. Clean with water, apply antiseptic, and bandage. Seek help for deep cuts.',
  },
  {
    injury: 'Smashed Finger',
    treatment: 'Apply ice wrapped in cloth. Keep elevated. If nail is damaged or finger deformed, seek medical attention.',
  },
  {
    injury: 'Sawdust in Eye',
    treatment: 'Do not rub. Flush with clean water for several minutes. Seek help if irritation persists.',
  },
  {
    injury: 'Wood Finish on Skin',
    treatment: 'Wash immediately with soap and water. For chemical burns, flush with water and seek medical help.',
  },
];

const SafetyPage = () => {
  return (
    <Layout>
      <Header title="Safety Guide" subtitle="Work Safely, Always" />
      
      <div className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Emergency reminder */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0" />
            <div>
              <h3 className="font-semibold text-destructive mb-1">Emergency First</h3>
              <p className="text-sm text-muted-foreground">
                For serious injuries, call emergency services immediately. 
                This guide is for minor injuries only.
              </p>
            </div>
          </div>
        </div>

        {/* Safety sections */}
        {safetySections.map((section) => (
          <div key={section.title} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <section.icon className="h-5 w-5 text-warning" />
              <h3 className="font-semibold text-foreground">{section.title}</h3>
            </div>
            <div className="space-y-2">
              {section.items.map((item, index) => (
                <SafetyWarning key={index}>{item}</SafetyWarning>
              ))}
            </div>
          </div>
        ))}

        {/* First Aid */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Heart className="h-5 w-5 text-destructive" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              First Aid Quick Reference
            </h3>
          </div>
          
          {firstAidTips.map((tip, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">{tip.injury}</h4>
              <p className="text-sm text-muted-foreground">{tip.treatment}</p>
            </div>
          ))}
        </div>

        {/* Bottom reminder */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            When in doubt about safety, stop and seek professional guidance.
            <br />
            Your safety is more important than any project.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SafetyPage;
