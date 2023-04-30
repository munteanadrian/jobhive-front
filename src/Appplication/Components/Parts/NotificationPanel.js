export default function NotificationPanel() {
  return (
    <div className="h-screen w-screen bg-themeBackground top-o left-o z-50 p-5 absolute">
      <div className="h-1/10 w-full flex justify-between items-center">
        <h1 className="font-semibold text-xl text-themeDark">Notifications</h1>
      </div>
      <div className="h-9/10 w-full flex pt-5 flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-themeMedium">Interview today</h2>
          <p className="text-themeLight">2 hours ago</p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-themeMedium">HR Call</h2>
          <p className="text-themeLight">15 minutes ago</p>
        </div>
      </div>
    </div>
  );
}
