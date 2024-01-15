"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Search from "@components/search/Search";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Boards.</h2>
      </div>
      <Search />
    </main>
  );
}
