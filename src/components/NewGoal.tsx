import { useContext, useRef, type FormEvent } from "react";
import { GoalContext } from "../context/GoalsContext";

export default function NewGoal() {
  const { handleAddGoal } = useContext(GoalContext);
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const enteredGoal = goal.current?.value;
    const enteredSummary = summary.current?.value;

    if (!enteredGoal || !enteredSummary) {
      alert("Please fill in both fields!");
      return;
    }

    event.currentTarget.reset();
    handleAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add a new goal">
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
