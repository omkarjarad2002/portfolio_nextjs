import React from "react";
import "./Education.css";
import Arrow from "./Arrow";
import Image from "next/image";

function Education() {
  return (
    <div className="education" id="education">
      <h1 className=" edu_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
        Education
      </h1>
      <Arrow />
      <div className="edu_box">
        <div className="edu_10th_box">
          <h2 className=" ssc_head text-2xl ">SSC : </h2>
          <h3 className="ssc_desc text-xl">
            Shri Bhairavnath Janaseva Vidyalaya, Undawadi Kade Pathar
          </h3>
          <h3 className="ssc_desc text-xl">Marks Obtained : 88%</h3>
        </div>
        <div className="edu_10th_box">
          <h2 className=" ssc_head text-2xl">HSC : </h2>
          <h3 className="ssc_desc text-xl">
            Tuljaram Chaturchand College - Arts, Science & Commerce, Baramati.
          </h3>
          <h3 className="ssc_desc text-xl">Marks Obtained : 73.54%</h3>
        </div>
        <div className="edu_10th_box">
          <h2 className=" ssc_head text-2xl">DEGREE : </h2>
          <h3 className="ssc_desc text-xl">Field : Information Technology</h3>
          <h3 className="ssc_desc text-xl">
            Vidya Pratishthans Kamalnayan Bajaj Institute of Engineering and
            Technology
          </h3>
          <h3 className="ssc_desc text-xl">CGPA : 8.43 (TE)</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;
