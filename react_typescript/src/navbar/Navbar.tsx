import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

// components
import { Box1, P1 } from "./components/NavbarComponents";

interface ClickBoxesProps {
  pathes: string[][];
}

const ClickBox: React.FC<ClickBoxesProps> = ({ pathes }) => {
  return (
    <>
      {pathes.map(([path, name], i) => {
        return (
          <Box1 key={i}>
            <NavLink to={path} style={{ textDecoration: "none" }}>
              <P1>{name}</P1>
            </NavLink>
          </Box1>
        );
      })}
    </>
  );
};

const Navbar: React.FC = () => {
  const pathes = [
    ["/", "메인페이지"],
    ["/signup", "회원가입"],
    ["/login", "로그인"],
  ];

  return (
    <div className={classes.navbar}>
      <ClickBox pathes={pathes} />
    </div>
  );
};

export default Navbar;
