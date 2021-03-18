'use strict';

module.exports = (commentId, { commentRepository }) => {
  return commentRepository.get(commentId);
};
