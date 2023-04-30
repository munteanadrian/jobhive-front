import { AiFillMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-row items-center justify-between py-4 px-8">
      {/* Logo */}
      <div className="flex flex-row items-center justify-start gap-16">
        <div className="flex flex-row items-center justify-center gap-1 cursor-pointer">
          <AiFillMinusSquare className="text-4xl rounded-2xl text-themeBlue" />
          <h1 className="text-themeDark font-semibold text-2xl">JobHive</h1>
        </div>
        <div className="font-medium text-themeDark flex flex-row items-center justify-start gap-12">
          <h2>Home</h2>
          <h2>Features</h2>
          <h2>Pricing</h2>
          <h2>Contact</h2>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-7">
        <Link to="/login" className="cursor-pointer font-medium text-themeDark">
          Log in
        </Link>
        <Link
          to="/signup"
          className="cursor-pointer px-4 py-2 bg-themeBlue text-white font-medium rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
