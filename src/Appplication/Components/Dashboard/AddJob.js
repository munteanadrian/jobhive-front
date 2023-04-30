export default function AddJobDashboard() {
  return (
    <div className="w-1/3 h-full flex flex-col bg-white rounded-lg px-10 py-8 gap-3">
      {/* First part */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-themeDark font-bold">Add a job</h2>
          <h3 className="text-themeMedium">Quickly track a new job app</h3>
        </div>
        <p className="text-themeBlue">View All</p>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-3 mt-2">
        <input
          className="w-full h-12 text-themeDark border-b-2 focus:outline-none focus:border-themeDark"
          placeholder="Company"
        />
        <input
          className="w-full text-themeDark h-12 border-b-2 focus:outline-none focus:border-themeDark"
          placeholder="Location"
        />
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4" />
          <label className="text-themeMedium ml-2">The job is remote</label>
        </div>
        <button className="w-1/2 h-12 bg-themeGreenDark rounded-lg text-white font-bold mt-5">
          Add
        </button>
      </form>
    </div>
  );
}
