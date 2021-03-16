'use strict';

const Commentary = require('../../../domain/adm_requeriment_fullfiment/Commentary');

module.exports = async (id, commentary_desc, { commentaryRepository }) => {

  const commentary = new Commentary(id, commentary_desc);
  return commentaryRepository.persist(commentary);
};
