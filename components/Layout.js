import Head from "next/head";
import React from "react";

const Layout = ({ title, description, children }) => {
  return (
    <>
      {" "}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:description" content="{description}" />
        <meta property="og:title" content="{title}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
