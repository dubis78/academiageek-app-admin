'use strict';

const CommentController = require('../controllers/CommentController');

module.exports = {
  name: 'comments',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/comment/{id}',
        handler: CommentController.getComment,
        options: {
          description: 'Get a comment for your {id}',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/comment/{id}',
        handler: CommentController.createComment,
        options: {
          description: 'Create a comment',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/comment/{id}',
        handler: CommentController.updateComment,
        options: {
          description: 'Update an existing ',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/comment/{id}',
        handler: CommentController.deleteComment,
        options: {
          description: 'Delete a comment',
          tags: ['api'],
        },
      },
    ]);
  }
};