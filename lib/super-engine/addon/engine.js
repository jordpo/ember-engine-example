import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const EngineChild = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(EngineChild, modulePrefix);

export default EngineChild;
