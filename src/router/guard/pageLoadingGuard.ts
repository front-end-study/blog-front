import { Router } from 'vue-router';
import { createLoadingPlaceholder, finishLoadingPlaceholder } from '../../utils/loading';

export function createPageLoadingGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    createLoadingPlaceholder();
    next();
  });

  router.afterEach(() => {
    finishLoadingPlaceholder();
  });
}
