
import styles from '@/src/styles/MainScreen.module.css';

import PostEditor from '../components/postEditor/indes';
import Post from '../components/post/indes';


export default function MainScreen() {
  


    return (
        <section className={styles.mainSection}>
            <header className={styles.header}>
                <h1>CodeLeap Network</h1>
            </header>
            <section className={styles.main} >
                <PostEditor />
                <Post title="My First Post at CodeLeap Network!" />
            </section>
            <section>


            </section>


        </section>
    )
}
