import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import Header from '~/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div id="header-container">
        <Header />
        <div id="main-container">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};
