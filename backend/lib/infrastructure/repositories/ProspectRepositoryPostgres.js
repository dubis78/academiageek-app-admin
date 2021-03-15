'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Prospect = require('../../domain/Prospect');
const ProspectRepository = require('../../domain/ProspectRepository');

module.exports = class extends ProspectRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('adm_prospects_preference');
  }

  async persist(prospectEntity) {

    const { id_course, id_cv_user, regis_date, state } = prospectEntity;

    const seqProspect = await this.model.create({ id_course, id_cv_user, regis_date, state });

    let prospect = new Prospect(seqProspect.id_course, seqProspect.id_cv_user, seqProspect.regis_date, seqProspect.state);

    return prospect

  }

  async merge(prospectEntity) {
    const seqProspect = await this.model.findByPk(prospectEntity.id);

    if (!seqProspect) return false;

    const { id, id_course, id_cv_user, regis_date, state } = prospectEntity;
    
    await seqProspect.update({ id, id_course, id_cv_user, regis_date, state },  {where: {id: prospectEntity.id}});
    
    let prospect = new Prospect(seqProspect.id, seqProspect.id_course, seqProspect.id_cv_user, seqProspect.regis_date, seqProspect.state);

    return  prospect
  }

  async remove(prospectId) {
    const seqProspect = await this.model.findByPk(prospectId);
    if (seqProspect) {
      return seqProspect.destroy();
    }
    return false;
  }

  async get(prospectId) {
    const seqProspect = await this.model.findByPk(prospectId);
    if(seqProspect)
      return new Prospect(seqProspect.id, seqProspect.id_course, seqProspect.id_cv_user, seqProspect.regis_date, seqProspect.state);
    else
      return false;
  }

  async find() {
    const seqProspects = await this.model.findAll();
    return seqProspects.map((seqProspect) => {
      let x = new Prospect(seqProspect.id, seqProspect.id_course, seqProspect.id_cv_user, seqProspect.regis_date, seqProspect.state);
      return x;
    });
  }

};
