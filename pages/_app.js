import "../styles/index.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import "../styles/index.css";
import { appWithTranslation } from "../i18next.config";

export default appWithTranslation(function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
})