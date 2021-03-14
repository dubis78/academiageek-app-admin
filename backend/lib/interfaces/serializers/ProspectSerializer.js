'use strict';

const _serializeSingleProspect = (prospect) => {
  return {
    "id" : prospect.id, 
    "id_course" : prospect.id_course, 
    "id_cv_user" : prospect.id_cv_user, 
    "regis_date" : prospect.emaregis_dateil, 
    "state" : prospect.state
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleProspect);
    }
    return _serializeSingleProspect(data);
  }

};