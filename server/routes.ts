import * as express from 'express';

import QuoteCtrl from './controllers/quote';
import UserCtrl from './controllers/user';

export default function setRoutes(app) {

  const router = express.Router();

  const quoteCtrl = new QuoteCtrl();
  const userCtrl = new UserCtrl();

  // Quotes
  router.route('/quotes').get(quoteCtrl.getAll);
  router.route('/quotes/count').get(quoteCtrl.count);
  router.route('/quote').post(quoteCtrl.insert);
  router.route('/quote/:id').get(quoteCtrl.get);
  router.route('/quote/:id').put(quoteCtrl.update);
  router.route('/quote/:id').delete(quoteCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our appliquoteion with the prefix /api
  app.use('/api', router);

}
