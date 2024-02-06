import styles from "./blog.module.css";
import PostCard from "@/component/postCard/PostCard";

export interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}



const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  else {
    console.log("working well")
  }
  return res.json();
}

const BlogPage = async () => {
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
