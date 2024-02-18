import { Elysia, t } from "elysia";
import { addUser, getUserById, users } from "../Queries/User/User";

export const usersController = new Elysia({ prefix: "/users" })
	.get("", async () => {
		return await users();
	})
	.post(
		"",
		async ({ body }) => {
			const { name } = body;
			return await addUser(name);
		},
		{
			body: t.Object({
				name: t.String(),
			}),
		},
	)
	.get(
		"/:id",
		async ({ params: { id } }) => {
			return await getUserById(id);
		},
		{
			params: t.Object({
				id: t.String(),
			}),
		},
	);
