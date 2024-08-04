import React from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Buttons() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="absolute top-0 right-0 mr-5 mt-7 flex space-x-4">
      {isSignedIn ? (
        <div className="flex space-x-4">
          {" "}
          {/* Added space-x-4 for horizontal spacing */}
          <Link to="/dashboard">
            <button className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 transition duration-300 font-semibold">
              Dashboard
            </button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <button className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 font-semibold">
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
}

export default Buttons;
