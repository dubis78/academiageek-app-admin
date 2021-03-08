'use strict';

const AuthorizationController = require('../../../interfaces/controllers/AuthorizationController');

module.exports = {
  name: 'oauth',
  version: '1.0.0',
  register: (server) => {

    server.auth.scheme('oauth', require('./scheme'));

    server.auth.strategy('oauth-jwt', 'oauth');

    server.route({
      method: 'POST',
      path: '/oauth/token',
      handler: AuthorizationController.getAccessToken,
      options: {
        description: 'Devolve un token de acceso de OAuth 2',
        tags: ['api'],
      },
    });
  }
};
