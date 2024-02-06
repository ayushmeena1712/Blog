import Image from 'next/image';
import styles from './singlePost.module.css';
import { ParsedUrlQuery } from 'querystring';

const getData = async (slug: number) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
            if (!res.ok) {
              throw new Error("something went wrong");
            }
            else {
              console.log("working well")
            }
            return res.json();
          }
    
          

const SinglePostPage = async ({params}: {params: any}) => { 
      const {slug} = params;
      const post = await getData(slug);
      return (
            <div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" className={styles.img} alt='' fill />
                  </div>
                  <div className={styles.textContainer}>
                        <h1 className={styles.title}>
                              {post.title}
                        </h1>
                        <div className={styles.detail}>
                              <Image height={50} width={50} src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" className={styles.avatar} alt='' />

                              <div className={styles.detailText}>
                                    <span className={styles.detailTitle}>Published</span>
                                    <span className={styles.detailValue}>17.12.2002</span>
                              </div>
                        </div>
                        <div className={styles.content}>
                              {post.body}
                        </div>
                  </div>
            </div>
      )
}

export default SinglePostPage;