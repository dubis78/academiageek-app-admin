'use strict';

const Comment = require('../../../domain/adm_requeriment_fullfiment/Comment');

module.exports = async (commentId, commentDesc, { commentRepository }) => {
  const comment = new Comment(commentId, commentDesc);
  return commentRepository.merge(comment);
};
