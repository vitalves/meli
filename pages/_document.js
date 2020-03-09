import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    try{
      const page = renderPage(App => props => sheet.collectStyles(<App {...props}/>));
      const styleTags = sheet.getStyleElement();

      return {...page, styleTags };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/global.css" />
          { this.props.styleTags }
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
