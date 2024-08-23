const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false
    }
})
```
User {
  _id: ObjectId // user's ID
  firstName: string // user's first name
  lastName: string // user's last name
  email: string // user's email
  password: string // user's password used only in level 3 and beyond
  profilePicture?: string // pointer to user's profile picture in cloud storage --> used in Expert level
}
```

const User = mongoose.model('User', userSchema);
export default User;