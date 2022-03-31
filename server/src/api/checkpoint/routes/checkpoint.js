'use strict';

/**
 * checkpoint router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::checkpoint.checkpoint');
