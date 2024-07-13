import React from "react";

import Image from "next/image";

import webv2pic from "@/Images/webv2pic.png";

import Project from "@/components/ProjectsSection/Project";

export default function page() {
  return (
    <>
      <Project
        ProjectName="Portfolio Website V2"
        ProjectImage={webv2pic}
        ProjectType="Personal Project"
        EndDate="31/03/2024"
      >
        <p className="text-lg text-justify mx-5 my-3">
          <br />
          After the creation of the first version of my portfolio website, I was
          somewhat satisfied but there was still lots to be improved about the
          first version. The first version was made using pure html, css and js
          meaning making the website responsive and have a comfortable viewing
          experience would be very difficult and take much more effort, so I
          decided to make this website using javascript frameworks and libaries
          mainly{" "}
          <span className="text-cybpnk-ylw2">
            <a>React.js</a>
          </span>
          ,{" "}
          <span className="text-cybpnk-ylw2">
            <a>Next.js</a>
          </span>{" "}
          and{" "}
          <span className="text-cybpnk-ylw2">
            <a>Tailwind.css</a>
          </span>
          . The use of these libraries would allow me to develop the website to
          a much higher standard and quicker than if I were to use pure html ,
          css and js.
        </p>
      </Project>
    </>
  );
}
