import Lay from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Lay />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
