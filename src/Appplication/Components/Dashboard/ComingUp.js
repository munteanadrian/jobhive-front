export default function ComingUpDashboard() {
  const comingUp = [
    {
      what: "Interview",
      where: "Google",
      when: "Today, 2:00 PM",
    },
    {
      what: "HR Call",
      where: "Facebook",
      when: "Tomorrow, 10:00 AM",
    },
    {
      what: "Tech Interview",
      where: "Amazon",
      when: "July 18th, 3:00 PM",
    },
    {
      what: "HR Call",
      where: "Microsoft",
      when: "July 20th, 11:00 AM",
    },
    {
      what: "Tech Interview",
      where: "Apple",
      when: "To be decided",
    },
    {
      what: "HR Call",
      where: "Microsoft",
      when: "July 20th, 11:00 AM",
    },
    {
      what: "Tech Interview",
      where: "Apple",
      when: "To be decided",
    },
  ];
  return (
    <div className="w-2/3 flex flex-col gap-5 px-10 py-8 bg-white rounded-lg relative">
      {/* First row: coming up + design */}
      <div className="flex gap-4 items-center relative">
        <h2 className="text-5xl font-semibold text-themeDark">14</h2>
        <div className="flex flex-col">
          <h3 className="text-xl text-themeDark font-bold">Coming Up</h3>
          <h4 className="text-themeMedium">
            Don't lose track of time, get ready!
          </h4>
        </div>

        <img src="./plane.png" className="absolute right-0" alt="" />
      </div>
      {/* Second row: table */}
      <div className="w-full bg-gradient-to-t from-white to-transparent h-28 absolute left-0 bottom-0"></div>
      <div className="w-full h-full overflow-y-scroll no-scrollbar">
        {comingUp.map((item, index) => {
          return (
            <div className="flex items-center h-12 border-themeLight">
              <h4 className="text-themeDark font-bold w-2/5">{item.what}</h4>
              <h5 className="text-themeMedium w-2/5">{item.where}</h5>
              <h5 className="text-themeMedium w-1/5">{item.when}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
