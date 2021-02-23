'use strict';

const User = require('../../domain/AuthUsers');

module.exports = (full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id, { userRepository }) => {
  const user = new User(null, full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id);
  return userRepository.persist(user);
};
