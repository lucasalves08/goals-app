import { createContext, ReactNode, useCallback, useState } from "react";
import { GoalType } from "../types/types";

type GoalContextType = {
  goals: GoalType[];
  handleAddGoal: (goal: string, summary: string) => void;
  handleDeleteGoal: (id: number) => void;
};

export const GoalContext = createContext<GoalContextType>({
  goals: [],
  handleAddGoal: () => {},
  handleDeleteGoal: () => {},
});

type GoalsProviderProps = {
  children: ReactNode;
};

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<GoalType[]>([]);

  const handleAddGoal = useCallback((goal: string, summary: string) => {
    if (!goal.trim || !summary.trim) {
      alert("Goal and summary cannot be empty!");
      return;
    }

    setGoals((prevGoals) => {
      const newGoal: GoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }, []);

  const handleDeleteGoal = useCallback((id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }, []);

  return (
    <GoalContext.Provider value={{ goals, handleAddGoal, handleDeleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
}
