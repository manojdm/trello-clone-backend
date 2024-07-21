import jwt from "jsonwebtoken";
import User from "../modals/userModal.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split("Bearer ")[1];
      const decoded = jwt.verify(token, "123absfjdsfn");
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401);
      throw new Error("not authorized");
    }
  } catch (e) {
    res.status(401);
    throw new Error(e);
  }
});
