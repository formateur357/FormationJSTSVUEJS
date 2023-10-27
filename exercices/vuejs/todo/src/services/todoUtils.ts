// Types et fonctions utilitaires pour gérer les tâches

// Définition du type de priorité pour une tâche
export type Priority = "high" | "medium" | "low";

// Objet associant chaque priorité à un ordre numérique pour le tri
export const priorityOrder: Record<Priority, number> = {
  high: 2,
  medium: 1,
  low: 0,
};

// Définition du type Todo représentant une tâche
export type Todo = {
  id: number; // Identifiant unique
  title: string; // Titre de la tâche
  tempText: string; // Texte temporaire pour l'édition
  done: boolean; // Si la tâche est complétée
  editing: boolean; // Si la tâche est en mode édition
  priority: Priority; // Priorité de la tâche
};

// Fonction pour trier les tâches par priorité
export const sortTodos = (todos: Todo[]) => {
  return [...todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};
