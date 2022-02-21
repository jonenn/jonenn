import { Layout } from "../components/Layout";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { IntroCard } from "../components/IntroCard";
import { date } from "../App";

const About = () => {
   const { showMenu } = useContext(DataContext);
   return (
      <Layout>
         <IntroCard
            currentState={showMenu}
            ctitle="About me"
            cparagraph={`I am Juan J. Malaver, a ${date.getFullYear() - 1999}
               year old front-end developer that loves learning new things every day. I
               have always been passionate about art, literature, photography,
               cinematography, design and technology as much as solving
               problems. `}
            csubtitle="Skills"
         />
      </Layout>
   );
};

export { About };
