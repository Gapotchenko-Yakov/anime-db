import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Layout = (props) => (
  <div className="layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
