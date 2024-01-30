import JSXStyle from "styled-jsx/style";
import styles from "./blog.module.css";
import PostCard from "@/component/postCard/PostCard";


const BlogPage = () =>{
      return(
        <div className={styles.container}>
          <div className={styles.post}>
          <PostCard />
          </div>
          <div className={styles.post}>
          <PostCard />
          </div>
          <div className={styles.post}>
          <PostCard />
          </div>
          <div className={styles.post}>
          <PostCard />
          </div>
        </div>
      )
    }
    
    export default BlogPage; 