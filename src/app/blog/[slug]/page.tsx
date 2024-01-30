import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.imgContainer}>
                        <Image src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" className={styles.img} alt='' fill />
                  </div>
                  <div className={styles.textContainer}>
                        <h1 className={styles.title}>
                              Title
                        </h1>
                        <div className={styles.detail}>
                              <Image height={50} width={50} src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" className={styles.avatar} alt='' />
                              <div className={styles.detailText}>
                                    <span className={styles.detailTitle}>Author</span>
                                    <span className={styles.detailValue}>Tulsi Das</span>
                              </div>
                              <div className={styles.detailText}>
                                    <span className={styles.detailTitle}>Published</span>
                                    <span className={styles.detailValue}>17.12.2002</span>
                              </div>
                        </div>
                        <div className={styles.content}>
                              Lorem an hello worl id it not usual to be somebone kind and make sure to know the dteeaisl for what we are listtening rashi glub ou
                              is ogoog girll
                        </div>
                  </div>
            </div>
      )
}

export default SinglePostPage;