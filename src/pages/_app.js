import '@/src/styles/globals.css';
import Router from 'next/router';
import nProgress from 'nprogress';


Router.events.on("routeChangeStart", (url) => {
  console.log(`loading: ${url}`);
  nProgress.start;
});

Router.events.on("routeChangeComplete", ()=> nProgress.done());
Router.events.on("routeChangeError", ()=> nProgress.done());

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
