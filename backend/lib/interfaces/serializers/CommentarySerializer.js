'use strict';

const _serializeSingleCommentary = (commentary) => {
  return {
    "id" : commentary.id, 
    "commentary_desc" : commentary.commentary, 
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleCommentary);
    }
    return _serializeSingleCommentary(data);
  }

};