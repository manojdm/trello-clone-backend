import jwt from "jsonwebtoken";

export const generateToken = id => {
	return jwt.sign({ id }, "123absfjdsfn", {
		expiresIn: "7d",
	});
};
