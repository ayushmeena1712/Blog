import { ObjectId } from "mongodb";
import connectToDB from "./connectToDB";
import { Post, User } from "./model";

export const getPosts = async ()=>{
      console.log("we are get posts");
      try{
            await connectToDB();
            const post = await Post.find(); 
            return post;
      }catch(error){
            console.error(Error);
            throw new Error("Failed to fetch the data from the database");
      }
}

export const getPost = async (slug: string)=>{
      try{
            await connectToDB();
            const post = await User.findById(slug);
            return post;
      }catch(error){
            console.error(Error);
            throw new Error("Failed to fetch the post from teh database");
      }
}

export const getUser = async (id: string)=>{
      try{
            connectToDB();
            const user = await User.findById(id);
            return user;
      }catch(error){
            console.error(Error);
            throw new Error("Failed to fetch the user from teh database");
      }
}


export const getUsers = async ()=>{
      try{
            connectToDB();
            const users = await User.find();
            return users;
      }catch(error){
            console.error(Error);
            throw new Error("Failed to fetch the user from teh database");
      }
}