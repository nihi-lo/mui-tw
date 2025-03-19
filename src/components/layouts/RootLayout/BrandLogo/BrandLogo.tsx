import React from "react";
import { Link } from "react-router";

const BrandLogo: React.FC = () => {
  return (
    <Link to="/">
      <span className="text-xl font-bold">MUI + TW</span>
    </Link>
  );
};

export { BrandLogo };
