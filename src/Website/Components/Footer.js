import { AiFillMinusSquare, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-max flex flex-col items-center justify-center">
      <div className="w-5/6 h-full p-4  flex flex-col justify-between">
        <div className="flex flex-row justify-between pb-4 px-8">
          <div className="flex flex-col items-start max-w-sm gap-3">
            <div className="flex flex-row items-center justify-center gap-3 cursor-pointer">
              <AiFillMinusSquare className="text-5xl rounded-2xl text-themeBlue" />
              <h1 className="text-themeDark font-semibold text-3xl">JobHive</h1>
            </div>
            <p className="text-themeDark font-normal">
              Stay on top of your job search game and land your dream job with
              us!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-themeMedium font-semibold text-sm">Product</h1>
            <p className="text-themeDark font-semibold text-md">Overview</p>
            <p className="text-themeDark font-semibold text-md">Features</p>
            <p className="text-themeDark font-semibold text-md">Solutions</p>
            <p className="text-themeDark font-semibold text-md">Tutorials</p>
            <p className="text-themeDark font-semibold text-md">Pricing</p>
            <p className="text-themeDark font-semibold text-md">Releases</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-themeMedium font-semibold text-sm">Company</h1>
            <p className="text-themeDark font-semibold text-md">About Us</p>
            <p className="text-themeDark font-semibold text-md">Careers</p>
            <p className="text-themeDark font-semibold text-md">Press</p>
            <p className="text-themeDark font-semibold text-md">News</p>
            <p className="text-themeDark font-semibold text-md">Media Kit</p>
            <p className="text-themeDark font-semibold text-md">Contact</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-themeMedium font-semibold text-sm">
              Resources
            </h1>
            <p className="text-themeDark font-semibold text-md">Blog</p>
            <p className="text-themeDark font-semibold text-md">Newsletter</p>
            <p className="text-themeDark font-semibold text-md">Events</p>
            <p className="text-themeDark font-semibold text-md">Help</p>
            <p className="text-themeDark font-semibold text-md">Tutorials</p>
            <p className="text-themeDark font-semibold text-md">Support</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-themeMedium font-semibold text-sm">Social</h1>
            <p className="text-themeDark font-semibold text-md">Twitter</p>
            <p className="text-themeDark font-semibold text-md">Linkedin</p>
            <p className="text-themeDark font-semibold text-md">Facebook</p>
            <p className="text-themeDark font-semibold text-md">Github</p>
            <p className="text-themeDark font-semibold text-md">List</p>
            <p className="text-themeDark font-semibold text-md">Dribble</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-themeMedium font-semibold text-sm">Legal</h1>
            <p className="text-themeDark font-semibold text-md">Terms</p>
            <p className="text-themeDark font-semibold text-md">Privacy</p>
            <p className="text-themeDark font-semibold text-md">Cookies</p>
            <p className="text-themeDark font-semibold text-md">Licenses</p>
            <p className="text-themeDark font-semibold text-md">Settings</p>
            <p className="text-themeDark font-semibold text-md">Contact</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-2">
          <hr />
          <div className="flex justify-between text-themeDark">
            <span className="font-lighttext-lg">
              © 2021, made with ❤️ by{" "}
              <span className="font-medium">Adrian</span>. All rights reserved.
            </span>
            <div className="flex flex-row gap-5 text-2xl">
              <BsLinkedin />
              <BsFacebook />
              <AiFillTwitterCircle />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
