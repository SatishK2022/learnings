import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.model.js";

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username })

            if (!user) {
                return done(
                    null,
                    false,
                    { message: "User not found" }
                );
            }

            const isPassValid = await user.isPasswordCorrect(password);

            if (!isPassValid) {
                return done(
                    null,
                    false,
                    { message: "Invalid password" }
                );
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

passport.serializeUser((user, done) => {
    console.log("We are inside serializedUser");
    done(null, user._id);
})

passport.deserializeUser(async (_id, done) => {
    try {
        console.log("We are inside deserializedUser");
        const user = await User.findById(_id);

        done(null, user);
    } catch (error) {
        done(error)
    }
})