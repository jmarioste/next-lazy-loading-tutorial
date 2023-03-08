import { NextPage } from "next";
import React, { useState } from "react";
// 1. Import the dynamic module
import dynamic from "next/dynamic";
// 2. Import the component using dynamic module
const ComponentA = dynamic(() => import("components/ComponentA"));

const HomePage: NextPage = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className="container">
      {/* 3. Implement click handle to toggle the state */}
      <button className="btn btn-primary" onClick={() => setShown(true)}>
        Load Component
      </button>

      {/* 4. Add a condition to render the component */}
      {/*NextJS won't load ComponentA if shown is false */}
      {shown && <ComponentA />}
    </div>
  );
};

export default HomePage;
