"use client";
import React from "react";
import "@styles/board.css";
import Board from "@components/Board";
import ErrorPage from "@components/NotFound";
import BoardRepository from "@repositories/boardRepository";

export default async function Page({
  params,
}: {
  params: { boardId: string };
}) {
  const boardRepo = new BoardRepository();
  const board = await boardRepo.getBoardById(params.boardId);

  return (
    <div>
      {board ? (
        <Board board={board} />
      ) : (
        <ErrorPage
          errorMessage={`Error! board with id '${params.boardId}' does not esist!`}
          tip="try to found your board using search on the main page instead of going to concrete URL! "
        />
      )}
    </div>
  );
}
