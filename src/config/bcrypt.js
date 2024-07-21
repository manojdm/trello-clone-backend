import bcrypt from "bcryptjs";

export const hashPassword = async password => {
	const salt = await bcrypt.genSalt(12);
	return await bcrypt.hashSync(password, salt);
};
