import { User } from "./User";

export const findUserByName = async (username: string) => {
	const query = User.where({ username });
	return await query.findOne();
};

export const findAllUser = async () => {
	return await User.find();
};

export const findUserById = async (id: string) => {
	return await User.findById(id);
};
