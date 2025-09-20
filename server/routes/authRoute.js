const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../models/userModels')
const passport = require('passport')

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/connexion' }),
  function(req, res) {
    const user = req.user;
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn : "1d"});
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"strict"
    })
    res.redirect(`${process.env.FRONTEND_URL}/Dashboard`);
  });

module.exports = router