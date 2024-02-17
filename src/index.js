import { swagger } from "@elysiajs/swagger";
import { logger } from "@grotto/logysia";
import { Elysia } from "elysia";
import { findAllUser, findUserById } from "./Models";

export const app = new Elysia().use(swagger()).use(logger());

const users = new Elysia({ prefix: "/api/users" })
	.get("", async () => {
		return await findAllUser();
	})
	.get("/:id", async ({ params: { id } }) => {
		return await findUserById(id);
	});

app
	.get("/", () => "Hello Elysia")
	.use(users)
	.listen(process.env.PORT || 3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
