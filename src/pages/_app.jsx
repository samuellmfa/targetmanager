import { SWRConfig } from "swr";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { CookiesProvider } from "react-cookie";
import Script from "next/script";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof document !== "undefined") {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      }
    };

    loadBootstrap();
  }, []);

  return (
    <>
      <CookiesProvider>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
          
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </SWRConfig>
      </CookiesProvider>
    </>
  );
}

 function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <App Component={Component} pageProps={pageProps} />
    </>
  );
}
