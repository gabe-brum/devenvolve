import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Html lang="pt">

              <meta name="description" content="app" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="" />
              <meta
                property="og:description"
                content=""
              />
              <meta property="og:title" content="" />
              <meta property="og:locale" content="pt_BR" />
              <meta property="og:site_name" content="" />
              <meta property="og:image" content="" />
              <meta property="og:image:type" content="image/jpeg" />
              <meta property="og:image:width" content="825" />
              <meta property="og:image:height" content="464" />

              <link
                rel="shortcut icon"
                type="image/x-icon"
                href=""
              />

            </Html>

            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
}

export default CustomDocument;
