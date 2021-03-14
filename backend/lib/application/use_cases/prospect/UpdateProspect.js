'use strict';

const Prospect = require('../../../domain/Prospect');

module.exports = async (prospectId, id_course, id_cv_user, regis_date, state, { prospectRepository }) => {
  const prospect = new Prospect(prospectId, id_course, id_cv_user, regis_date, state);
  return prospectRepository.merge(prospect);
};
