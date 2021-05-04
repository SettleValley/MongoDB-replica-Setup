// pages/_app.js
import "reflect-metadata";
import 'bootstrap/dist/css/bootstrap.css'


import { Provider } from 'next-auth/client'
import Layout from "../components/layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}