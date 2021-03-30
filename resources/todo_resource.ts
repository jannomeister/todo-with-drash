import { Drash } from "https://deno.land/x/drash@v1.4.2/mod.ts";
import TodoService from "../services/todo_service.ts";

import { CreateTodo, create, findOne, remove } from "../db.ts";

class TodoResource extends Drash.Http.Resource {
  static paths = ["/todos", "/todos/:id"];

  public async POST() {
    const { data } = this.request.getAllBodyParams();

    const result = await create(<CreateTodo>data);

    this.response.body = result;

    return this.response;
  }

  public async GET() {
    const id = this.request.getPathParam("id");

    if (id) {
      this.response.body = await TodoService.getTodo(id);
    } else {
      this.response.body = await TodoService.getAllTodos();
    }

    return this.response;
  }

  public async DELETE() {
    const id = this.request.getPathParam("id");

    if (!id) {
      throw new Drash.Exceptions.HttpException(400, "ID not found");
    }

    const todo = await findOne(id);

    if (!todo) {
      throw new Drash.Exceptions.HttpException(404, "Todo not found");
    }

    this.response.body = await remove(todo.id);

    return this.response;
  }
}

export default TodoResource;
