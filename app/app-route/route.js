import Route from '@ember/routing/route';
import {
  inject as injectService,
} from '@ember/service';

export default Route.extend({
  keyManager: injectService(),
  setupController(controller, model) {
    this._super(controller, model);

    const manager = this.get('keyManager');
    manager.register({
      name: 'toggle',
      keys: ['space'],
      downCallback: () => {
      },
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      const manager = this.get('keyManager');
      manager.deregister({ name: 'toggle' });
    }
  }
});
