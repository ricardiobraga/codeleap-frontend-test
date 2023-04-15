
import styles from '@/src/styles/MainScreen.module.css';

import CreatePost from '../createPost';
import Post from '../post';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DeleteModal from '../deleteModal';
import UpdateModal from '../updateModal';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

import { useDispatch } from 'react-redux';

import { logout } from '@/src/actions/userSlice';

export default function MainScreen({ }) {
  const controls = useAnimation();
  const router = useRouter();

  const dispatch = useDispatch();


  const username = router.query.mainScreen

  
  const [posts, setposts] = useState({})


  function getposts() {
    fetch('https://dev.codeleap.co.uk/careers/')
      .then(data => data.json())
      .then(res => setposts(res));

    animateControl()
    
    


  }

  useEffect(() => {
    getposts()

  }, [])

  function animateControl(key) {
   controls.set({
      opacity: 0,
      y: 100
    })
    controls.start({
      opacity: 100,
      y: 0,
    })
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

    let postDate = new Date(created_datetime);
    let moment = new Date(Date.now());
    let diff = moment.getTime() - postDate.getTime();
    return Math.round(diff / 60000)


  }

  function handleClick() {
    dispatch(logout())
  }


  return (
    <>



      <motion.section id="mainscreen" className={styles.mainSection} initial="hidden" animate="visible" variants={{
        hidden: {
          y: "100vh",
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .5,
            ease: "easeOut",


          }

        },
      }}>

        <header className={styles.header}>
          <Link className={styles.headerLink} href='/' onClick={handleClick}>CodeLeap Network</Link>
        </header>
        <section className={styles.main}>
          <CreatePost getposts={getposts} usernameQuery={username} />


          {posts.results?.map((post, i) => (
            <Post key={i} controls={controls} title={post.title} usernameQuery={username} id={post.id} username={post.username} content={cropText(post.content)} fullContent={post.content} created_datetime={setDate(post.created_datetime)} delay={.2 + (i / 10)} />
          ))

          }

        </section>
      </motion.section>

      <UpdateModal getposts={getposts} className={styles.modal} />
      <DeleteModal getposts={getposts} />
    </>
  )
}


