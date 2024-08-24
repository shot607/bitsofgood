import mongoose from "mongoose";
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hoursTrained: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: Date.now()
    },
    profilePicture: {
        type: String,
        required: false
    }
});

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;
