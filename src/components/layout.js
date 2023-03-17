import Header from "./Header";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  const HeaderMemo = React.memo(Header);
  return (
    <>
      <Head>
        <title>DoD Software Factories</title>
      </Head>
      <HeaderMemo />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
