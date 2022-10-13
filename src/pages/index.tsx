import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import httpClient from "../app/httpClient";
import Hero from "../components/Hero";
import Surah from "../components/Surah";
import { Chapter } from "../models/ChapterModel";

interface Props {
  chapters: Chapter[];
}

const HomPage: NextPage<Props> = ({ chapters }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />

      <div className="my-20 wrapper">
        <h2 className="mb-4 text-2xl font-semibold uppercase">Surah</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {chapters?.map((chapter, i) => (
            <Link href={`/${chapter.id}`} key={i}>
              <a>
                <Surah
                  arabic_name={chapter.name_arabic}
                  english_name={chapter.name_simple}
                  meaning={chapter.translated_name.name}
                  number_of_verses={chapter.verses_count}
                  revelation_place={chapter.revelation_place}
                  serial={chapter.chapter_number}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// This make sure that the data is fetched before the page is rendered
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await httpClient.get("chapters");

  return {
    props: {
      chapters: res.data.chapters,
    },
  };
};

export default HomPage;
