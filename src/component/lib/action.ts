"use server";
import { revalidatePath } from "next/cache";
import connectToDB from "./connectToDB";
import { Post, User, iPost, iUser } from "./model";
import bcrypt from "bcryptjs";

export const addPost = async (PreviousState: any, formdata: any) => {
      console.log("inside the add post in action.ts")
      const { title, description, slug, userid } = Object.fromEntries(formdata);
      try {
            connectToDB();
            const newPost: iPost = new Post({
                  title,
                  description,
                  slug,
                  userid
            })

            await newPost.save();
            console.log("saved the data");
            revalidatePath('/blog');
      } catch (error) {
            console.error(error);
      }
}

export const addUser = async (prevState: any, formdata: FormData) => { 
      console.log("inside the add user in action.ts")
      const { username, email, password, img, passwordRepeat } = Object.fromEntries(formdata);
      if(password !== passwordRepeat){
            return {error : "Password Doesn't matches"};
      }
      try {
            connectToDB();
            const already: Boolean = await User.findOne({username})? true: false;
            if(already){
                  console.log("user already exist");
                  return {error : "Already exist the user"};
            }

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            console.log(hashPassword);
            const newUser: iUser = new User({
                  username, 
                  password: hashPassword, 
                  email, 
            })
            if(username && password && email){
                  await newUser.save();
                  return {success : true};
            }
            console.log("data is not saved");

      } catch (error) {
            console.error(error);
            return { error: "An error occurred while processing your request" };
      }
}