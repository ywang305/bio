import "../styles/globals.css";
import Chakra from "../components/chakra";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Navbar path={router.pathname} />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
