const routes = require('express').Router();
const contactsController = require('../controllers/contacts.js');

routes.get('/', contactsController.getContacts);
routes.get('/_id', userController.getPerson);

module.exports = routes;