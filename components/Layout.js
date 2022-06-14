import Head from "next/head";
import React from "react";

const Layout = ({ title, description, children }) => {
  return (
    <div>
      {" "}
      <Head>
        <title>{title}</title>
        <meta name="description" content="description" />
        <meta property="og:site_name" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
