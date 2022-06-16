import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:description" content="{description}" />
        <meta property="og:title" content="{title}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-10 px-3 min-h-screen overflow-hidden bg-primary-light dark:bg-gray-900  antialiased font-montserrat">
        <div className="w-full h-full ">
          <Header></Header>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
