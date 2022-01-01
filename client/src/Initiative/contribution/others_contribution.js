import "C:/Users/HP/Desktop/InitiativeManagement/client/src/App.css";
import Axios from "axios";
import Contribute from "./Contribute.js";
import { useState } from "react";
function ContributeSection() {

  const [contributionList, setContributionList] = useState([]);
  const getContribution = () => {
    Axios.get("http://localhost:3001/getcon").then((response) => {
      setContributionList(response.data);
      console.log(response.data);
    });
  };



  

         
            return(
                <div>
                    <button onClick={getContribution}>Show Others Contribution</button><section className='initiativelist'>
                    {contributionList.map((contribution) => {
                        return <Contribute {...contribution}></Contribute>;
                    })}
                </section>
                </div>
        
         );
       }



export default ContributeSection;
