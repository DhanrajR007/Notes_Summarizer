import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default:
        "https://imgs.search.brave.com/mJI8lb454an_v1Up1KuK991LNPGkXQ4-pfTu4NNaKYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYWNjb3VudC1p/Y29uLXVzZXItaWNv/bi12ZWN0b3ItZ3Jh/cGhpY3NfMjkyNjQ1/LTU1Mi5qcGc_c2Vt/dD1haXNfc2VfZW5y/aWNoZWQmdz03NDAm/cT04MA",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
