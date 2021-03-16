'use strict';

const sequelize = require('../../orm/sequelize/sequelize');
const Commentary = require('../../../domain/adm_requeriment_fullfiment/Commentary');
const ReqRepository = require('../../../domain/adm_requeriment_fullfiment/RequerimentFullfimentRepository');

module.exports = class extends ReqRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('adm_requeriment_fullfiment');
  }

  async merge(RequerimentEntity) {
    const seqReq = await this.model.findByPk(RequerimentEntity.id);

    if (!seqReq) return false;

    const { id, commentary } = RequerimentEntity;
    await seqReq.update({ commentary },  {where: {id: RequerimentEntity.id}});

    return new Commentary(seqReq.id, seqReq.commentary);
  }

  async remove(userId) {
    const seqUser = await this.model.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async get(RequerimentId) {
    const seqUser = await this.model.findByPk(RequerimentId);
    if(seqUser)
      return new Commentary(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
    else
      return false;
  }

  async find() {
    const seqUsers = await this.model.findAll();
    return seqUsers.map((seqUser) => {
      let x = new Commentary(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id);
      return x;
    });
  }

};
