import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import fuchsia from "tailwindcss/colors";
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={fuchsia[500]} height={5} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
