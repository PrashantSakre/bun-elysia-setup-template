import { afterAll, describe, expect, it } from "bun:test";
import { app } from "../src";

const baseUrl = `${app.server?.hostname}:${app.server?.port}/api/users`;

describe("USERS Test suite", () => {
	describe("GET Users suite", () => {
		it("should return a list of users successfully", async () => {
			const req = new Request(baseUrl);
			const res = await app.fetch(req);
			expect(res.status).toEqual(200);
		});

		it("should return a user successfully using existing id", async () => {
			const expected = {
				username: "test",
			};

			const userId = "65be9449714f5a412a8e1071";

			const req = new Request(`${baseUrl}/${userId}`);
			const res = await app.fetch(req);
			expect(res.status).toEqual(200);

			const responseBody = await res.json();

			expect(responseBody.username).toEqual(expected.username);
		});

		it("should fail to return a user that does not exist", async () => {
			const userId = "65be944971-f5a412a8e1123";

			const req = new Request(`${baseUrl}/${userId}`);
			const res = await app.fetch(req);
			expect(res.status).not.toEqual(200);
		});

		// In case Bun does not automatically terminate the test runner after all tests run
		afterAll(() => {
			process.exit(0);
		});
	});
});
