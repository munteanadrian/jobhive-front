import { useSelector } from "react-redux";
import RouteConfig from "./Config/RouteConfig";
import { selectUser } from "./features/userSlice";

export default function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <RouteConfig />;{user ? <div>Logged in</div> : <div>Not logged in</div>}
    </>
  );
}
