// Project illustrations
import storageShelfImg from '@/assets/projects/storage-shelf.png';
import basicWorkbenchImg from '@/assets/projects/basic-workbench.png';
import storageCrateImg from '@/assets/projects/storage-crate.png';
import emergencyShelterImg from '@/assets/projects/emergency-shelter.png';

export interface ProjectStep {
  id: string;
  title: string;
  description: string;
  safetyWarning?: string;
  tip?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  materials: string[];
  tools: string[];
  steps: ProjectStep[];
  alternatives: string[];
  safetyNotes: string[];
}

export const projects: Project[] = [
  {
    id: 'storage-shelf',
    title: 'Simple Storage Shelf',
    description: 'A sturdy wall-mounted shelf for storage. Great first project.',
    icon: 'Archive',
    image: storageShelfImg,
    difficulty: 'beginner',
    timeEstimate: '2-3 hours',
    materials: [
      '1 board: 24" x 8" x ¾" (shelf)',
      '2 boards: 8" x 6" x ¾" (brackets)',
      '4-6 wood screws (2")',
      '4 wall screws + anchors',
      'Optional: wood finish',
    ],
    tools: ['Saw', 'Drill or screwdriver', 'Level', 'Tape measure', 'Pencil', 'Sandpaper'],
    steps: [
      {
        id: 'step-1',
        title: 'Cut the Boards',
        description: 'Cut your shelf board to 24" length. Cut two bracket pieces at 6" each with a 45-degree angle cut on one end for style (optional).',
        safetyWarning: 'Secure wood before cutting. Wear safety glasses.',
      },
      {
        id: 'step-2',
        title: 'Sand All Pieces',
        description: 'Sand all surfaces and edges smooth, especially any cut ends. Start with 80-grit, finish with 120-grit.',
      },
      {
        id: 'step-3',
        title: 'Attach Brackets to Shelf',
        description: 'Position brackets 3" from each end of the shelf. Pre-drill holes. Screw through the top of the shelf into the brackets using 2" screws.',
        tip: 'Glue the joint first for extra strength.',
      },
      {
        id: 'step-4',
        title: 'Mark Wall Position',
        description: 'Hold the shelf against the wall at desired height. Use a level to ensure it\'s straight. Mark through the bracket holes.',
      },
      {
        id: 'step-5',
        title: 'Install on Wall',
        description: 'Drill holes at marked positions. Insert wall anchors if not hitting studs. Screw brackets to wall through the mounting holes.',
        safetyWarning: 'Check for electrical wires/pipes before drilling into walls.',
      },
      {
        id: 'step-6',
        title: 'Finish (Optional)',
        description: 'Apply oil, wax, or paint to protect the wood and match your space.',
      },
    ],
    alternatives: [
      'Use pallet wood instead of new lumber',
      'Old cabinet doors make good shelf boards',
      'Metal brackets from hardware store if you can\'t make wooden ones',
    ],
    safetyNotes: [
      'Ensure wall can support intended weight',
      'Use appropriate wall anchors for your wall type',
      'Don\'t overload the shelf',
    ],
  },
  {
    id: 'basic-workbench',
    title: 'Basic Workbench',
    description: 'A sturdy, simple workbench for your projects. Essential for any workspace.',
    icon: 'Table',
    image: basicWorkbenchImg,
    difficulty: 'intermediate',
    timeEstimate: '4-6 hours',
    materials: [
      'Top: 2 boards 48" x 10" x 1" (or one 48" x 20")',
      'Legs: 4 boards 30" x 4" x 2"',
      'Rails: 4 boards 40" x 4" x 1"',
      'Cross braces: 2 boards 16" x 4" x 1"',
      'Wood screws (2.5" and 3")',
      'Wood glue',
    ],
    tools: ['Saw', 'Drill', 'Level', 'Square', 'Tape measure', 'Clamps', 'Sandpaper'],
    steps: [
      {
        id: 'step-1',
        title: 'Cut All Pieces',
        description: 'Cut all lumber to size according to the materials list. Label each piece.',
        safetyWarning: 'Secure wood before cutting. Wear safety glasses.',
      },
      {
        id: 'step-2',
        title: 'Build the Leg Frames',
        description: 'Create two identical frames: attach two legs with a rail at the top (flush with leg tops) and one rail 6" from the bottom. Use glue and 3" screws.',
      },
      {
        id: 'step-3',
        title: 'Connect the Frames',
        description: 'Stand frames upright, 40" apart. Attach cross braces between the lower rails. Check that everything is square before tightening fully.',
      },
      {
        id: 'step-4',
        title: 'Attach the Top',
        description: 'Lay the top boards on the frame. They should overhang equally on all sides. Screw down through the top into the rails.',
        tip: 'If using two boards for the top, glue and clamp them together first.',
      },
      {
        id: 'step-5',
        title: 'Add Stability',
        description: 'If the bench wobbles, add diagonal braces to the leg frames. A shelf on the lower rails also adds rigidity.',
      },
      {
        id: 'step-6',
        title: 'Level and Finish',
        description: 'Check all legs touch the floor. Trim if needed. Sand rough spots. Apply oil or leave natural.',
      },
    ],
    alternatives: [
      'Use reclaimed 2x4s for framing',
      'An old solid door makes an excellent benchtop',
      'Cinder blocks and boards for a quick temporary bench',
    ],
    safetyNotes: [
      'Bench should not wobble - add braces if unstable',
      'Position bench on a flat, stable surface',
      'Don\'t exceed reasonable weight limits',
    ],
  },
  {
    id: 'storage-crate',
    title: 'Storage Crate',
    description: 'Versatile wooden crate for storage, moving, or as furniture.',
    icon: 'Package',
    image: storageCrateImg,
    difficulty: 'beginner',
    timeEstimate: '2 hours',
    materials: [
      'Sides: 4 boards 16" x 8" x ½"',
      'Bottom: 2-3 boards 16" x 5" x ½"',
      'Corner posts: 4 pieces 8" x 1" x 1"',
      'Nails or screws (1.5")',
    ],
    tools: ['Saw', 'Hammer or drill', 'Tape measure', 'Square', 'Sandpaper'],
    steps: [
      {
        id: 'step-1',
        title: 'Cut All Pieces',
        description: 'Cut boards for sides and bottom. Cut four corner posts from 1x1 lumber or similar.',
      },
      {
        id: 'step-2',
        title: 'Attach Corner Posts',
        description: 'Nail or screw corner posts to the inside corners of two side boards. Posts should be flush with the edges.',
      },
      {
        id: 'step-3',
        title: 'Complete the Sides',
        description: 'Attach the remaining two side boards to the corner posts, forming a box. Check for square.',
        tip: 'Pre-drill near edges to prevent splitting.',
      },
      {
        id: 'step-4',
        title: 'Add the Bottom',
        description: 'Flip the box over. Attach bottom boards across the opening. Leave small gaps for drainage if using outdoors.',
      },
      {
        id: 'step-5',
        title: 'Sand and Finish',
        description: 'Sand all surfaces, especially edges and handles. Round sharp corners. Finish with oil if desired.',
      },
    ],
    alternatives: [
      'Pallet wood is ideal for crates',
      'Add rope handles by drilling holes and knotting rope',
      'Stack multiple crates for shelving',
    ],
    safetyNotes: [
      'Sand thoroughly to prevent splinters',
      'Don\'t overload - wood has weight limits',
      'Check structural integrity before lifting loaded crate',
    ],
  },
  {
    id: 'emergency-shelter',
    title: 'Temporary Shelter Frame',
    description: 'A basic A-frame shelter structure for emergency situations.',
    icon: 'Home',
    image: emergencyShelterImg,
    difficulty: 'intermediate',
    timeEstimate: '3-4 hours',
    materials: [
      'Ridge pole: 1 sturdy pole/board 8-10 ft',
      'Frame poles: 6-8 poles 6-8 ft each',
      'Cross braces: 4-6 shorter poles/boards',
      'Rope or wire for lashing',
      'Tarp or covering material',
    ],
    tools: ['Saw (if cutting to size)', 'Knife', 'Hammer (optional)', 'Rope'],
    steps: [
      {
        id: 'step-1',
        title: 'Select Location',
        description: 'Choose flat, dry ground. Avoid low areas that may flood. Check overhead for dead branches.',
        safetyWarning: 'Never build under unstable trees or on slopes.',
      },
      {
        id: 'step-2',
        title: 'Create Support Tripods',
        description: 'At each end, lash three poles together near the top to form tripods. These will support the ridge pole.',
        tip: 'The lashing should be tight but allow the tripod to spread.',
      },
      {
        id: 'step-3',
        title: 'Set the Ridge Pole',
        description: 'Rest your longest pole across the tops of both tripods. This is your shelter\'s backbone.',
      },
      {
        id: 'step-4',
        title: 'Add Frame Poles',
        description: 'Lean additional poles against the ridge pole at 45-60 degree angles on both sides. Space them evenly.',
      },
      {
        id: 'step-5',
        title: 'Add Cross Braces',
        description: 'Lash horizontal braces between the frame poles for stability. This also provides attachment points for covering.',
      },
      {
        id: 'step-6',
        title: 'Cover the Frame',
        description: 'Drape tarp over the frame. Secure at ground level with rocks or stakes. Leave one end partially open for entry.',
        safetyWarning: 'Ensure covering extends beyond ground level to shed rain away from shelter.',
      },
    ],
    alternatives: [
      'Use fallen branches if cut lumber unavailable',
      'Large plastic sheets, tarps, or even layered vegetation for covering',
      'Existing structures (walls, fences) can serve as one side',
    ],
    safetyNotes: [
      'This is for emergency use only - not a permanent structure',
      'Check stability before occupying',
      'Ensure adequate ventilation if using for warmth/cooking',
      'Have an exit plan',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
