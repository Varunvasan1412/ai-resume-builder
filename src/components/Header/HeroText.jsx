import React from "react";

function HeroText() {
  const gradientStyle = {
    background: "linear-gradient(to right, #ff0099, #ff6600)", // Magenta to Orange gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="text-center md:text-left md:mr-12 lg:mr-20 flex-auto">
      <h1 className="font-Hero text-5xl md:text-6xl lg:text-7xl font-bold py-0.5 tracking-tight text-gray-900">
        Resumes that
      </h1>
      <h1 className="font-Hero text-5xl md:text-6xl lg:text-7xl font-bold py-1 tracking-tight text-gray-900">
        <span style={gradientStyle} className="underline">
          empower
        </span>{" "}
        your
      </h1>
      <h1 className="font-Hero text-5xl md:text-6xl lg:text-7xl font-bold py-2 tracking-tight text-gray-900">
        profile
      </h1>
      <p className="max-w-lg mx-auto md:mx-0 mt-6 text-lg md:text-xl font-Roboto-Medium text-gray-700">
        Adding wings to your resume through sparkling ideas, concepts,
        extraordinary and handcrafted designs. We collaborate with companies to
        create remarkable digital experiences. Empowering you to showcase your
        professional journey with a standout resume.
      </p>
    </div>
  );
}

export default HeroText;
