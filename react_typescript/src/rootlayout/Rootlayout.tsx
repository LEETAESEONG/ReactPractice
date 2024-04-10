import { Outlet } from "react-router-dom";
import classes from "./Rootlayout.module.css";

// 하위 컴포넌트
import Navbar from "navbar/Navbar";

const Rootlayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.rootlayout}>
        <Outlet />
      </div>
    </div>
  );
};
export default Rootlayout;
