'use strict';

const _serializeSingleComment = (comment) => {
  return {
    "id" : comment.commentId, 
    "comment_desc" : comment.commentDesc, 
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleComment);
    }
    return _serializeSingleComment(data);
  }

};