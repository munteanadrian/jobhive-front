export default function Dashboard() {
  return (
    <div className="w-1/3 h-full flex flex-col bg-white rounded-lg px-10 py-8 gap-3">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-themeDark">Files</h1>
          <h2 className="text-themeLight">Upload your files for easy access</h2>
        </div>
        <div className="flex flex-col gap-4 pt-7">
          <div className="flex flex-row gap-4 items-center">
            <h3 className="bg-themeBlue/25 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl">
              1
            </h3>
            <h3 className="text-lg text-themeDark font-semibold">
              Upload your resume
            </h3>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <h3 className="bg-themeBlue/50 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl">
              2
            </h3>
            <h3 className="text-lg text-themeDark font-semibold">
              Upload a cover letter template
            </h3>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <h3 className="bg-themeBlue/75 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl">
              3
            </h3>
            <h3 className="text-lg text-themeDark font-semibold">
              Add your links
            </h3>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <h3 className="bg-themeBlue text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl">
              4
            </h3>
            <h3 className="text-lg text-themeDark font-semibold">
              Complete your profile
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
