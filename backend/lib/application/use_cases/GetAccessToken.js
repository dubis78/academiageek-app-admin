'use strict';

const {comparePassword} = require('./../utilities/general_functions')
module.exports = async (email, password, { userRepository, accessTokenManager }) => {
  const user = await userRepository.getByEmail(email);
  let validPass = await comparePassword(password, user.pass)

  if (!user || !validPass) {
    throw new Error('Bad credentials');
  }

  return accessTokenManager.generate({ uid: user.id });
};
