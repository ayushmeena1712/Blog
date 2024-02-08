import mongoose, { Types, mongo } from "mongoose";

interface User{
      username: String;
      email: String;
      img?: String;
      isAdmin: Boolean;
}


const user = new mongoose.Schema<User>(
      {
            username: {
                  type: String,
                  required: true,
                  unique: true,
                  min: 3,
                  max: 20
            },
            email:{
                  type: String,
                  required: true,
                  min:6
            },
            img:{
                  type: String,
            },
            isAdmin:{
                  type: Boolean,
                  default: false, 
            }
      },
      {
            timestamps: true
      }
      )
      
      
      interface Post{
            title: String;
            userid: String;
            description: String;
            img ?: String;
            slug: String;
      }
      
      const post = new mongoose.Schema<Post>(
            {
                  
         title:{
            type: String,
            required: true,
         },
         userid:{
            type: String,
            required: true,
         },
         description:{
            type: String,
            required: true
         },
         img:{
            type: String,
         }, 
         slug:{
            type: String,
            unique: true,
            required: true
         }
      },
      {
            timestamps: true
      }
)

export const User = mongoose.models.User || mongoose.model("User", user);
export const Post = mongoose.models.Post || mongoose.model("Post", post);