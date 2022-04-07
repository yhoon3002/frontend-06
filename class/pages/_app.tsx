import "antd/dist/antd.css";
// import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgiX_96w9Q6MFav0V3Ju0FIEa2wSvqaw",
  authDomain: "hoonisite.firebaseapp.com",
  projectId: "hoonisite",
  storageBucket: "hoonisite.appspot.com",
  messagingSenderId: "725072399216",
  appId: "1:725072399216:web:4dab94aa354e420e88ddb5",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
