import { type PropsWithChildren } from "react";

type GoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function Goal({ id, title, onDelete, children }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
}
