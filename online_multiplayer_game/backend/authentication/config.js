const passport=require('passport');
const facebook=require('passport-facebook').Strategy;
const google=require('passport-google-oauth20').Strategy

//developer made modules//
const {User}=require('../Database/db');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser(async(id,done)=>{
    const user=await User.findById({_id:id});
    done(null,user);
})


//facebook login module//
passport.use(new facebook({
    clientID:'2332989050284629',
    clientSecret:'65ecd94356db1447d203318924643103',
    callbackURL:'http://localhost:3002/authentication/redirect'
},
async function(accessToken,refreshToken,profile,done){
// try{
//     const data=await User.findOne({facebook_id:profile.})
// }
console.log(profile);
}));


//google_login module
passport.use(new google({
    clientID:'85877161047-6jb3f2j1ips17cmh5snec3ml6pq5nicb.apps.googleusercontent.com',
    clientSecret:'9qJDF1hIp4bxNU9wiVgEV7JZ',
    callbackURL:'http://localhost:3002/authentication/google_redirect'
},
async function(accessToken,refreshToken,profile,done){
    // console.log(profile);
    try{
        const user=await User.find({social_id:profile.id});
        if(!user.length){
            const data=new User;
            data.social_id=profile.id;
            data.name=profile.displayName;
            const user1=await data.save();
            done(null,user1);
        }
        else
            done(null,user[0]);
    }catch(err){
        console.log(err);
    }
}
));