/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'super-engine',
  lazyLoading: true,

  isDevelopingAddon() {
    return true;
  }
});
