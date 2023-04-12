
import styles from '@/src/styles/MainScreen.module.css';


import Post from '../post';
import { useState } from 'react';

import CreatePost from '../createPost';




export default function MainScreen({ posts }) {


    const [content, setContent] = useState("");

    function cropText(textContent) {
        //setContent(textContent)
        let cropContent = "";
        if (textContent.length > 545) {
            cropContent = textContent.slice(0, 545);


            return (cropContent + "...")
        } else {
            return textContent
        }

    }

    function setDate(created_datetime) {
        //"2023-04-12T17:05:29.312893Z"
        let postDate = new Date(created_datetime);
        let moment = new Date(Date.now());
        let diff = moment.getTime() - postDate.getTime();
        return Math.round(diff / 60000)


    }

    setDate();


    return (
        <section className={styles.mainSection}>
            <header className={styles.header}>
                <a className={styles.headerLink} href='/'>CodeLeap Network</a>
            </header>
            <section className={styles.main} >
                <CreatePost />

                {posts.results?.map((post, i) => (
                    <Post key={i} title={post.title} username={post.username} content={cropText(post.content)} fullContent={post.content} created_datetime={setDate(post.created_datetime)} />
                ))}



            </section>
            <section>


            </section>


        </section>
    )
}


