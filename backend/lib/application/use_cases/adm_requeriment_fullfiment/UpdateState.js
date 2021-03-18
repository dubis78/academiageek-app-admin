'use strict';

const State = require('../../../domain/adm_requeriment_fullfiment/State');

module.exports = async (stateId, stateEnum, { stateRepository }) => {

  const state = new State(stateId, stateEnum);
  return stateRepository.merge(state);
};
