import Header from "./components/Header.tsx";
import GoalList from "./components/GoalList.tsx";
import goalsImagePath from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";
import { GoalsProvider } from "./context/GoalsContext.tsx";

export default function App() {
  return (
    <GoalsProvider>
      <main>
        <Header image={{ src: goalsImagePath, alt: "A list of goals" }}>
          <h1>Your Goals</h1>
        </Header>
        <NewGoal />
        <GoalList />
      </main>
    </GoalsProvider>
  );
}
