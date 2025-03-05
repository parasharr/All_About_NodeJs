import { asyncHandler } from "../utils/asycHandler.js";
import {apiError} from "../utils/apiError.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty ,etc.
  // check if user already logged in : username / email
  // check for images, check for avatars
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return reponse , if not error response

  const { fullname, username, email, password } = req.body;
  console.log("email :", email);

  // in this array if every field is available then trim, even after the trim if the field is empty then it will return true
  if([
    fullname, email, username, password
  ].some((field)=> field?.trim() === "")){
    throw new apiError(400, "All fields are required")
  }
});

export default registerUser;
