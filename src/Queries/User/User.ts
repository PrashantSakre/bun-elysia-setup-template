import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const users = async () => {
	return await prisma.user.findMany();
};

export const addUser = async (name: string) => {
	const user = await prisma.user.create({ data: { name } });
	return user;
};

export const getUserById = async (id: string) => {
	return await prisma.user.findUnique({ where: { id: id } });
};
