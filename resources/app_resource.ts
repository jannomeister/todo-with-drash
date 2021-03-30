import { Drash } from "https://deno.land/x/drash@v1.4.2/mod.ts";

class AppResource extends Drash.Http.Resource {
  static paths = ["/"];

  public GET() {
    this.response.body = "Welcome to TODO App";
    return this.response;
  }
}

export default AppResource;
