'use strict';

module.exports = class {

  constructor(id, id_course, id_cv_user, regis_date, state) {
    this.id = id;
    this.id_course = id_course;
    this.id_cv_user = id_cv_user;
    this.regis_date = regis_date;
    this.state = state;
  }

};