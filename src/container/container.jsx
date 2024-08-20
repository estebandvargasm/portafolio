import React from "react";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

const Container = () => {
  return (
    <>
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Container;