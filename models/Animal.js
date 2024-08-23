const mongoose = require('mongoose');
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
    dataOfBirth: {
        type: Date,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    }
});

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;

```
Animal {
  _id: ObjectId // animal's ID
  name: string // animal's name
  hoursTrained: number // total number of hours the animal has been trained for
  owner: ObjectId // id of the animal's owner
  dateOfBirth?: Date // animal's date of birth
  profilePicture?: string // pointer to animal's profile picture in cloud storage --> used in Expert level
}
```