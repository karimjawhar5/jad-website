import { useRouter } from 'next/router';
import '@/styles/globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import "prismjs/themes/prism.css";
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isProjectPage = router.pathname.startsWith('/projects/');
  
  if (isProjectPage) {
    return (<Component {...pageProps} />);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}