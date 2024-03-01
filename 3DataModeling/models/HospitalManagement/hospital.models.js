const mongoose from "mongoose";

const hostipalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode:{
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String
        },
    ],
}, {Timestamps: true});

export const Hospital = mongoose.model(
    'Hospital',
    hostipalSchema
);