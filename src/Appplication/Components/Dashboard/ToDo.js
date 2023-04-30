export default function ToDo() {
  const tasks = [
    "Create a new job",
    "Finish resume",
    "Apply for a job",
    "Find a new job",
    "Create a new job",
    "Finish resume",
    "Apply for a job",
  ];

  return (
    <div className="w-2/3 h-full flex flex-col bg-white rounded-lg px-10 py-8 gap-3 relative overflow-hidden">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-xl text-themeDark font-bold">To Do</h1>
          <h2 className="text-themeLight">Don't forget your tasks!</h2>
        </div>

        <div className="w-full bg-gradient-to-t from-white to-transparent h-28 absolute left-0 bottom-0"></div>
        <div className="flex flex-col gap-2 text-themeMedium overflow-y-scroll no-scrollbar">
          {tasks.map((task) => (
            <div className="flex gap-2">
              <input type="checkbox" />
              <h3>{task}</h3>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/tasks.svg"
        alt="tasklist"
        className="absolute h-80 aspect-square -top-10 right-20"
      />
    </div>
  );
}
