export type Priority = "high" | "medium" | "low";

export const priorityOrder: Record<Priority, number> = {
  high: 2,
  medium: 1,
  low: 0,
};

export type Todo = {
  id: number;
  title: string;
  tempText: string;
  done: boolean;
  editing: boolean;
  priority: Priority;
};

export const sortTodos = (todos: Todo[]) => {
  return [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};
