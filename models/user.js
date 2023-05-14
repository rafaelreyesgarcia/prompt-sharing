import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'email already exists'],
    required: [true, 'email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

// the models object is provided by mongoose library and stores registered models.
// if a model named "User" already exists in the models object, it assigns that model to the "User" variable
// this prevents redefining the model and ensures the existing model is reused

// if a model named "User" doesn't exist in the models object, the model function is called to create a new model
// the newly created model is assigned to the "User" variable

const User = models.User || model('User', UserSchema);

export default User;