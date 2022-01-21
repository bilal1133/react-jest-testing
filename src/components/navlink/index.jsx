import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const NavLink = ({ page, children }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="learn-react"
    >
      {children}
    </a>
  );
};

export default NavLink;
