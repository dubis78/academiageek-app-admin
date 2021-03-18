'use strict';

module.exports = (stateId, { stateRepository }) => {
  return stateRepository.get(stateId);
};
