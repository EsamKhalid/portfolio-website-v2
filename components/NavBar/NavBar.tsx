import { GiAbstract050 } from "react-icons/gi";

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
        <h1 className="text-4xl">Esam Khalid</h1>
        <ul className="flex-1 text-center list-none">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </div>
      <div
        className="border w-[200px] h-[80px] bg-white mt-28 ml-28 
                      relative after:absolute after:m-[-22px]  after:bg-cybpnk-blk2 after:w-[40px] 
                      after:h-[40px] after:rotate-45"
      ></div>
    </>
  );
}

export default NavBar;
