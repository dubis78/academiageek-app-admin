'use strict';

const sequelize = require('../../orm/sequelize/sequelize');
const Comment = require('../../../domain/adm_requeriment_fullfiment/Comment');
const ReqRepository = require('../../../domain/adm_requeriment_fullfiment/RequerimentFullfimentRepository');

module.exports = class extends ReqRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('adm_requeriment_fullfiment');
  }

  async merge(RequerimentEntity) {
    const { commentId,  commentDesc} = RequerimentEntity;
    
    const seqReq = await this.model.findByPk(commentId);
    
    if (!seqReq) return false;

    
    await seqReq.update({ comment:commentDesc },  {where: {id: commentId}});

    return new Comment(seqReq.id, seqReq.comment);
  }

  async remove(RequerimentId) {
    const seqReq = await this.model.findByPk(RequerimentId);

    if (!seqReq) return false;

    await seqReq.update({ comment:'' },  {where: {id: RequerimentId}});

    return new Comment(seqReq.id, seqReq.comment);
  }

  async get(RequerimentId) {
    const seqReq = await this.model.findByPk(RequerimentId);
    if(seqReq)
      return new Comment(seqReq.comment);
    else
      return false;
  }

};
