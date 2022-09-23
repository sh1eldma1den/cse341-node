const routes = require('express').Router();
const contactsController = require('../controllers/contacts.js');

routes.get('/', contactsController.getContacts);
routes.get('/_id', contactsController.getPerson);

module.exports = routes;