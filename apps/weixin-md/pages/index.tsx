import React from "react";
import { Editor } from "../components/Editor";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Web() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div style={{ height: "calc(100% - 110px - 52px)" }}>
        <Editor />
      </div>
      <Footer />
    </div>
  );
}
