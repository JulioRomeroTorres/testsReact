const usersCtrl = {};
const userModel = require('../models/User')

usersCtrl.getUsers = async (req,res) => {
    const users = await userModel.find()
    res.json(users)
}
usersCtrl.createUser = (req,res) => res.json({message : 'Post all Users'});

usersCtrl.getIduser = (req,res) => res.json({message : 'Get id all Users'});
usersCtrl.updateIduser = (req,res) => res.json({message : 'Put id all Users'});
usersCtrl.deleteIduser = (req,res) => res.json({message : 'delete id all Users'});

module.exports = usersCtrl;