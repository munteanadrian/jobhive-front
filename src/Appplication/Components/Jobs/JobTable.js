function JobRow({ job }) {
  const status = new Map([
    ["Pending", "bg-themeYellow/30 text-themeYellow"],
    ["Offer", "bg-themeGreen/30 text-themeGreen"],
  ]);

  return (
    <div className="w-full h-1/10 flex justify-between text-themeDark -mx-3 px-3 py-3 rounded-lg hover:bg-themeBackground/50 transition duration-300 cursor-pointer">
      <div className="flex-grow basis-1/4 font-semibold">
        <h2 className="font-semiBold">{job.company}</h2>
      </div>
      <div className="flex-grow basis-1/4">
        <h2>{job.location}</h2>
      </div>
      <div className="flex-grow basis-1/4">
        <div
          className={`flex justify-center items-center rounded-lg w-1/3 h-full ${status.get(
            job.status
          )}`}
        >
          <h2>{job.status}</h2>
        </div>
      </div>
      <div className="flex-grow basis-1/4">
        <h2>{job.nextUp}</h2>
      </div>
    </div>
  );
}

export default function JobTable({ jobs }) {
  return (
    <div className="w-full h-full overflow-y-scroll no-scrollbar">
      <div className="flex justify-between pb-7">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-4xl font-bold text-themeDark">
            Your Job Applications
          </h1>
          <p className="text-themeLight">
            You've reached{" "}
            <span className="font-bold text-themeDark">60 applications</span>,
            start working through them!
          </p>
        </div>

        <div className="flex gap-5 w-1/6 justify-around">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-themeDark">30</h1>
            <p className="text-themeLight">Pending</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-themeDark">12</h1>
            <p className="text-themeLight">Offers</p>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="flex flex-col gap-4 pb-5">
        <hr className="text-themeLight" />
        <div className="w-full h-1/10 flex justify-between text-themeLight">
          <div className="basis-1/4">
            <h2>Company</h2>
          </div>
          <div className="basis-1/4">
            <h2>Location</h2>
          </div>
          <div className="basis-1/4">
            <h2>Status</h2>
          </div>
          <div className="basis-1/4">
            <h2>Next Up</h2>
          </div>
        </div>
        <hr className="text-themeLight" />
      </div>
      {/* Body */}
      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <JobRow job={job} />
        ))}
      </div>
    </div>
  );
}
