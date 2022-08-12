const {Router} = require('express');
const router = Router();

const {getUsers, createUser, getIduser, updateIduser, deleteIduser} = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getIduser)
    .put(updateIduser)
    .delete(deleteIduser);

module.exports = router;