import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-3RBK30WEKY"
                    ></script>
                    <script
                        async
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-3RBK30WEKY');`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
