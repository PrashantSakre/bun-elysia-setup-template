const User = require("./User");

const findUserByName = async (username) => {
	const query = User.where({ username });
	return await query.findOne();
};

const findAllUser = async () => {
	return await User.find();
};

const findUserById = async (id) => {
	return await User.findById(id);
};

module.exports = {
	findUserByName,
	findAllUser,
	findUserById,
};
