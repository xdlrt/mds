import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { ToastRoot } from "../components/Toast";
import Script from "next/script";
import { RednoteEditor } from "../components/RednoteEditor";
import { RednoteHeader } from "../components/RednoteHeader";

export default function RedNote() {
  return (
    <div className="w-full h-screen flex flex-col px-3 md:px-6">
      <Head>
        <title>Rednote Markdown Converter</title>
        <meta
          name="description"
          content="A highly concise Rednote Markdown editor! "
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <RednoteHeader />
      <div style={{ height: "calc(100% - 110px - 52px)" }}>
        <RednoteEditor />
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
