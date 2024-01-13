"use client";
import { getBoardById } from "@components/data";
import React, { Suspense, useState } from "react";
import { Hearts } from "react-loader-spinner";
import "@styles/board.css";
import Board from "@components/Board";

async function fetchData(boardId: string) {
  const boardInfo = await getBoardById(boardId);
  if (boardInfo) {
    return boardInfo;
  } else {
    throw new Error(`Board with id ${boardId} does not exist`);
  }
}

export async function Page({ params }: { params: { boardId: string } }) {
  const board = await fetchData(params.boardId);

  return (
    <Suspense fallback={<Hearts color="green" />}>
      <Board board={board} />
    </Suspense>
  );
}

export default Page;
