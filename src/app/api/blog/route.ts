import { Post, iPost } from "@/component/lib/model";
import { NextResponse } from "next/server";

export const GET = async () =>{
      try {
            const posts: iPost[] = await Post.find();
            return NextResponse.json(posts);
      } catch (error) {
            console.error(error);
            throw new Error("in blog api")
      }
}


