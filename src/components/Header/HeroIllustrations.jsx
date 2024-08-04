import React from "react";

function HeroIllustration() {
  return (
    <div className="mt-6 md:mt-0 flex-auto pl-12 md:pl-24 lg:pl-40 flex justify-center">
      <img
        src="header-man.png"
        alt="Illustration of a man with a resume on his desk"
        className="h-60 md:h-[400px] lg:h-[500px] object-contain"
      />
    </div>
  );
}

export default HeroIllustration;
