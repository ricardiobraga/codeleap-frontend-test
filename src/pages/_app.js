import '@/src/styles/globals.css';
import Router from 'next/router';
import nProgress from 'nprogress';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { motion } from 'framer-motion';






Router.events.on("routeChangeStart", (url) => {
  console.log(`loading: ${url}`);
  nProgress.start;
});

Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps, router }) {
  return (
    <motion.div key={Router.push} initial="pageInitial" animate="pageAnimate" transition={{ type: "spring", stiffness: 100 }}  variants={{
      pageInitial: {
        opacity: 0,
        y: 100
      },
      pageAnimate: {
        opacity: 100,
        y: 0,
        
        
      }
    }}>


      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      
    </motion.div>

  )


}
