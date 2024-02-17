import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@grotto/logysia";
import { Elysia } from "elysia";
import { usersController } from "./controller/user";

export const app = new Elysia();

app
	.use(staticPlugin())
	.use(logger())
	.use(swagger())
	.get("/", () => "Hello Elysia")
	.group("/api", (app) => app.use(usersController))
	.listen(process.env.PORT || 3000, () =>
		console.log(
			`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
		),
	);
