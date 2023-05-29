import { Outlet } from "react-router-dom";
import NavB from "./NavB";


const MainLayout = () => {
  return (
    <>
      <NavB/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default MainLayout;
