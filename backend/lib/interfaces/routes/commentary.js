'use strict';

const CommentaryController = require('../controllers/CommentaryController');

module.exports = {
  name: 'comments',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      /*{
        method: 'GET',
        path: '/users',
        handler: UsersController.findUsers,
        config: {
          auth: 'oauth-jwt',
        //  handler: (request) => request.auth.credentials.uid,
          description: 'List all users',
          tags: ['api'],
        }
      },
      {
        method: 'POST',
        path: '/users',
        handler: CommentaryController.createUser,
        options: {
          description: 'Create a user',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/users/{id}',
        handler: UsersController.getUser,
        options: {
          description: 'Get a user for your {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/users/{id}',
        handler: UsersController.deleteUser,
        options: {
          description: 'Delete a user',
          tags: ['api'],
        },
      },*/
      {
        method: 'PUT',
        path: '/comment/{id}',
        handler: CommentaryController.updateCommentary,
        options: {
          description: 'Update an existing ',
          tags: ['api'],
        },
      },
    ]);
  }
};