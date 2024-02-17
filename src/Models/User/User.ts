const mongoose = require("mongoose");

// mongoose connect
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((e: object) => {
		console.log("Something went wrong connecting MongoDB", e);
	});

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
});
export const User = mongoose.model("User", userSchema);
