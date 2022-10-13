import { useRouter } from "next/router";
import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Hero from "../components/Hero";
import ChapterPageHero from "../components/ChapterHero";
import httpClient from "../app/httpClient";
import { Chapter } from "../models/ChapterModel";

interface Props {
  chapterId: string;
  chapter: Chapter;
}

const ChapterDetails: NextPage<Props> = ({ chapter }) => {
  return (
    <div>
      <ChapterPageHero />
      <pre>{JSON.stringify(chapter, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const chapterId = context.query.chapterId;

  const chapter = await httpClient.get(`chapters/${chapterId}`);
  //   const verses = await httpClient.get(`chapters/${chapterId}/verses`);

  return {
    props: {
      chapterId: context.query.chapterId as string,
      chapter: chapter.data.chapter,
      //   verses,
    },
  };
};

export default ChapterDetails;
