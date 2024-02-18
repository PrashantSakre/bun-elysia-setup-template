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

		it("should create the user", async () => {
			const formData = new FormData();
			formData.set("name", "test");
			const req = new Request(baseUrl, {
				method: "POST",
				body: formData,
			});
			const res = await app.fetch(req);
			expect(res.status).toEqual(200);
		});

		// In case Bun does not automatically terminate the test runner after all tests run
		afterAll(() => {
			process.exit(0);
		});
	});
});
