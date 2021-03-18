'use strict';

const StateController = require('../controllers/StateController');

module.exports = {
  name: 'prospects',
  version: '1.0.0',
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/state/{id}',
        handler: StateController.getState,
        options: {
          description: 'Get a prospect for your {id}',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/state/{id}',
        handler: StateController.updateState,
        options: {
          description: 'Actualizar un prospecto',
          tags: ['api'],
        },
      },
    ]);
  }
};