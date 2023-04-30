import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center lg:p-1">
      <div className="bg-white rounded-xl w-full h-full flex justify-end overflow-hidden relative">
        <div className="bg-themeBlue h-full rounded-xl w-1/10 flex justify-center items-center text-white">
          <HiMagnifyingGlass className="text-2xl" />
        </div>
        <input
          className="w-8/12 lg:w-9/12 h-full bg-transparent outline-none absolute left-5 lg:left-10 text-themeMedium"
          placeholder="Search anything..."
        />
      </div>
    </div>
  );
}
