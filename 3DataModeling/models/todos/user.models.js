import mogoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
        },
        password:{
            type:String,
            required: true,
        },
    },{timestamps: true}

    )

export const User = mongoose.model("User", userSchema)