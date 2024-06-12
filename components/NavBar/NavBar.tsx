import Image from "next/image";
import TestImg from "./testImg.png";

/*
function NavBar() {
  return (
    <>
      <div className="border border-white border-x-0 border-y-2 py-3">
        <h1 className="font-Blender-Pro-Book text-white text-nowrap text-4xl">
          Esam Khalid
        </h1>
        <nav></nav>
      </div>
    </>
  );
}
*/

function NavBar() {
  return (
    <>
      <div className="navbar flex justify-between text-white items-center w-full">
        <h1 className="text-4xl border-corners-sm">Esam Khalid</h1>
        <ul className="flex-1 text-center list-none">
          <li>About Me</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
