import { NextPage } from "next";
import React, { useEffect, useState } from "react";
// 1. Import the dynamic module
import dynamic from "next/dynamic";
// 2. Import the component using dynamic module
const ComponentA = dynamic(() => import("components/ComponentA"));

const HomePage: NextPage = () => {
  const [shown, setShown] = useState(false);

  // 3. Attach a scroll event handler
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 250) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="h-screen">Test</div>
      {/* 4. Add a condition to render the component */}
      {/* NextJS won't load ComponentA if shown is false */}
      {shown && <ComponentA />}
      <div className="h-screen">Test</div>
    </div>
  );
};

export default HomePage;
