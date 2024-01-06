import JWT from "jsonwebtoken";

const Generate_Token = async (USER) => {
  const Token = await JWT.sign(
    { email: USER.email, _id: USER._id, Role: USER.Role },
    process.env.JWT_SECRET_KEY
  );
  return Token;
};

export default {
  Generate_Token,
};
