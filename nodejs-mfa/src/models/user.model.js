import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isMfaActive: {
        type: Boolean,
    },
    twoFactorSecret: {
        type: String,
    }
}, { timestamps: true, versionKey: false })

userSchema.pre("save", async function (next) {
    if (!this.isModified) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// userSchema.methods.generateAccessToken = async function () {
//     return jwt.sign(
//         {
//             _id: this._id,
//             username: this.username,
//             role: this.role
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }

const User = model("User", userSchema);
export default User;