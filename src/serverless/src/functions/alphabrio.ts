import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function alphabrio(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get("name") || (await request.text()) || "world";
  context.log(`Name: ${name}`);
  return { body: `Hello, ${name}!` };
}

app.http("alphabrio", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: alphabrio,
});
