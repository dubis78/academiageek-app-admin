'use strict';

const _serializeSingleState = (state) => {
  return {
    "id" : state.id, 
    "state" : state.state
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleState);
    }
    return _serializeSingleState(data);
  }

};