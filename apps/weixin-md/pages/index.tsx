import Head from "next/head";
import React from "react";
import { Editor } from "../components/Editor";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ToastRoot } from "../components/Toast";
import Script from "next/script";

export default function Web() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Head>
        <title>公众号排版工具 | 一颗小树</title>
        <meta
          name="description"
          content="一款高度简洁的微信 Markdown 编辑器 - 一颗小树"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Header />
      <div style={{ height: "calc(100% - 110px - 52px)" }}>
        <Editor />
      </div>
      <Footer />
      <ToastRoot />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8HS3PBBC70" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8HS3PBBC70');
        `}
      </Script>
    </div>
  );
}
