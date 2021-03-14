'use strict';

const Prospect = require('../../../domain/Prospect');

module.exports = async (id_course, id_cv_user, regis_date, state, { prospectRepository }) => {
  const prospect = new Prospect(null, id_course, id_cv_user, regis_date, state);
  return prospectRepository.persist(prospect);
};
