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

  async remove(userId) {
    const seqUser = await this.model.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async get(userId) {
    const seqUser = await this.model.findByPk(userId);
    if(seqUser)
      return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
    else
      return false;
  }

  async getByEmail(userEmail) {
    const seqUser = await this.model.findOne({ where: { email: userEmail } });
    return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
  }

  async find() {
    const seqUsers = await this.model.findAll();
    return seqUsers.map((seqUser) => {
      let x = new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id);
      return x;
    });
  }

};
