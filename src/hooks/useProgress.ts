import { useState, useEffect, useCallback } from 'react';

interface Progress {
  completedSkills: string[];
  completedProjects: string[];
  skillNotes: Record<string, string>;
  projectNotes: Record<string, string>;
}

const STORAGE_KEY = 'handycraft-progress';

const getInitialProgress = (): Progress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return {
    completedSkills: [],
    completedProjects: [],
    skillNotes: {},
    projectNotes: {},
  };
};

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(getInitialProgress);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [progress]);

  const toggleSkillComplete = useCallback((skillId: string) => {
    setProgress(prev => {
      const completed = prev.completedSkills.includes(skillId)
        ? prev.completedSkills.filter(id => id !== skillId)
        : [...prev.completedSkills, skillId];
      return { ...prev, completedSkills: completed };
    });
  }, []);

  const toggleProjectComplete = useCallback((projectId: string) => {
    setProgress(prev => {
      const completed = prev.completedProjects.includes(projectId)
        ? prev.completedProjects.filter(id => id !== projectId)
        : [...prev.completedProjects, projectId];
      return { ...prev, completedProjects: completed };
    });
  }, []);

  const setSkillNote = useCallback((skillId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      skillNotes: { ...prev.skillNotes, [skillId]: note },
    }));
  }, []);

  const setProjectNote = useCallback((projectId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      projectNotes: { ...prev.projectNotes, [projectId]: note },
    }));
  }, []);

  const isSkillComplete = useCallback(
    (skillId: string) => progress.completedSkills.includes(skillId),
    [progress.completedSkills]
  );

  const isProjectComplete = useCallback(
    (projectId: string) => progress.completedProjects.includes(projectId),
    [progress.completedProjects]
  );

  const getSkillNote = useCallback(
    (skillId: string) => progress.skillNotes[skillId] || '',
    [progress.skillNotes]
  );

  const getProjectNote = useCallback(
    (projectId: string) => progress.projectNotes[projectId] || '',
    [progress.projectNotes]
  );

  const getStats = useCallback(() => {
    return {
      skillsCompleted: progress.completedSkills.length,
      projectsCompleted: progress.completedProjects.length,
    };
  }, [progress.completedSkills.length, progress.completedProjects.length]);

  return {
    toggleSkillComplete,
    toggleProjectComplete,
    setSkillNote,
    setProjectNote,
    isSkillComplete,
    isProjectComplete,
    getSkillNote,
    getProjectNote,
    getStats,
    completedSkills: progress.completedSkills,
    completedProjects: progress.completedProjects,
  };
};
