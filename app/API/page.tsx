"use client";

import React from "react";

import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar/NavBar";

export default function page() {
  const [champions, setChampions] = useState([]);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const fetchChampions = async () => {
  //       try {
  //         const response = await fetch("/api/champions");
  //         const result = await response.json();
  //         setChampions(Object.values(result));
  //       } catch (err) {
  //         setError((err as Error).message);
  //       }
  //     };
  //     fetchChampions();
  //   });

  //this use effect is used to fetch data from the apis
  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch("/api/champions");
        const result = await response.json();
        setChampions(Object.values(result));
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchChampions();
  }, []);

  const formatChampionName = (name: string) => {
    name = name
      .replace(/['](.)/g, (match, p1) => p1.toLowerCase())
      .replace(/[\s]/g, "");
    return name;
  };

  return (
    <>
      <NavBar />
      <h1>API Page</h1>
      <pre>{JSON.stringify(champions, null, 2)}</pre>
    </>
  );
}
