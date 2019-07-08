const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser((user,done)=>{
done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});
//https://drhealthcart.herokuapp.com
passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL:'/auth/google/redirect',
        clientID:'58649807587-fu89c196dd0v7qjv69mk0umu3grv9798.apps.googleusercontent.com',
        clientSecret:'Sg7VjRmInTbNtQN9-S6mnkLc'
    },(accessToken,refreshToken,profile,done)=>{
        //passpot callback function
        console.log('passport callback function fired');
        console.log('');
        console.log(profile);
        done(null,profile);
       })
)

