import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content: {
        type: "String",
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjextId,
            ref:"SubTodos"
        }
    ]  // Array of Sub-Todos
}, {timestamps: true})

export const SubTodo = mongoose.model("Todo", TodoSchema);