import { getPosts } from "@/component/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/component/postCard/PostCard";
import { Metadata } from "next";

export interface posts {
  userid: string;
  id: number;
  title: string;
  body: string;
  img: string;
}



const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog');
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  else {
    console.log("working well")
  }
  return res.json();
}

export const metadata: Metadata = {
  title:"Blog Section",
  description: "Blog Page",
};

const BlogPage = async () => {
  console.log("blog page");
  // const posts = await getPosts(); 
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((p: posts) => (
        <div className={styles.post} key={p.id}> 
          <PostCard item={p} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage; 
