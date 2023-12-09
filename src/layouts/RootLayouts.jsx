import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayouts = () => {
  return (
    <>
      <Header />
      <main className="bg-mainbg font-roboto">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayouts;