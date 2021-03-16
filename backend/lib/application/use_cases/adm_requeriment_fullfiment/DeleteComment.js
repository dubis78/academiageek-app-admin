'use strict';

module.exports = (commentId, { commentRepository }) => {
  return commentRepository.remove(commentId);
};
