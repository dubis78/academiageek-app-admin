'use strict';

const Boom = require('@hapi/boom');
const CreateCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/CreateComment');
const GetCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/GetComment');
const DeleteCommentary = require('../../application/use_cases/adm_requeriment_fullfiment/DeleteComment');
const UpdateComment  = require('../../application/use_cases/adm_requeriment_fullfiment/UpdateComment');
module.exports = {

  async createComment(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;
    // Input
    const commentId = request.params.id;
    const { comment_desc } = request.payload;
      // Treatment
      const comment = await CreateCommentary(commentId, comment_desc, serviceLocator);
      // Output
    if (comment) {
      return serviceLocator.commentSerializer.serialize(comment);
    } else {
      return Boom.notFound('Requeriment not found');
    }
  },

  async updateComment(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;
    // Input
    const commentId = request.params.id;
    const { comment_desc } = request.payload;
    // Treatment
    const comment = await UpdateComment(commentId, comment_desc, serviceLocator);
    // Output
    if (comment) {
      return serviceLocator.commentSerializer.serialize(comment);
    } else {
      return Boom.notFound('Comment not found');
    }
  },

  
  async getComment(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const commentId = request.params.id;

    // Treatment
    const comment = await GetCommentary(commentId, serviceLocator);

    // Output
    if (!comment) {
      return Boom.notFound('Comment not found');
    }

    return serviceLocator.commentSerializer.serialize(comment);
  },

  async deleteComment(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteCommentary(userId, serviceLocator);

    // Output
    return h.response().code(204);
  },

};