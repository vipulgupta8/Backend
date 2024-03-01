const mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experienceInYear:{
        Type: Number,
        default: 0
    },
    workInHospitals:[
        {
            type: mongoose.Schema.Type.ObjectId,
            ref:"Hospital"
        },
    ],
}, {Timestamps: true});

export const Doctor = mongoose.model(
    'Doctor',
    doctorSchema
);