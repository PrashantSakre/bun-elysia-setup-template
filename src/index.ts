import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia().use(swagger());

app.get("/", () => "Hello Elysia").listen(process.env.PORT || 3000);

app.get("/api/id/:id", ({ params: { id } }) => id);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
