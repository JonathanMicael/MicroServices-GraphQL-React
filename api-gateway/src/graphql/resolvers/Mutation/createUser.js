import UserServices from "#root/adapters/UsersService";

const createUserResolver = async (obj, { email, password }) => {
  return await UserServices.createUser({ email, password });
};

export default createUserResolver;
