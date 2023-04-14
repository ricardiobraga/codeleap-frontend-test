

import styles from '@/src/styles/MainScreen.module.css';





import CreatePost from '../createPost';
import Post from '../post';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DeleteModal from '../deleteModal';


export default function MainScreen({  }) {
  
  const [posts, setposts] = useState({})


  function getposts() {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then(data => data.json())
      .then(res => setposts(res));

      console.log("posts")
      
      
  }

  useEffect(() => {
    getposts()

  },[])
  

  function refresh(refresh) {
    refresh()
    console.log("refresh");
  }
 
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


  return (
    <>       

          <section id='mainscreen' className={styles.mainSection}>
            <a id='mainscreen'></a>
            <header className={styles.header}>
              <a className={styles.headerLink} href='/'>CodeLeap Network</a>
            </header>
            <section className={styles.main} >
              <CreatePost getposts={getposts}  />
              

              {posts.results?.map((post, i) => (
                <Post key={i} title={post.title} id={post.id} username={post.username} content={cropText(post.content)} fullContent={post.content} created_datetime={setDate(post.created_datetime)} />
              ))}

            </section>
            <DeleteModal getposts={getposts} />
          </section>
    </>
  )
}


