import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="text-4xl">Home Page</h1>
      <Link href="/TestPage">Test bruh</Link>
    </>
  );
}
