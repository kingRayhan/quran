import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import { Button } from "antd";

const HomPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
    </div>
  );
};

export default HomPage;
