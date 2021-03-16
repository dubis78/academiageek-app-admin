'use strict';

const Commentary = require('../../../domain/adm_requeriment_fullfiment/Commentary');

module.exports = async (commentaryId, commentary_desc, { commentaryRepository }) => {
  const commentary = new Commentary(commentaryId, commentary_desc);
  return commentaryRepository.merge(commentary);
};
