'use strict';

const sequelize = require('../../orm/sequelize/sequelize');
const State = require('../../../domain/adm_requeriment_fullfiment/State');
const RequerimentRepository = require('../../../domain/adm_requeriment_fullfiment/RequerimentFullfimentRepository');

module.exports = class extends RequerimentRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('adm_requeriment_fullfiment');
  }

  async merge(prospectEntity) {
    const seqState = await this.model.findByPk(prospectEntity.id);

    if (!seqState) return false;

    const { stateId, state} = prospectEntity;
    await seqState.update({ state },  {where: {id: prospectEntity.id}});
    
    let prospect = new State(seqState.id, seqState.state);

    return  prospect
  }

  async get(prospectId) {
    const seqState = await this.model.findByPk(prospectId);

    if(seqState)
      return new State(seqState.id, seqState.state);
    else
      return false;
  }

};
