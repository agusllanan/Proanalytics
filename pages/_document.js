import Document, {Html, Head, Main, NextScripting} from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScripting />
                </body>
            </Html>
        )
    }
}