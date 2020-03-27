import React from "react";
import { Link } from "react-router-dom";

const PageMain = () => {
  return (
    <>
      <Link to="/pageA">Page A</Link>
      <Link to="/pageB">Page B</Link>
      Toto
    </>
  );
};

export default PageMain;
