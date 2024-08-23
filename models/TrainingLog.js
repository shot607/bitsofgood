const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingLogSchema = new Schema({
    date: {
        type: Date,
        required: true,
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

const TrainingLog = mongoose.model("TrainingLog", animalSchema);
export default TrainingLog;

```
TrainingLog {
  _id: ObjectId // training log's id
  date: Date // date of training log
  description: string // description of training log
  hours: number // number of hours the training log records
  animal: ObjectId // animal this training log corresponds to
  user: ObjectId // user this training log corresponds to
  trainingLogVideo?: string // pointer to training log video in cloud storage --> used in Expert level
}
```