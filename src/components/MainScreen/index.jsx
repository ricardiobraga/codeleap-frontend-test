

import styles from '@/src/styles/MainScreen.module.css';





import CreatePost from '../createPost';
import Post from '../post';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DeleteModal from '../deleteModal';
import UpdateModal from '../updateModal';


export default function MainScreen({  }) {

  const router = useRouter();

  const username = router.query.mainScreen
  
  
  
  const [test, setTest] = useState(router.query.mainScreen)
  const [posts, setposts] = useState({})


  function getposts() {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then(data => data.json())
      .then(res => setposts(res));

      
      
      
  }

  useEffect(() => {
    getposts()

  },[])  


 
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

          <section id="mainscreen"  className={styles.mainSection}>
            <a id="mainscreen"  ></a>
            <header className={styles.header}>
              <a className={styles.headerLink} href='/'>CodeLeap Network</a>
            </header>
            <section className={styles.main} >
              <CreatePost getposts={getposts} usernameQuery={username}   />
              

              {posts.results?.map((post, i) => (
                <Post key={i} title={post.title} usernameQuery={username}  id={post.id} username={post.username} content={cropText(post.content)} fullContent={post.content} created_datetime={setDate(post.created_datetime)}  delay={.5 + (i /10)}/>
              ))}

            </section>
            <DeleteModal getposts={getposts} />
            <UpdateModal getposts={getposts} />
          </section>
    </>
  )
}


