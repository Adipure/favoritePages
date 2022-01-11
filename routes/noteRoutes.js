const router = require('express').Router()
const { Post, User, Note } = require('../models')
const passport = require('passport')

// GET all posts
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
 const notes = await Note.find({}).populate('user')
 res.json(notes)
})

// POST one post
router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
 const note = await Note.create({ ...req.body, user: req.user._id })
 await Post.findByIdAndUpdate(req.body.postid, { $push: { note: note._id } })
 await User.findByIdAndUpdate(req.user._id, { $push: { notes: note._id } })
 res.json(note)
})
// Delete one post


module.exports = router
