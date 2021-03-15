'use strict';

module.exports = (prospectId, { prospectRepository }) => {
  return prospectRepository.get(prospectId);
};
