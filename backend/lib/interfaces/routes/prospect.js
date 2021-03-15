'use strict';

const ProspectsController = require('../controllers/ProspectsController');

module.exports = {
  name: 'prospects',
  version: '1.0.0',
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/prospects',
        handler: ProspectsController.findProspects,
        config: {
        //auth: 'oauth-jwt',
        //  handler: (request) => request.auth.credentials.uid,
          description: 'Lista de todos los prospectos',
          tags: ['api'],
        }
      },
      {
        method: 'POST',
        path: '/prospects',
        handler: ProspectsController.createProspect,
        options: {
          description: 'Crear un prospecto',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/prospect/{id}',
        handler: ProspectsController.updateProspect,
        options: {
          description: 'Actualizar un prospecto',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/prospect/{id}',
        handler: ProspectsController.getProspect,
        options: {
          description: 'Get a prospect for your {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/prospect/{id}',
        handler: ProspectsController.deleteProspect,
        options: {
          description: 'Delete a prospect',
          tags: ['api'],
        },
      }
    ]);
  }
};