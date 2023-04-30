import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      Signup({ name: name, email: email, password: password, loggedIn: true })
    );
  };

  return (
    <div className="h-screen w-screen flex flex-row justify-center font-inter">
      <div className="w-2/3 h-screen flex flex-row justify-center items-center gap-10">
        <h1 className="text-5xl text-themeDark font-semibold">Sign Up</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col py-4 gap-2"
        >
          <input
            type="name"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg px-4 py-2 border"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg px-4 py-2 border"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="px-10 py-2 bg-themeGreen rounded-lg text-white font-semibold max-w-fit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
