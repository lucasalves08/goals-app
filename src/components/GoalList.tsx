import { useContext } from "react";
import Goal from "./Goal";
import { GoalContext } from "../context/GoalsContext";

export default function GoalList() {
  const { goals, handleDeleteGoal } = useContext(GoalContext);

  if (goals.length === 0) {
    return <p className="fallback">No Goals found. Maybe add one?</p>;
  }

  return (
    <ul aria-label="List of goals">
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} onDelete={handleDeleteGoal}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}
