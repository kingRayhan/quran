import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import { Button } from "antd";
import Surah from "../components/Surah";

const HomPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />

      <div className="my-20 wrapper">
        <h2 className="text-2xl font-semibold uppercase ">Surah</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Surah meaning="The Opener" name="Fatiha" serial={1} />
        </div>
      </div>
    </div>
  );
};

export default HomPage;
