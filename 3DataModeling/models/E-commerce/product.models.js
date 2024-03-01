import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        type:String,
        required: true
    },
    productImage: {
        type: string
    },
    price: {
        type: Number,
        default: 0,
        },
    stocks:{
        default:0,
        type: Number
    },
    category:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: monsoose.Schema.Type.ObjectId,
        ref: "User"
    }
}, {timestamp: true})

export const Product = mongoose.model("Product", productSchema)