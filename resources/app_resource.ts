import { Drash } from "../deps.ts";

class AppResource extends Drash.Http.Resource {
  static paths = ["/"];

  public GET() {
    this.response.body = "Welcome to TODO App";
    return this.response;
  }
}

export default AppResource;
