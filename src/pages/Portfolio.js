import "../styles/Portfolio.css";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { ProjectsGrid } from "../components/ProjectsGrid";

const Portfolio = () => {
   const [count, setCount] = useState(0);
   const addition = () => {
      setCount(count + 1);
   };
   const subtraction = () => {
      setCount(count - 1);
   };
   return (
      <>
         <Layout>
            <ProjectsGrid></ProjectsGrid>
         </Layout>
      </>
      // <Layout>
      //    <>
      //       <h2>Counter</h2>
      //       <button onClick={() => subtraction()}>-</button>
      //       <span>{count}</span>
      //       <button onClick={() => addition()}>+</button>
      //    </>
      // </Layout>
   );
};
export { Portfolio };
