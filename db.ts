import { v4 } from "https://deno.land/std@0.91.0/uuid/mod.ts";

export interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

export type CreateTodo = Pick<Todo, "name">;

let todos: Todo[] = [];

const create = (data: CreateTodo): Promise<Todo> => {
  return new Promise((resolve) => {
    const todo: Todo = {
      id: v4.generate(),
      isDone: false,
      ...data,
    };

    todos.push(todo);

    return resolve(todo);
  });
};

const findAll = (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    return resolve(todos);
  });
};

const findOne = (id: string): Promise<Todo | undefined> => {
  return new Promise((resolve) => {
    const todo = todos.find((e) => e.id === id);
    return resolve(todo);
  });
};

const remove = (id: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const newTodos = todos.filter((e) => e.id !== id);

    todos = newTodos;

    return resolve(true);
  });
};

const update = (id: string, data: Todo): Promise<boolean> => {
  return new Promise((resolve) => {
    const updatedTodods = todos.map((e) => {
      if (e.id === id) {
        return e;
      }

      return {
        ...data,
        ...e,
      };
    });

    todos = updatedTodods;

    return resolve(true);
  });
};

export { create, findAll, findOne, update, remove };
