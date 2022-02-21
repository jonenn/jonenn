import { useContext } from "react";
import { Layout } from "../components/Layout";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { DataContext } from "../context/DataContext";

const Portfolio = () => {
   const { showMenu } = useContext(DataContext);
   return (
      <Layout>
         <ProjectsGrid currentState={showMenu}></ProjectsGrid>
      </Layout>
   );
};
export { Portfolio };
