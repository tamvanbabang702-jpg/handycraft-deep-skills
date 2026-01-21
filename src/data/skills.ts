export interface SkillStep {
  id: string;
  title: string;
  description: string;
  safetyWarning?: string;
  tip?: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  materials: string[];
  steps: SkillStep[];
  safetyNotes: string[];
}

export const skills: Skill[] = [
  {
    id: 'basic-tools',
    title: 'Basic Tools & Their Use',
    description: 'Learn to identify and safely use essential carpentry hand tools.',
    icon: 'Wrench',
    difficulty: 'beginner',
    timeEstimate: '30 min',
    materials: ['Hammer', 'Screwdrivers (flat & Phillips)', 'Tape measure', 'Pencil', 'Level', 'Handsaw'],
    steps: [
      {
        id: 'step-1',
        title: 'The Hammer',
        description: 'Hold the hammer near the end of the handle for maximum leverage. Swing from your elbow, not your wrist. Keep your eye on the nail head.',
        safetyWarning: 'Always wear safety glasses. Keep fingers away from the strike zone.',
      },
      {
        id: 'step-2',
        title: 'Screwdrivers',
        description: 'Match the screwdriver size to the screw head. Apply downward pressure while turning to prevent stripping. Use the right type: flat for slotted, Phillips for cross-head.',
        tip: 'If a screw is stuck, try turning it slightly clockwise first to break the grip.',
      },
      {
        id: 'step-3',
        title: 'Tape Measure',
        description: 'Hook the end over your workpiece edge. Read the measurement at the point where you need to cut. Mark with a pencil.',
        tip: 'The hook at the end is designed to move slightly - this compensates for inside vs outside measurements.',
      },
      {
        id: 'step-4',
        title: 'Level',
        description: 'Place the level on your surface. The bubble should be centered between the lines for a level surface.',
      },
      {
        id: 'step-5',
        title: 'Handsaw',
        description: 'Mark your cut line clearly. Start with short, gentle strokes to create a groove. Use long, steady strokes letting the saw do the work.',
        safetyWarning: 'Keep hands away from the blade. Secure your workpiece before cutting.',
      },
    ],
    safetyNotes: [
      'Always wear safety glasses when using tools',
      'Keep tools clean and dry',
      'Store sharp tools safely when not in use',
      'Work in well-lit areas',
    ],
  },
  {
    id: 'measuring-marking',
    title: 'Measuring & Marking',
    description: 'Master precise measurements - the foundation of all carpentry.',
    icon: 'Ruler',
    difficulty: 'beginner',
    timeEstimate: '20 min',
    materials: ['Tape measure', 'Pencil', 'Square', 'Marking gauge'],
    steps: [
      {
        id: 'step-1',
        title: 'Measure Twice, Cut Once',
        description: 'This old saying exists for good reason. Always double-check your measurements before making any cuts.',
      },
      {
        id: 'step-2',
        title: 'Using a Square',
        description: 'Press the square firmly against the edge of your workpiece. Draw your line along the blade for a perfect 90-degree mark.',
      },
      {
        id: 'step-3',
        title: 'Marking Clearly',
        description: 'Use a sharp pencil. Mark with a V pointing to your exact measurement point. This is more precise than a single line.',
        tip: 'Use an X on the waste side (the part you\'re cutting off) so you know which side of the line to cut.',
      },
      {
        id: 'step-4',
        title: 'Transferring Measurements',
        description: 'When making multiple pieces the same size, use the first piece as a template rather than measuring each time.',
      },
    ],
    safetyNotes: [
      'Keep your work area clean and organized',
      'Use good lighting to see your marks clearly',
    ],
  },
  {
    id: 'cutting-sawing',
    title: 'Cutting & Sawing',
    description: 'Learn safe and effective cutting techniques for wood.',
    icon: 'Scissors',
    difficulty: 'beginner',
    timeEstimate: '45 min',
    materials: ['Handsaw', 'Workbench or sawhorses', 'Clamps', 'Safety glasses', 'Pencil'],
    steps: [
      {
        id: 'step-1',
        title: 'Secure Your Workpiece',
        description: 'Use clamps or sawhorses to hold the wood steady. The piece should not move while you cut.',
        safetyWarning: 'Never hold the wood with your hand while sawing.',
      },
      {
        id: 'step-2',
        title: 'Position Yourself',
        description: 'Stand comfortably with the saw line at arm\'s length. Your cutting arm should move freely.',
      },
      {
        id: 'step-3',
        title: 'Start the Cut',
        description: 'Use your thumb as a guide against the blade (above the teeth). Make several short, gentle backward strokes to create a groove.',
        safetyWarning: 'Remove your thumb once the groove is established.',
      },
      {
        id: 'step-4',
        title: 'Cutting Motion',
        description: 'Use long, steady strokes at about 45 degrees. Let the saw do the work - don\'t push too hard. Cut on the waste side of your line.',
      },
      {
        id: 'step-5',
        title: 'Finishing the Cut',
        description: 'Slow down as you near the end. Support the waste piece to prevent splintering. Use gentle strokes to complete the cut.',
        tip: 'If the saw binds, the cut may be closing. Insert a small wedge to keep it open.',
      },
    ],
    safetyNotes: [
      'Always wear safety glasses',
      'Keep saw blades sharp - dull blades require more force and are more dangerous',
      'Never reach over or behind a saw blade',
      'Store saws with blade guards when not in use',
    ],
  },
  {
    id: 'joining-techniques',
    title: 'Joining Techniques',
    description: 'Connect pieces of wood securely using nails, screws, and basic joints.',
    icon: 'Link',
    difficulty: 'intermediate',
    timeEstimate: '60 min',
    materials: ['Nails (various sizes)', 'Screws', 'Hammer', 'Screwdriver or drill', 'Wood glue', 'Clamps'],
    steps: [
      {
        id: 'step-1',
        title: 'Nailing Basics',
        description: 'Hold the nail near the top. Start with light taps until it stands on its own. Then drive it in with firmer strikes. Angle nails slightly for better grip.',
        safetyWarning: 'Keep fingers clear of the hammer\'s path. Wear safety glasses.',
      },
      {
        id: 'step-2',
        title: 'Pre-drilling for Screws',
        description: 'For hardwood or near edges, drill a pilot hole slightly smaller than the screw. This prevents splitting.',
        tip: 'Rub screws on soap or wax to make them easier to drive.',
      },
      {
        id: 'step-3',
        title: 'Using Wood Glue',
        description: 'Apply a thin, even layer to both surfaces. Press together and clamp firmly. Wipe off excess glue with a damp cloth. Allow to dry completely.',
        tip: 'Glued joints are often stronger than the wood itself.',
      },
      {
        id: 'step-4',
        title: 'Butt Joints',
        description: 'The simplest joint - one piece meets another at 90 degrees. Strengthen with screws, nails, or corner brackets.',
      },
      {
        id: 'step-5',
        title: 'Lap Joints',
        description: 'Overlap two pieces for a stronger connection. Mark half the thickness on each piece and remove material so they sit flush.',
      },
    ],
    safetyNotes: [
      'Drill/drive away from your body',
      'Secure workpieces before drilling',
      'Check for hidden nails before cutting joined pieces',
    ],
  },
  {
    id: 'finishing-sanding',
    title: 'Finishing & Sanding',
    description: 'Smooth and protect your work for a professional result.',
    icon: 'Sparkles',
    difficulty: 'beginner',
    timeEstimate: '30 min',
    materials: ['Sandpaper (80, 120, 220 grit)', 'Sanding block', 'Dust mask', 'Tack cloth', 'Finish (oil, wax, or varnish)'],
    steps: [
      {
        id: 'step-1',
        title: 'Start Coarse',
        description: 'Begin with 80-grit sandpaper for rough surfaces. Sand with the grain - never against it.',
        safetyWarning: 'Wear a dust mask when sanding.',
      },
      {
        id: 'step-2',
        title: 'Progress to Finer Grits',
        description: 'Move to 120-grit, then 220-grit. Each finer grit removes scratches from the previous one.',
        tip: 'Wipe with a damp cloth between grits to raise the grain and reveal imperfections.',
      },
      {
        id: 'step-3',
        title: 'Using a Sanding Block',
        description: 'Wrap sandpaper around a block for flat surfaces. This keeps your sanding even and prevents dips.',
      },
      {
        id: 'step-4',
        title: 'Clean Before Finishing',
        description: 'Remove all dust with a tack cloth or damp rag. Any dust left will be trapped under your finish.',
      },
      {
        id: 'step-5',
        title: 'Apply Finish',
        description: 'Apply thin coats of your chosen finish. Let each coat dry completely. Lightly sand between coats with 220-grit.',
        tip: 'Oil finishes are easiest for beginners - wipe on, wipe off excess.',
      },
    ],
    safetyNotes: [
      'Always wear a dust mask when sanding',
      'Work in ventilated areas when using finishes',
      'Dispose of oil-soaked rags safely - they can spontaneously combust',
    ],
  },
  {
    id: 'emergency-repairs',
    title: 'Emergency Repairs',
    description: 'Quick fixes for doors, furniture, and small structures.',
    icon: 'AlertTriangle',
    difficulty: 'intermediate',
    timeEstimate: '15-60 min',
    materials: ['Hammer', 'Screwdriver', 'Wood glue', 'Clamps', 'Wood filler', 'Sandpaper'],
    steps: [
      {
        id: 'step-1',
        title: 'Loose Chair Leg',
        description: 'Remove the leg if possible. Clean old glue. Apply fresh glue, reinsert, and clamp overnight. If the joint is loose, wrap the tenon with thread before gluing.',
      },
      {
        id: 'step-2',
        title: 'Sticking Door',
        description: 'Check hinges first - tighten screws. If still sticking, identify where it rubs (use chalk or lipstick). Sand or plane the high spot.',
        tip: 'Doors often stick in humid weather and work fine when dry.',
      },
      {
        id: 'step-3',
        title: 'Split Wood',
        description: 'For small splits, work glue into the crack, clamp, and wipe excess. For larger splits, you may need to drill and insert a dowel.',
      },
      {
        id: 'step-4',
        title: 'Stripped Screw Hole',
        description: 'Fill the hole with wooden toothpicks and glue. Let dry, break off excess. Re-drill pilot hole and drive screw.',
      },
      {
        id: 'step-5',
        title: 'Wobbly Table',
        description: 'Check all joints are tight. Add corner brackets underneath for reinforcement. Level the legs by sanding or adding felt pads.',
      },
    ],
    safetyNotes: [
      'Assess structural integrity before repair',
      'Do not attempt repairs on weight-bearing structures you\'re unsure about',
      'When in doubt, consult a professional',
    ],
  },
];

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(skill => skill.id === id);
};
