const noteCtrl  = {};
const Note = require('../models/Note');
const noteModel = require('../models/Note')

noteCtrl.getNotes  = async (req,res) => {
    const notes = await noteModel.find();
    res.json(notes)
};
noteCtrl.createNotes = async (req,res) => { 
    const {title, author, content, date } = req.body;
    const newNote = new Note({
        title: title,
        author: author,
        content: content,
        date:date
    });
    console.log(newNote);
    await newNote.save();
    res.json({message: "Note created"}) 
};

noteCtrl.getIdnotes    = async (req,res) => { 
    const noteID = await Note.findById(req.params.id)
    console.log(noteID)
    res.json(noteID) 
};
noteCtrl.updateIdnotes = async (req,res) => {

    const noteID = await Note.findByIdAndUpdate({_id: req.params.id }, req.body);

    res.json({message : 'Update ID Id Notes '});
}

noteCtrl.deleteIdnotes = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message : 'Delete Id Notes '});
}

module.exports = noteCtrl;