export default function CTA() {
  return (
    <div className="w-full h-max flex flex-col px-10 py-20 text-themeDark bg-themeBackground">
      <h1 className="text-4xl font-bold">Ready to get started?</h1>
      <h2 className="text-themeMedium tracking-wide max-w-prose">
        Get organized, be smarter. Finish your job search faster with more and
        much better offers!
      </h2>
      <div className="flex flex-row gap-5 py-5">
        <button className="bg-themeBlue text-white rounded-lg px-5 py-2 font-semibold">
          Sign up
        </button>
        <button className="bg-white text-themeBlue rounded-lg px-5 py-2 font-semibold border-2 border-themeBlue">
          Learn more
        </button>
      </div>
    </div>
  );
}
