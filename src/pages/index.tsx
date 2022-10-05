import Head from "next/head";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Button } from "antd";
import Surah from "../components/Surah";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Chapter } from "../models/ChapterModel";

const HomPage = () => {
  const { data, isLoading } = useQuery(["chapters"], async () => {
    const res = await axios.get("https://api.quran.com/api/v3/chapters");
    return res.data.chapters as Chapter[];
  });

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />

      <div className="my-20 wrapper">
        <h2 className="text-2xl font-semibold uppercase ">Surah</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((chapter, i) => (
            <Surah
              key={i}
              arabic_name={chapter.name_arabic}
              english_name={chapter.name_simple}
              meaning={chapter.translated_name.name}
              number_of_verses={chapter.verses_count}
              revelation_place={chapter.revelation_place}
              serial={chapter.chapter_number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomPage;
