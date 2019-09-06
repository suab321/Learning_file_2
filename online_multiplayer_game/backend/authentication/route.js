const router=require('express').Router();
const passport=require('passport');

const {frontURL}=require('../urk')

//facebook routes//
router.get('/login',passport.authenticate('facebook',{scope:['email']}));
router.get('/redirect',passport.authenticate('facebook'),(req,res)=>{
    req.session.user=req.user._id
})
//routes ends//

//google routes//
router.get('/google_login',passport.authenticate('google',{scope:['profile']}));
router.get('/google_redirect',passport.authenticate('google'),(req,res)=>{
    req.session.user=req.user._id;
    req.session.name=req.user.name;
    res.redirect(frontURL);
})
//routes ends//

module.exports={
    authentication:router
}