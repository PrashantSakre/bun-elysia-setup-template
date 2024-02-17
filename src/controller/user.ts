import { Elysia, t } from "elysia";
import { findAllUser, findUserById } from "../Models/User/Queries";

export const usersController = new Elysia({ prefix: "/users" })
	.get("", async () => {
		return await findAllUser();
	})
	.get(
		"/:id",
		async ({ params: { id } }) => {
			return await findUserById(id);
		},
		{
			params: t.Object({
				id: t.String(),
			}),
		},
	);
