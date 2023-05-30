import { Outlet } from "react-router-dom";
import NavB from "./NavB";
import { Provider } from "react-redux";
import store from "../../store/store";

const MainLayout = () => {
  return (
    <Provider store = {store}>
      <NavB/>
      <main>
        <Outlet/>
      </main>
    </Provider>
  )
}

export default MainLayout;
