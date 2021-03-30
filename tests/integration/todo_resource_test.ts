import { Rhum } from "../../deps.ts";
import { server } from "../../server.ts";
import { HOSTNAME, PORT } from "../../constants.ts";

const serverConfig = { hostname: HOSTNAME, port: PORT };

Rhum.testPlan("integration/todo_resource_test.ts", () => {
  Rhum.beforeEach(async () => {
    await server.run(serverConfig);
  });

  Rhum.afterEach(async () => {
    await server.close();
  });

  Rhum.testSuite("GET /todos", () => {
    Rhum.testCase("Response with 200 and returns an empty array", async () => {
      const res = await fetch("http://localhost:3001/todos");
      const body = await res.json();

      Rhum.asserts.assertEquals(res.status, 200);
      Rhum.asserts.assertEquals(body, []);
    });
  });

  Rhum.testSuite("GET /todos/:id", () => {
    Rhum.testCase("Response with 404 when todo not found", async () => {
      const res = await fetch("http://localhost:3001/todos/232332");
      const body = await res.json();

      Rhum.asserts.assertEquals(res.status, 404);
      Rhum.asserts.assertEquals(body, "Todo not found");
    });
  });

  Rhum.testSuite("POST /todos", () => {
    Rhum.testCase(
      "Response with 200 when successfully created a todo",
      async () => {
        const res = await fetch("http://localhost:3001/todos", {
          method: "post",
          body: JSON.stringify({ name: "basic todo" }),
        });
        const body = await res.json();

        Rhum.asserts.assertEquals(res.status, 200);
        Rhum.asserts.assertNotEquals(body, null);
        Rhum.asserts.assertEquals(body.hasOwnProperty("id"), true);
      }
    );
  });

  Rhum.testSuite("DELETE /todos/:id", () => {
    Rhum.testCase(
      "Response with 200 and true when successfully removed todo",
      async () => {
        const createTodo = await fetch("http://localhost:3001/todos", {
          method: "post",
          body: JSON.stringify({ name: "basic todo" }),
        });
        const createdTodo = await createTodo.json();

        const res = await fetch(
          `http://localhost:3001/todos/${createdTodo.id}`,
          {
            method: "delete",
          }
        );
        const body = await res.json();

        Rhum.asserts.assertEquals(res.status, 200);
        Rhum.asserts.assertEquals(body, true);
      }
    );
  });
});

Rhum.run();
