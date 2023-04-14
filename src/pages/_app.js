import '@/src/styles/globals.css';
import Router from 'next/router';
import nProgress from 'nprogress';
import { Provider } from 'react-redux';
import store from '../redux/store';







Router.events.on("routeChangeStart", (url) => {
  console.log(`loading: ${url}`);
  nProgress.start;
});

Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <div >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      
    </div>

  )


}
