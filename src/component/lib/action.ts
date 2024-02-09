import { revalidatePath } from "next/cache";
import connectToDB from "./connectToDB";
import { Post,iPost } from "./model";

export const addPost = async (formdata: any)=>{
      "use server";
      console.log("inside the add post in action.ts")
      const {title, description, slug, userid} = Object.fromEntries(formdata);
      try{
            connectToDB();
            const newPost: iPost = new Post({
                  title, 
                  description,
                  slug,
                  userid
            })

            // await newPost.save();
            console.log("saved the data");
            revalidatePath('/blog');
      }catch(error){
            console.error(error);
      }
}