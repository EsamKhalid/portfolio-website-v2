import React from "react";

import NavBar from "@/components/NavBar/NavBar";

import PythonCard from "@/components/LanugageCards/PythonCard";

export default function page() {
  return (
    <>
      <NavBar />
      <h1>Experience Page</h1>
      <div className="flex justify-center">
        <PythonCard></PythonCard>
      </div>
    </>
  );
}
