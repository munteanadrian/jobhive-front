import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="h-screen w-screen flex justify-center font-inter">
      <div className="w-2/3 h-screen flex flex-row-reverse justify-center items-center gap-10">
        {/* First half (form) */}
        <div className="w-1/3 h-screen flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-themeDark text-4xl font-bold">Join us</h1>
            <span className="text-themeMedium">
              Fill in the stuff below to sign up!
            </span>
          </div>

          <form action="submit" className="flex flex-col py-4 gap-2">
            <input
              type="text"
              className="rounded-lg px-4 py-2 border"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="rounded-lg px-4 py-2 border"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="border rounded-lg px-4 py-2"
              placeholder="Password"
              required
            />
          </form>
          <button className="px-10 py-2 bg-themeGreen rounded-lg text-white font-semibold max-w-fit">
            Sign Up!
          </button>
          <span>Or</span>
          <button className="bg-white px-10 py-2 rounded-lg shadow-lg max-w-fit flex items-center justify-center gap-4 border">
            <FcGoogle className="inline-block text-xl" />
            <span>Sign Up with Google</span>
          </button>
        </div>

        {/* Second half - image */}
        <div className="w-1/2 h-screen flex items-center">
          <img src="./LoginImage.jpg" className="-mt-14" alt="" />
        </div>
      </div>

      <span className="absolute bottom-0 mx-auto text-sm font-light p-4 text-themeLight">
        © 2021, made with ❤️ by <span className="font-medium">Adrian</span>. All
        rights reserved.
      </span>
    </div>
  );
}
