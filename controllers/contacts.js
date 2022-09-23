const mongodb = require('../db/connect');

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').findAll();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const getPerson = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]._id(ObjectId('6329c369d876ca3c2783bea9')));
  });
};

module.exports = { getContacts, getPerson };