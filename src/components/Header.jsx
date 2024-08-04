import React from "react";
import Logo from "./Header/Logos";
import Buttons from "./Header/Button";
import HeroText from "./Header/HeroText";
import HeroIllustration from "./Header/HeroIllustrations";

function Header() {
  const gradientStyle = {
    background: "linear-gradient(to right, #ff0099, #ff6600)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-16">
      <Logo />
      <Buttons />
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 max-w-screen-xl mx-auto mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <HeroText gradientStyle={gradientStyle} />
          <HeroIllustration />
        </div>
      </div>
    </div>
  );
}

export default Header;
