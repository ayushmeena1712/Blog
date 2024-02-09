import { Post, iPost } from "@/component/lib/model"
import { NextResponse } from "next/server";

export const GET = async (request: any, {params}: any)=>{
      try {
            const {slug} = params;
            const post: iPost|null = await Post.findById(slug);
            return NextResponse.json(post);
      } catch (error) {
            console.error(error);
            throw new Error("Single post sending in api");
      }
}