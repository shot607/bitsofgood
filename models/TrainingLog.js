import mongoose from "mongoose";
const Schema = mongoose.Schema;

const trainingLogSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
    },
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Animal"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    trainingLogVideo: {
        type: String,
        required: false
    }
});

const TrainingLog = mongoose.model("TrainingLog", trainingLogSchema);
export default TrainingLog;
