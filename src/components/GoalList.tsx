import { type ReactNode, useContext } from "react";
import Goal from "./Goal";
import { GoalContext } from "../context/GoalsContext";
import InfoBox from "./InfoBox";

export default function GoalList() {
  const { goals, handleDeleteGoal } = useContext(GoalContext);

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul aria-label="List of goals">
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={handleDeleteGoal}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
}
