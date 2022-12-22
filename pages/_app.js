import "../styles/styles.css";
import ContextWrapper from "./components/ContextWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
