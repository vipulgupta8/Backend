import mongoose from " mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    custumer:{
        type: mongoose.Schema.Type.ObejctId,
        ref: "User"
    },
    orderItems:{
        type: [orderItemSchema],
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamp: true});


export const Order = mongoose.model("Order", orderSchema)