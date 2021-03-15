'use strict';

module.exports = (prospectId, { prospectRepository }) => {
  return prospectRepository.remove(prospectId);
};
