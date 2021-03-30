import { Drash } from "../deps.ts";
import { findAll, findOne } from "../db.ts";

class TodoService {
  static async getAllTodos() {
    return await findAll();
  }

  static async getTodo(id: string) {
    const todo = await findOne(id);

    if (!todo) {
      throw new Drash.Exceptions.HttpException(404, "Todo not found");
    }

    return todo;
  }
}

export default TodoService;
