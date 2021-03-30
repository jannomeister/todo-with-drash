import { Drash } from "./deps.ts";
import AppResource from "./resources/app_resource.ts";
import TodoResource from "./resources/todo_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [AppResource, TodoResource],
});

export { server };
