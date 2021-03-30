import { Drash } from "https://deno.land/x/drash@v1.4.2/mod.ts";
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
