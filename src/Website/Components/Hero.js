export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 text-center gap-5">
      <h2 className="text-themeMedium text-sm tracking-wider">
        Lightweight. Simple. Modern.
      </h2>
      <h1 className="text-themeDark font-bold text-6xl flex flex-col gap-2">
        <span>Get organized.</span>
        <span>Get hired.</span>
      </h1>
      <h1 className="text-themeMedium text-lg max-w-prose">
        Stay on top of your job search game. Try today for free!
      </h1>
      <div className="flex flex-row justify-between gap-7">
        <button className="bg-themeBlue text-white py-2 px-4 font-semibold rounded-lg">
          Sign Up
        </button>
        <button className="font-semibold">Explore</button>
      </div>
      <img src="./Checklist.jpg" alt="placeholder" className="max-w-xl" />
    </div>
  );
}
