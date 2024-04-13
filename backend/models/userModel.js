import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength:6
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  profilePic:{
    type:String,
    default:"",
  }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

 export default User;
