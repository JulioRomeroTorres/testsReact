const {Router} = require('express');
const router = Router();

const {getNotes, createNotes, getIdnotes, updateIdnotes, deleteIdnotes} = require('../controllers/notes.controllers');


router.route('/')
    .get(getNotes)
    .post(createNotes);

router.route('/:id')
    .get(getIdnotes)
    .put(updateIdnotes)
    .delete(deleteIdnotes);

module.exports = router;