import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-[25px] pt-[15px]">
        <h1 className="text-4xl pb-[25px]">// Home Page</h1>
        <div className="flex justify-center">
          <div className="border w-fit border-cybpnk-grey p-[10px]">
            <p className="text-xl">
              Hello I'm <span className="">Esam Khalid </span>
              and I'm a second year computer science student
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
