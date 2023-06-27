import { SWRConfig } from "swr";
import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <> 
    <CookiesProvider>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </CookiesProvider>
   
    </>
   
  );
}
