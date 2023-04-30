export default function WelcomePopup() {
  return (
    <div className="w-full h-full bg-white rounded-lg px-10 py-5 flex justify-around items-center gap-10 relative">
      <div className="absolute top-2 right-3">X</div>
      <img src="/PopupImage.svg" alt="" className="h-full aspect-square" />
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-themeDark">
          Welcome to JobHive!
        </h1>
        <p className="text-themeMedium max-w-prose">
          It’s good to have you here. Feel free to explore the app and once
          you’re done, dive in. Head over to the My Jobs page and start tracking
          your job search progress.
          <br />
          <br />
          If you have any questions or feedback, make sure to visit the Help
          section in the side panel. Enjoy and good luck!
        </p>
        <div className="flex flex-row gap-5 w-1/2">
          <button className="bg-themeGreenDark text-white font-bold py-2 px-4 rounded-full basis-1/2">
            Explore
          </button>
          <button className="bg-themeYellow text-white font-bold py-2 px-4 rounded-full basis-1/2">
            Go to My Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
